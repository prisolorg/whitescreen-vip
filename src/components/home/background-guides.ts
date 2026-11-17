import type { ComponentType } from 'react'
import { WhiteBackgroundGuide } from '@/components/home/white-background-guide'
import { BlackBackgroundGuide } from '@/components/home/black-background-guide'
import { GraphPaperGuide } from '@/components/home/graph-paper-guide'
import { OrangeBackgroundGuide } from '@/components/home/orange-background-guide'
import { RedBackgroundGuide } from '@/components/home/red-background-guide'
import { BlueBackgroundGuide } from '@/components/home/blue-background-guide'
import { YellowBackgroundGuide } from '@/components/home/yellow-background-guide'
import { PinkBackgroundGuide } from '@/components/home/pink-background-guide'

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
}
