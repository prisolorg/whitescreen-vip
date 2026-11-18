import type { ComponentType } from 'react'
import { WhiteBackgroundGuide } from '@/components/home/white-background-guide'
import { BlackBackgroundGuide } from '@/components/home/black-background-guide'
import { GraphPaperGuide } from '@/components/home/graph-paper-guide'
import { OrangeBackgroundGuide } from '@/components/home/orange-background-guide'
import { RedBackgroundGuide } from '@/components/home/red-background-guide'
import { BlueBackgroundGuide } from '@/components/home/blue-background-guide'
import { YellowBackgroundGuide } from '@/components/home/yellow-background-guide'
import { PinkBackgroundGuide } from '@/components/home/pink-background-guide'
import { PurpleBackgroundGuide } from '@/components/home/purple-background-guide'
import { GoldBackgroundGuide } from '@/components/home/gold-background-guide'
import { PastelBackgroundGuide } from '@/components/home/pastel-background-guide'
import { VirtualOfficeBackgroundGuide } from '@/components/home/virtual-office-background-guide'
import { NeonBackgroundGuide } from '@/components/home/neon-background-guide'
import { AestheticBackgroundGuide } from '@/components/home/aesthetic-background-guide'
import { BeigeBackgroundGuide } from '@/components/home/beige-background-guide'
import { GreenScreenBackgroundGuide } from '@/components/home/green-screen-background-guide'
import { DarkBackgroundGuide } from '@/components/home/dark-background-guide'

/**
 * English keyword-led guides for background pages. When a background has one, it replaces the templated
 * About / Full screen / Uses / Choosing sections, and the off-intent blocks (reference box, related guides, related
 * tools, same-category grid, white screen banner) are dropped. The FAQ stays.
 */
export const BACKGROUND_KEYWORD_GUIDES: Record<string, ComponentType> = {
  'white-background': WhiteBackgroundGuide,
  'black-background': BlackBackgroundGuide,
  'graph-paper': GraphPaperGuide,
  'orange-background': OrangeBackgroundGuide,
  'red-background': RedBackgroundGuide,
  'blue-background': BlueBackgroundGuide,
  'yellow-background': YellowBackgroundGuide,
  'pink-background': PinkBackgroundGuide,
  'purple-background': PurpleBackgroundGuide,
  'gold-background': GoldBackgroundGuide,
  'pastel-background': PastelBackgroundGuide,
  'virtual-office': VirtualOfficeBackgroundGuide,
  'neon-background': NeonBackgroundGuide,
  'aesthetic-background': AestheticBackgroundGuide,
  'beige-background': BeigeBackgroundGuide,
  'green-screen-background': GreenScreenBackgroundGuide,
  'dark-background': DarkBackgroundGuide,
}
