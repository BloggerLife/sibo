import type { Locale } from 'next-intl'

import fs from 'node:fs/promises'
import path from 'node:path'

import { allPosts, allProjects, allSites } from 'content-collections'
import { ImageResponse } from 'next/og'
import { NextResponse } from 'next/server'
import { cache } from 'react'

import { OGImage } from '@/components/og-image'
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from '@/constants/site'
import { getPage } from '@/lib/content'
import { getOGImageFonts } from '@/lib/fonts'

const getLogoDataUri = cache(async () => {
  const image = await fs.readFile(path.join(process.cwd(), 'public', 'logo.png'))
  return `data:image/png;base64,${image.toString('base64')}`
})

export function generateStaticParams() {
  return [...allSites, ...allPosts, ...allProjects].map((page) => ({
    locale: page.locale,
    slug: page.opengraphImage.segments,
  }))
}

export async function GET(_request: Request, props: RouteContext<'/[locale]/og/[...slug]'>) {
  const { params } = props
  const { locale, slug } = await params

  const page = getPage(slug.slice(1, -1).join('/'), locale as Locale)

  if (!page) {
    return NextResponse.json({ error: 'Page not found' }, { status: 404 })
  }

  return new ImageResponse(
    <OGImage title={page.title} description={page.description} logoSrc={await getLogoDataUri()} />,
    {
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      fonts: await getOGImageFonts(),
    },
  )
}
