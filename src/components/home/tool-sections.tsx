import { Section } from '@/components/section'
import { ToolGrid } from '@/components/tool-card'
import { getTool } from '@/lib/tools'
import { useTranslation } from '@/lib/i18n'

const SCREEN_TEST_SLUGS = [
  'dead-pixel-test',
  'screen-uniformity-test',
  'monitor-test',
  'oled-gray-test',
  'oled-burn-in-test',
  'screen-color-test',
  'screen-resolution-test',
]

const EFFECT_SLUGS = [
  'matrix-screensaver',
  'flip-clock-screensaver',
  'dvd-screensaver',
  'motivational-quote-screensaver',
  'static-screen',
  'no-signal-screen',
  'white-noise-screen',
  'broken-screen',
  'hacker-typer',
]

const OTHER_TOOL_SLUGS = [
  'zoom-lighting',
  'fake-slack-huddle',
  'countdown-timer',
  'stopwatch',
  'fake-windows-10-update',
  'fake-windows-11-update',
  'fake-mac-update',
  'fake-zoom-meeting',
  'fake-teams-meeting',
  'fake-google-meet',
]

export function ToolSections() {
  const { t } = useTranslation()
  const screenTests = SCREEN_TEST_SLUGS.map(getTool)
  const effects = EFFECT_SLUGS.map(getTool)
  const otherTools = OTHER_TOOL_SLUGS.map(getTool)

  return (
    <>
      <Section
        id="screen-tests"
        eyebrow={t('screenTestsEyebrow', 'Display testing')}
        title={t('screenTests', 'Screen Tests')}
        description={t(
          'screenTestsDesc',
          'Solid colors and test patterns for checking dead pixels, uniformity, burn-in and color accuracy.'
        )}
        className="border-t bg-muted/20"
      >
        <ToolGrid tools={screenTests} />
      </Section>

      <Section
        id="effects"
        eyebrow={t('effectsEyebrow', 'Visuals & animations')}
        title={t('effects', 'Effects')}
        description={t(
          'effectsDesc',
          'Animated static, noise, gradients and simulated effects that run right in your browser.'
        )}
        className="border-t"
      >
        <ToolGrid tools={effects} />
      </Section>

      <Section
        id="other-tools"
        eyebrow={t('otherToolsEyebrow', 'Utilities & simulations')}
        title={t('otherTools', 'Other Tools')}
        description={t(
          'otherToolsDesc',
          'Timers, a stopwatch, video-call lighting and harmless simulated screens.'
        )}
        className="border-t bg-muted/20"
      >
        <ToolGrid tools={otherTools} />
      </Section>
    </>
  )
}
