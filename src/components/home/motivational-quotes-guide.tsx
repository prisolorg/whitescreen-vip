import { Section, Table, p, ul } from '@/components/home/guide-parts'

/**
 * Keyword-led sections for the Motivational Quote Screensaver page, H1 "Motivational Quotes Screensaver" (English).
 * Order follows search demand: motivational / motivational screensaver(s) / screen saver / quotes screensaver (~2.7K) →
 * motivation post / posters / quotes for study table / study room / theme for students (~1.9K) →
 * motivational wallpaper / phone background / lock screen / inspirational quote backgrounds / themes / HD (~1.6K).
 * Hindi keywords, profile pictures (pfp / DP) and "motivational boy" are off-intent and left out.
 */
export function MotivationalQuotesGuide() {
  return (
    <div className="space-y-12 py-10 sm:space-y-16 sm:py-14">
      {/* Cluster: motivational / motivational screensavers / motivational screen saver / motivation screensaver / quotes screensaver (~2.7K) */}
      <Section wide id="how-heading" title="How the Motivational Quotes Screensaver Works">
        <p className={p}>
          Press Fullscreen and a new quote fills the screen every 12 seconds, picked at random from 31 classic lines on success, courage,
          patience and hard work. Each quote shows its author, from Seneca and Marcus Aurelius to Mark Twain and Theodore Roosevelt.
        </p>
        <Table
          caption="Motivational screensaver options"
          head={['Option', 'What it does']}
          rows={[
            ['Background', 'Night, Sunrise, Forest, Paper or Black'],
            ['Pause / Resume', 'Keep one quote on screen'],
            ['Seconds per quote (More)', '5 to 60 seconds'],
            ['Shuffle (More)', 'On for random order, off to go in sequence'],
            ['Show Clock (More)', 'Adds the time under the quote'],
          ]}
        />
        <p className={p}>Use the arrow keys or the arrows on the screen to go to the next or previous quote, and Space to pause.</p>
      </Section>

      {/* Cluster: motivation post / motivation posters / motivational quotes for study table / posters for study room / theme for students (~1.9K) */}
      <Section wide id="study-heading" title="Motivational Quotes for Your Study Table or Desk">
        <p className={p}>
          Instead of a printed motivation poster, prop up an old tablet or phone on your study table and run the screensaver. It works like a
          motivational poster that changes by itself.
        </p>
        <ul className={ul}>
          <li>Turn on Show Clock so it doubles as a desk clock.</li>
          <li>Set Seconds per quote to 60 for a calm pace while you study.</li>
          <li>Choose Paper for a bright room, or Night or Black for evening study.</li>
          <li>Plug the device in; fullscreen keeps the screen awake in most browsers.</li>
        </ul>
      </Section>

      {/* Cluster: motivational wallpaper / wall paper / phone background / lock screen / inspirational quote backgrounds / motivational themes / HD (~1.6K) */}
      <Section wide id="wallpaper-heading" title="Motivational Quotes as a Wallpaper or Background">
        <p className={p}>
          Each background is a motivational theme: Night (deep navy), Sunrise (orange to pink and purple), Forest (dark green), Paper (warm
          cream) and Black. The quote text scales to stay sharp on an HD or 4K screen.
        </p>
        <ul className={ul}>
          <li><strong className="text-foreground">Live background:</strong> leave it running in fullscreen on a second monitor or a TV.</li>
          <li><strong className="text-foreground">Phone wallpaper or lock screen:</strong> pause on a quote you like in fullscreen and take a screenshot.</li>
        </ul>
      </Section>
    </div>
  )
}
