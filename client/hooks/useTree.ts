import { useQuery } from '@tanstack/react-query'
import request from 'superagent'

export default function useTree(sourceId: number, targetId: number) {
  return useQuery({
    queryKey: ['tree'],
    queryFn: async () => {
      const res = await request.get(
        `/api/v1/relationships/${sourceId}/${targetId}`,
      )
      if (res.ok) {
        return res.body as string
      } else {
        console.log('Problem with fetching tree (client to server)')
      }
    },
  })
}
