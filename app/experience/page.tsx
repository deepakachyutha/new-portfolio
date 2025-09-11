import { allPages } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { components } from '@/components/MDXComponents'

export default function ExperiencePage() {
  // Find the page content for 'experience.mdx'
  const experiencePage = allPages.find((p) => p.slug === 'experience')

  if (!experiencePage) {
    return <div>Page content not found. Check your file path in `data/pages/`.</div>
  }

  const mainContent = experiencePage

  return (
    <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
      <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
        {mainContent.title}
      </h1>
      <MDXLayoutRenderer code={mainContent.body.code} components={components} />
    </div>
  )
}
