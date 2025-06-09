import { getCachedGlobal } from '@/utilities/getGlobals'
import React from 'react'
import type { NotificationBanner } from '@/payload-types'
import { NotificationBannerClient } from './Component.client'

export async function NotificationBanner() {
  const notificationBannerData: NotificationBanner = await getCachedGlobal(
    'notificationBanner',
    1,
  )()

  return <NotificationBannerClient data={notificationBannerData} />
}
