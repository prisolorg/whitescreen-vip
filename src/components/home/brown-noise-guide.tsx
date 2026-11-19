import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Brown Noise Generator page (English). Order follows search demand:
 * brown noise / play brown noise / free brown noise / brown noise no ads + misspellings (~87K) →
 * brown noise for sleep / sleeping / free brown noise for sleep / deep sleep / 30 minutes (~25K) →
 * what is brown noise / brownian noise / brown sound / what does it sound like / frequency (~1.6K) →
 * brown noise app / free brown noise app / brown noise maker (~0.8K).
 */
export function BrownNoiseGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: brown noise / play brown noise / free brown noise / brown noise no ads / brown noise free + misspellings (~87K) */}
      <Section wide id="play-heading" title="Play Brown Noise Free, With No Ads">
        <p className={p}>
          Press Start Noise and it plays straight away, free and with no sign-up. No ads interrupt the sound, so it never stops in the
          middle of the night. Press Space to start or stop. It keeps playing until you stop it or the sleep timer runs out.
        </p>
        <Table
          caption="Generator controls"
          head={['Control', 'What it does']}
          rows={[
            ['Volume', 'From −60 dB to 0 dB (starts at −18 dB)'],
            ['Sleep timer', 'Off, 15, 30, 60 or 90 minutes, then a gentle fade'],
            ['Filter (More)', 'Low pass for an even deeper rumble, High pass to lift it'],
            ['Visual (More)', 'Waveform, TV static, or a Dark screen'],
          ]}
        />
      </Section>

      {/* Cluster: brown noise for sleep / for sleeping / brown noise sleep / free brown noise for sleep / deep sleep / 30 minutes (~25K) */}
      <Section wide id="sleep-heading" title="Brown Noise for Sleep">
        <p className={p}>
          Brown noise for sleeping works because it is deep and smooth, closer to distant thunder or a strong wind than to a hiss. Many people find
          it easier to fall asleep to than white noise.
        </p>
        <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-foreground/40 sm:text-[15px]">
          <li>Open this page on your phone, tablet or laptop and plug it in.</li>
          <li>Set the volume low, a little quieter than you think you need.</li>
          <li>Pick a sleep timer, for example 30 minutes, or leave it Off to play all night.</li>
          <li>Choose the Dark visual in More so the screen gives off almost no light.</li>
        </ol>
        <p className={p}>
          For deep sleep, Low pass with a low Cutoff makes the rumble even softer.
        </p>
      </Section>

      {/* Cluster: what is brown noise / brownian noise / brown sound / what does brown noise sound like / frequency / meaning (~1.6K) */}
      <Section wide id="what-heading" title="What Is Brown Noise?">
        <p className={p}>
          Brown noise, also called Brownian noise, gets its name from Brownian motion, the random drift of tiny particles, not from the color. Each
          sample drifts a little from the last one, so the sound loses energy as the pitch rises: much of it sits in the low frequencies.
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Brown noise:</strong> deep rumble, like a waterfall, heavy rain on a roof or a plane cabin.</li>
          <li>
            <Link href="/pink-noise-generator" className={link}>Pink noise generator</Link>: in between, like steady rain.
          </li>
          <li>
            <Link href="/white-noise-generator" className={link}>White noise generator</Link>: bright hiss, like an untuned radio.
          </li>
        </ul>
      </Section>

      {/* Cluster: brown noise app / free brown noise app / brown noise app free / brown noise maker / sound machine brown noise (~0.8K) */}
      <Section wide id="app-heading" title="A Brown Noise App Without Installing Anything">
        <p className={p}>
          You don&apos;t need a brown noise app. This page works in any modern browser on Android, iPhone, tablets and computers, so it acts as a
          free brown noise maker or sound machine. Keep the tab open and your settings stay as you left them.
        </p>
      </Section>
    </div>
  )
}
