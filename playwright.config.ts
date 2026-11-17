import { defineConfig, devices } from '@playwright/test'

/** Cross-device bug audit (tests/audit.spec.ts) against the local production build. */
const PORT = 4400

export default defineConfig({
  testDir: 'tests',
  outputDir: 'tests/out/artifacts',
  timeout: 90_000,
  fullyParallel: true,
  workers: 6,
  retries: 0,
  reporter: [['line'], ['json', { outputFile: 'tests/out/results.json' }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'off',
    screenshot: 'off',
    video: 'off',
  },
  webServer: {
    command: `npx astro preview --port ${PORT}`,
    url: `http://localhost:${PORT}/`,
    reuseExistingServer: true,
    timeout: 60_000,
  },
  projects: [
    { name: 'desktop-chrome', use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } } },
    { name: 'desktop-firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'desktop-safari', use: { ...devices['Desktop Safari'] } },
    { name: 'iphone-14', use: { ...devices['iPhone 14'] } },
    { name: 'pixel-7', use: { ...devices['Pixel 7'] } },
    { name: 'galaxy-s9', use: { ...devices['Galaxy S9+'] } },
    { name: 'ipad-mini', use: { ...devices['iPad Mini'] } },
    { name: 'ipad-mini-landscape', use: { ...devices['iPad Mini landscape'] } },
  ],
})
