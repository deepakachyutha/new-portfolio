/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const isPdfLink = href && href.endsWith('.pdf')

  // Rule: Internal links that are not PDFs open in the same tab.
  if (isInternalLink && !isPdfLink) {
    return <Link href={href} {...rest} />
  }

  // Rule: Anchor links on the same page open in the same tab.
  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  // Rule: All other links (External websites, PDFs) open in a new tab.
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

export default CustomLink
