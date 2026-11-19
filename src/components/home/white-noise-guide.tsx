import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the White Noise Generator page (English). Order follows search demand:
 * white noise / best online white noise / play white noise / white noise online + misspellings (~610K) →
 * white noise generator / noise generator / white noise maker / white noise machine / player / website (~6.5K) →
 * white noise for sleep, office and privacy / sound masking (~0.5K) → color noise / pink / brown / green noise (~1K, linked).
 * Brand names from the CSV are left out.
 */
export function WhiteNoiseGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: white noise / best online white noise / white noise online / play white noise / online white noise + misspellings (~610K) */}
      <Section wide id="play-heading" title="Online White Noise: Play It Free">
        <p className={p}>
          Press Start Noise and white noise plays right away in your browser: free, with no sign-up, no download and no ads breaking into the
          sound. Press Space to start or stop it. It plays until you stop it or the sleep timer ends, so you can leave it running all night.
        </p>
        <p className={p}>
          White noise is a hiss with equal energy at every frequency, like an untuned radio or a fan on high. That steady sound covers sudden
          noises such as voices, traffic or a slamming door, which is why it helps with sleep and concentration.
        </p>
      </Section>

      {/* Cluster: white noise generator / noise generator / white noise maker / white noise machine online / player / website (~6.5K) */}
      <Section wide id="how-heading" title="How to Use the White Noise Generator">
        <Table
          caption="Generator controls"
          head={['Control', 'What it does']}
          rows={[
            ['Volume', 'From −60 dB to 0 dB; it starts at −18 dB, a comfortable level'],
            ['Sleep timer', 'Off, 15, 30, 60 or 90 minutes, with a gentle fade at the end'],
            ['Filter (More)', 'Low pass softens the hiss, High pass thins it; Cutoff sets where, from 30 Hz to 15 kHz'],
            ['Visual (More)', 'A live waveform, flickering TV static, or a Dark screen for the bedroom'],
          ]}
        />
        <p className={p}>
          Your settings stay as you left them while the tab is open. On a phone or tablet the page works like a white noise machine: put it on the
          nightstand, choose the Dark visual and plug it in.
        </p>
      </Section>

      {/* Cluster: white noise generator for sleeping / office / privacy / sound masking / sleep noise maker (~0.5K) */}
      <Section wide id="uses-heading" title="White Noise for Sleep, Focus and the Office">
        <ul className={ul}>
          <li><strong className="text-foreground">Sleep:</strong> keep the volume low and set the sleep timer, or leave it off for all-night white noise.</li>
          <li><strong className="text-foreground">Focus and study:</strong> a steady hiss masks talking and keyboard noise in a shared room.</li>
          <li><strong className="text-foreground">Office privacy:</strong> play it on a speaker near the door to make conversations harder to overhear.</li>
          <li><strong className="text-foreground">Babies:</strong> keep the speaker away from the crib and the volume low.</li>
        </ul>
        <p className={p}>Keep the volume below normal conversation level, especially with headphones.</p>
      </Section>

      {/* Cluster: color noise / color noise machine / pink noise generator / brown noise generator / green noise generator (~1K) */}
      <Section wide id="colors-heading" title="White Noise vs Pink and Brown Noise">
        <p className={p}>
          If it sounds too bright, try a deeper color with the buttons on the screen:
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">White noise:</strong> bright hiss, best for masking speech.</li>
          <li>
            <Link href="/pink-noise-generator" className={link}>Pink noise generator</Link>: softer and more balanced, like steady rain.
          </li>
          <li>
            <Link href="/brown-noise-generator" className={link}>Brown noise generator</Link>: a deep rumble, like a waterfall or strong wind.
          </li>
        </ul>
        <p className={p}>
          For a sound between white and pink, turn on Low pass in More and lower the Cutoff.
        </p>
      </Section>
    </div>
  )
}
