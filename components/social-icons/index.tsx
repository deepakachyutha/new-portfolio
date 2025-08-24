import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Twitter,
  X,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  Bluesky,
} from './icons'
import AllPoetsSociety from './allpoets'
import HelloPoetry from './hellopoet'

// The complete dictionary of all your icons
const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
  medium: Medium,
  bluesky: Bluesky,
  allpoetsociety: AllPoetsSociety,
  hellopoetry: HelloPoetry,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 6 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  ) {
    return null
  }

  const SocialSvg = components[kind]

  if (!SocialSvg) {
    return null
  }

  return (
    <a
      className="hover:text-primary-500 dark:hover:text-primary-400 flex items-center space-x-2 text-sm text-gray-500 transition dark:text-gray-400"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <SocialSvg className={`h-${size} w-${size} fill-current`} />
      <span className="hidden capitalize sm:block">{kind.replace('-', ' ')}</span>
    </a>
  )
}

export default SocialIcon
