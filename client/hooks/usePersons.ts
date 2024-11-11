import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Person } from '../../models/tree'

export default function usePersons() {
  return useQuery({
    queryKey: ['persons'],
    queryFn: async () => {
      const res = await request.get('/api/v1/tree')
      if (res.ok) {
        return res.body as { persons: Person[] }
      } else {
        console.log('Problem with client request')
      }
    },
  })
}
