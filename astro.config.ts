import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { LEGACY_REDIRECTS } from './src/lib/legacy-redirects'

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
    react(),
    {
      name: 'whitescreen-redirect-files',
      hooks: {
        // 301s for Netlify and Cloudflare Pages (_redirects) and Vercel (vercel.json).
        'astro:build:done': async ({ dir }) => {
          const out = fileURLToPath(dir)
          await writeFile(path.join(out, '_redirects'), redirects.map(([from, to]) => `${from} ${to} 301`).join('\n') + '\n')
          await writeFile(
            path.join(out, 'vercel.json'),
            JSON.stringify({ trailingSlash: true, redirects: redirects.map(([source, destination]) => ({ source, destination, permanent: true })) }, null, 2),
          )
        },
      },
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, 'src'),
        'next/link': path.resolve(rootDir, 'src/lib/next-shim.tsx'),
        'next/navigation': path.resolve(rootDir, 'src/lib/next-shim.tsx'),
      },
    },
  },
})
