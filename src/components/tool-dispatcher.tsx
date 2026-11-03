'use client'

import React, { lazy, Suspense } from 'react'

// Lazy load tool packages to optimize initial mobile bundle size
const ScreenTests = lazy(() => import('@/components/tools/screen-tests').then(m => ({
  default: ({ slug }: { slug: string }) => {
    if (slug === 'dead-pixel-test') return <m.DeadPixelTest />
    if (slug === 'screen-uniformity-test') return <m.UniformityTest />
    if (slug === 'monitor-test') return <m.MonitorTest />
    if (slug === 'oled-gray-test') return <m.OledGrayTest />
    if (slug === 'oled-burn-in-test') return <m.BurnInTest />
    if (slug === 'screen-color-test') return <m.ColorTest />
    return null
  }
})))

const ImageAndLight = lazy(() => import('@/components/tools/image-and-light').then(m => ({
  default: ({ slug }: { slug: string }) => {
    if (slug === 'white-screen-image') return <m.ImageGenerator />
    if (slug === 'screen-resolution-test') return <m.ResolutionTest />
    return null
  }
})))

const Effects = lazy(() => import('@/components/tools/effects').then(m => ({
  default: ({ slug }: { slug: string }) => {
    if (slug === 'static-screen') return <m.StaticScreen />
    if (slug === 'no-signal-screen') return <m.NoSignalScreen />
    if (slug === 'white-noise-screen') return <m.NoiseScreen color="white" />
    if (slug === 'brown-noise-screen') return <m.NoiseScreen color="brown" />
    if (slug === 'pink-noise-screen') return <m.NoiseScreen color="pink" />
    if (slug === 'broken-screen') return <m.BrokenScreen />
    if (slug === 'hacker-typer') return <m.HackerTyper />
    if (slug === 'zoom-lighting') return <m.ZoomLighting />
    if (slug === 'visual-noise') return <m.VisualNoise />
    if (slug === 'color-cycle') return <m.ColorCycle />
    if (slug === 'gradient-screen') return <m.GradientScreen />
    return null
  }
})))

const Screensavers = lazy(() => import('@/components/tools/screensavers').then(m => ({
  default: ({ slug }: { slug: string }) => {
    if (slug === 'matrix-screensaver') return <m.MatrixScreensaver />
    if (slug === 'flip-clock-screensaver') return <m.FlipClockScreensaver />
    if (slug === 'dvd-screensaver') return <m.DvdScreensaver customLogo={false} />
    if (slug === 'custom-dvd-screensaver') return <m.DvdScreensaver customLogo={true} />
    if (slug === 'snow-screen') return <m.SnowScreen />
    return null
  }
})))

const Utilities = lazy(() => import('@/components/tools/utilities').then(m => ({
  default: ({ slug }: { slug: string }) => {
    if (slug === 'countdown-timer') return <m.CountdownTimer />
    if (slug === 'stopwatch') return <m.Stopwatch />
    return null
  }
})))

const FakeScreens = lazy(() => import('@/components/tools/fake-screens').then(m => ({
  default: ({ slug }: { slug: string }) => {
    if (slug === 'fake-windows-10-update') return <m.FakeUpdateScreen os="win10" />
    if (slug === 'fake-windows-11-update') return <m.FakeUpdateScreen os="win11" />
    if (slug === 'fake-mac-update') return <m.FakeUpdateScreen os="mac" />
    if (slug === 'fake-android-update') return <m.FakeUpdateScreen os="android" />
    if (slug === 'fake-windows-xp-update') return <m.FakeUpdateScreen os="winxp-update" />
    if (slug === 'fake-windows-xp-boot') return <m.FakeUpdateScreen os="winxp-boot" />
    if (slug === 'fake-chrome-os-update') return <m.FakeUpdateScreen os="chrome" />
    if (slug === 'fake-ubuntu-update') return <m.FakeUpdateScreen os="ubuntu" />
    if (slug === 'fake-video-call') return <m.FakeCallScreen appType="generic" />
    if (slug === 'fake-zoom-meeting') return <m.FakeCallScreen appType="zoom" />
    if (slug === 'fake-teams-meeting') return <m.FakeCallScreen appType="teams" />
    if (slug === 'fake-google-meet') return <m.FakeCallScreen appType="meet" />
    if (slug === 'fake-slack-huddle') return <m.FakeCallScreen appType="slack" />
    return null
  }
})))

function ToolLoadingFallback() {
  return (
    <div
      role="status"
      aria-label="Loading tool"
      className="flex h-[50vh] min-h-64 w-full items-center justify-center rounded-2xl border bg-muted/20 animate-pulse text-xs text-muted-foreground font-mono"
    >
      Loading tool...
    </div>
  )
}

export function renderToolComponent(slug: string): React.ReactNode {
  // Screen tests
  if (['dead-pixel-test', 'screen-uniformity-test', 'monitor-test', 'oled-gray-test', 'oled-burn-in-test', 'screen-color-test'].includes(slug)) {
    return (
      <Suspense fallback={<ToolLoadingFallback />}>
        <ScreenTests slug={slug} />
      </Suspense>
    )
  }

  // Image & Light
  if (['white-screen-image', 'screen-resolution-test'].includes(slug)) {
    return (
      <Suspense fallback={<ToolLoadingFallback />}>
        <ImageAndLight slug={slug} />
      </Suspense>
    )
  }

  // Visual effects
  if (['static-screen', 'no-signal-screen', 'white-noise-screen', 'brown-noise-screen', 'pink-noise-screen', 'broken-screen', 'hacker-typer', 'zoom-lighting', 'visual-noise', 'color-cycle', 'gradient-screen'].includes(slug)) {
    return (
      <Suspense fallback={<ToolLoadingFallback />}>
        <Effects slug={slug} />
      </Suspense>
    )
  }

  // Screensavers
  if (['matrix-screensaver', 'flip-clock-screensaver', 'dvd-screensaver', 'custom-dvd-screensaver', 'snow-screen'].includes(slug)) {
    return (
      <Suspense fallback={<ToolLoadingFallback />}>
        <Screensavers slug={slug} />
      </Suspense>
    )
  }

  // Utilities
  if (['countdown-timer', 'stopwatch'].includes(slug)) {
    return (
      <Suspense fallback={<ToolLoadingFallback />}>
        <Utilities slug={slug} />
      </Suspense>
    )
  }

  // Fake Screens & Calls
  if (slug.startsWith('fake-')) {
    return (
      <Suspense fallback={<ToolLoadingFallback />}>
        <FakeScreens slug={slug} />
      </Suspense>
    )
  }

  return null
}
