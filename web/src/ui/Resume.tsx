import { motion } from 'framer-motion'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhwanisagar/',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Dhwanisagarr',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://instagram.com/dhwanisagar',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:dhwanisagar17@gmail.com',
  },
]

interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}

const ENTRIES: ResumeEntry[] = [
  {
    period: 'Graduated 2025',
    place: 'Mangalore Institute of Technology and Engineering (MITE)',
    role: 'B.E. in Computer Science and Engineering (Honours)',
    points: [
      'CGPA 8.12',
      'Focus: Software engineering principles, algorithms, data analytics, web architecture, and user-centered design.',
    ],
  },
  {
    period: 'Feb 2025 – May 2025',
    place: 'Zidio Developments',
    role: 'Developer Intern',
    points: [
      'Built core application components and participated in agile development sprints.',
      'Developed modular web interfaces using JavaScript, HTML, and CSS.',
      'Collaborated with cross-functional teams to resolve UI bugs and streamline frontend performance.',
    ],
  },
  {
    period: 'Jul 2025 – Dec 2025',
    place: 'Fyers Securities Pvt. Ltd.',
    role: 'Apprentice',
    points: [
      'Engaged in fintech product workflows, data analytics, and user experience optimizations.',
      'Gained hands-on exposure to financial trading systems, analytics tools, and API integrations.',
      'Contributed to product research, UI consistency auditing, and user behavior analysis.',
    ],
  },
  {
    period: 'Present',
    place: '4RinLabs Pvt. Ltd.',
    role: 'Freelancer',
    points: [
      'Designing and developing tailored digital products, web applications, and interactive user interfaces.',
      'Crafting responsive web solutions at the intersection of product thinking and modern frontend tech.',
      'Collaborating directly with clients to translate business goals into intuitive digital experiences.',
    ],
  },
  {
    period: 'Present',
    place: '4RinLabs',
    role: 'Creative Agency',
    groups: [
      {
        heading: '4RinLabs',
        sub: 'Four friends. One creative playground.',
        link: 'https://www.4rinlabs.com/',
        items: [
          '4RinLabs was started by Dhwani Sagar and three friends who enjoy creating things on the web. What began as late-night discussions and side projects evolved into a formalized creative agency.',
          'Websites — Custom, high-crafted web applications built with speed and performance.',
          'Portfolio Websites — Personalized showcase sites that capture individual identity and craft.',
          'Landing Pages — Conversion-focused landing pages designed to tell clear product stories.',
          'E-commerce — Sleek, responsive online store experiences.',
          'Digital Experiences — Interactive web tools, widgets, and creative visual experiences.',
          'Integrations — Connecting APIs, data workflows, and backend services into clean interfaces.',
        ],
        links: SOCIAL_LINKS,
      },
      {
        heading: 'Résumé',
        sub: 'PDF',
        link: 'https://dhwanisagar.in/resume.pdf',
      },
    ],
  },
]

const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: { title: 'Résumé', entries: ENTRIES },
  zh: { title: 'Résumé', entries: ENTRIES },
}

const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading = group.link ? (
    <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
      {group.heading}
    </a>
  ) : (
    <span>{group.heading}</span>
  )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
