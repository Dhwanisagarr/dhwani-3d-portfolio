export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

const SECTIONS: WorkSection[] = [
  {
    id: 'product',
    no: '01',
    title: 'Product Management & Strategy',
    tagline: 'Voice-of-customer + teardowns',
    items: [
      {
        name: 'SignalDesk — Voice-of-Customer Insights',
        meta: '2-Week MVP, 10-Min Insight Speed',
        tags: ['Python', 'Streamlit', 'SQLite', 'Pandas', 'Scikit-learn', 'Pytest'],
        link: 'https://signaldesk.streamlit.app/',
        slug: 'signaldesk',
      },
      {
        name: 'Product Thinking & Teardowns',
        meta: '5+ Deep-Dive Teardowns',
        tags: ['Product Strategy', 'UX Teardowns', 'Notion', 'Product Analytics', 'User Research'],
        link: 'https://pickled-chair-247.notion.site/Product-Thinking-Teardowns-3e0900d91be98010a138e2571183e521',
        slug: 'product-teardowns',
      },
    ],
  },
  {
    id: 'design',
    no: '02',
    title: 'Product & Design',
    tagline: 'Memory, habits, and calm interfaces',
    items: [
      {
        name: 'DAHLIA — A Personal Memory Garden',
        meta: '2-Week MVP, Visual Memory Map',
        tags: ['Next.js', 'React', 'JavaScript', 'CSS', 'IndexedDB', 'Vercel'],
        link: 'https://mydahlia.vercel.app/',
        slug: 'dahlia',
      },
      {
        name: 'StreakUp — Challenge-Based Habit Tracker',
        meta: 'Visible & Flexible Progress',
        tags: ['React', 'JavaScript', 'Local Storage', 'CSS'],
        link: 'https://streak-up-streakup.vercel.app/',
        slug: 'streakup',
      },
    ],
  },
  {
    id: 'fintech',
    no: '03',
    title: 'Fintech & Product AI',
    tagline: 'Stack optimizer',
    items: [
      {
        name: 'together. — AI Fintech Stack Optimizer',
        meta: 'Fintech & Product AI',
        tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'AI/LLM'],
        link: 'https://fintech-stack-nine.vercel.app/',
        slug: 'together',
      },
    ],
  },
  {
    id: 'ml',
    no: '04',
    title: 'Machine Learning',
    tagline: 'Speech & pain assessment',
    items: [
      {
        name: 'Speech & Pain Assessment ML for Cerebral Palsy',
        meta: 'Machine Learning & Full-Stack',
        tags: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'TensorFlow', 'InceptionV3', 'KNN', 'MFCC', 'Librosa'],
        slug: 'cp-ml',
      },
    ],
  },
]

const CHROME = {
  title: 'Works',
  closeLabel: 'Back',
  openLabel: 'Explore',
  hint: 'Keep scrolling',
  awardsLabel: 'Awards',
  visitLabel: 'Visit site',
  detailPlaceholder: 'Your work description',
  phImageLabel: 'Image / Video',
  phButtonLabel: 'Link button',
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    ...CHROME,
    countLabel: (n) => `${n} works`,
    sections: SECTIONS,
  },
  en: {
    ...CHROME,
    countLabel: (n) => `${n} works`,
    sections: SECTIONS,
  },
}

export const SECTION_COVERS: Record<string, string> = {}

export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
