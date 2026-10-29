import { useQuery } from '@tanstack/react-query'

import { orpc } from '@/orpc/client'

export function useWakatimeStats() {
  return useQuery(orpc.wakatime.stats.queryOptions({ refetchOnWindowFocus: false }))
}
