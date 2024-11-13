import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useTree(
  sourceId: number,
  targetId: number,
  self: boolean,
) {
  return useQuery({
    queryKey: ['tree', sourceId, targetId],
    queryFn: async () => {
      if (self) {
        return null
      } else {
        const res = await request.get(
          `/api/v1/relationships/${sourceId}/${targetId}`,
        )
        if (res.ok) {
          return res.body as string
        } else {
          console.log('Problem with fetching tree (client to server)')
        }
      }
    },
  })
}
