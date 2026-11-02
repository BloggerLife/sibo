const BLOG_IMAGE_FOLDER_BY_POST_SLUG: Record<string, string> = {
  'e2e-testing-with-better-auth': 'cruise-ship-industry-careers',
  'how-to-build-a-blog-with-nextjs-and-mdx': 'cruise-ship-job-application-preparation',
  php: 'cruise-ship-cv-writing',
  'top-8-attractive-web-design-websites': 'cruise-ship-career-journey',
}

export function getBlogImageFolder(slug: string) {
  return BLOG_IMAGE_FOLDER_BY_POST_SLUG[slug] ?? slug
}
