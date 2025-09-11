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
    <div className="prose max-w-none pt-8 pb-8 dark:prose-invert">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        {mainContent.title}
      </h1>
      <MDXLayoutRenderer code={mainContent.body.code} components={components} />
    </div>
  )
}