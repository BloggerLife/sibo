import { getLocale } from 'next-intl/server'

import { redirect } from '@/i18n/navigation'

async function Page() {
  const locale = await getLocale()

  redirect({ href: '/about', locale })
}

export default Page
