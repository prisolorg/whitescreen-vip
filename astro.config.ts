import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import tailwindcss from '@tailwindcss/vite'
import { LEGACY_REDIRECTS } from './src/lib/legacy-redirects'
import { loadEnv } from 'vite'

const adsenseClient = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC_').PUBLIC_ADSENSE_CLIENT?.trim()

const rootDir = path.dirname(fileURLToPath(import.meta.url))
const redirects = Object.entries(LEGACY_REDIRECTS)

export default defineConfig({
  site: 'https://whitescreen.vip',
  // Matches the URLs already indexed for whitescreen.vip: every page ends with a slash.
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Static redirect pages for hosts without redirect rules; the integration below adds real 301s.
  redirects: Object.fromEntries(redirects),
  integrations: [
    // Preact with React compatibility: same components, a much smaller runtime than React.
    preact({ compat: true }),
    {
      name: 'whitescreen-redirect-files',
      hooks: {
        // 301s for Netlify and Cloudflare Pages (_redirects) and Vercel (vercel.json in the project root).
        'astro:build:done': async ({ dir }) => {
          const out = fileURLToPath(dir)
          // ads.txt authorizes Google to sell this site's ad space (only when AdSense is configured).
          if (adsenseClient) {
            await writeFile(path.join(out, 'ads.txt'), `google.com, ${adsenseClient.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`)
          }
          await writeFile(path.join(out, '_redirects'), redirects.map(([from, to]) => `${from} ${to} 301`).join('\n') + '\n')
          // Vercel reads vercel.json from the project root before building, so this file is committed:
          // when the redirects change, a local build updates it.
          await writeFile(
            path.join(rootDir, 'vercel.json'),
            JSON.stringify({ framework: 'astro', installCommand: 'npm ci', buildCommand: 'npm run build', outputDirectory: 'dist', trailingSlash: true, redirects: redirects.map(([source, destination]) => ({ source, destination, permanent: true })) }, null, 2),
          )
        },
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Bundle React-based packages into the server build too, so their `react` import resolves to preact/compat.
      noExternal: ['lucide-react'],
      alias: {
        // React APIs come from Preact (also inside node_modules such as lucide-react).
        'react/jsx-runtime': 'preact/jsx-runtime',
        'react/jsx-dev-runtime': 'preact/jsx-dev-runtime',
        'react-dom/client': 'preact/compat/client',
        'react-dom/server': 'preact/compat/server',
        'react-dom': 'preact/compat',
        react: 'preact/compat',
        '@': path.resolve(rootDir, 'src'),
        'next/link': path.resolve(rootDir, 'src/lib/next-shim.tsx'),
        'next/navigation': path.resolve(rootDir, 'src/lib/next-shim.tsx'),
      },
    },
  },
})
