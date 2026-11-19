import Link from 'next/link'
import { Section, Table, link, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Pink Noise Generator page (English). Order follows search demand:
 * pink noise / pinknoise / free pink noise / pink noise sound + misspellings (~51K) →
 * what is pink noise / examples / what does it sound like / frequency / spectrum (~1.5K) →
 * pink noise sleep / pink noise 10 hours / what is pink sleep (~1.3K) →
 * pink noise machine / generator / maker / for office (~0.8K).
 */
export function PinkNoiseGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: pink noise / pinknoise / pink.noise / free pink noise / pink noise sound / audio + misspellings (~51K) */}
      <Section wide id="play-heading" title="Play Pink Noise Online, Free">
        <p className={p}>
          Press Start Noise and it plays right away in your browser: free, with no sign-up and no ads in the sound. Press Space to start
          or stop. It loops seamlessly with no clicks, and keeps going until you stop it or the sleep timer ends.
        </p>
      </Section>

      {/* Cluster: what is pink noise / examples of pink noise / what does pink noise sound like / frequency / spectrum (~1.5K) */}
      <Section wide id="what-heading" title="What Is Pink Noise?">
        <p className={p}>
          Pink noise is random sound with equal energy in every octave, so it gets a little quieter as the pitch rises (about 3 dB less per
          octave). The result is softer and more natural than white noise: you hear more of the low tones and less hiss.
        </p>
        <Table
          caption="Compared with white and brown noise"
          head={['Noise', 'Sounds like', 'Energy']}
          rows={[
            ['White noise', 'Untuned radio, fan on high', 'Equal at every frequency'],
            ['Pink noise', 'Steady rain, wind in trees, waves', 'Equal in every octave'],
            ['Brown noise', 'Waterfall, distant thunder', 'Mostly low frequencies'],
          ]}
        />
        <p className={p}>
          Examples of pink noise in nature: steady rain, rustling leaves and ocean waves. Compare them yourself with the{' '}
          <Link href="/white-noise-generator" className={link}>white noise generator</Link> and the{' '}
          <Link href="/brown-noise-generator" className={link}>brown noise generator</Link>.
        </p>
      </Section>

      {/* Cluster: pink noise sleep / pink noise 10 hours / what is pink sleep / pink noise tinnitus (~1.3K) */}
      <Section wide id="sleep-heading" title="Pink Noise for Sleep">
        <p className={p}>
          Many people fall asleep to it because it masks noises without the sharp hiss of white noise. Some sleep research has also linked
          it to deeper sleep, which is where &ldquo;pink sleep&rdquo; comes from.
        </p>
        <ul className={ul}>
          <li>Set the volume low and pick a sleep timer of 15, 30, 60 or 90 minutes; the sound fades out gently at the end.</li>
          <li>Need pink noise for 10 hours or all night? Leave the timer Off and plug in your device.</li>
          <li>Choose the Dark visual in More so the screen stays black.</li>
        </ul>
      </Section>

      {/* Cluster: pink noise machine / pink noise generator / pink noise maker / free pink noise app / machine for office (~0.8K) */}
      <Section wide id="how-heading" title="Pink Noise Machine Settings">
        <p className={p}>
          A phone or speaker running this page works as a pink noise machine at home or in the office. Volume and Sleep timer are under the screen;
          the rest is in More:
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Volume:</strong> −60 dB to 0 dB, starting at −18 dB.</li>
          <li><strong className="text-foreground">Filter:</strong> Low pass makes it deeper, High pass brighter; Cutoff runs from 30 Hz to 15 kHz.</li>
          <li><strong className="text-foreground">Visual:</strong> Waveform, TV static or Dark.</li>
        </ul>
      </Section>
    </div>
  )
}
