import { useQuery } from '@tanstack/react-query'
import * as API from '../apis/apiClient'

// Get the whole list of family members
export function useAllPersons() {
  return useQuery({
    queryKey: ['persons'],
    queryFn: () => API.getAllPersons(),
  })
}

// Get relationship of target member(targetId) to anchor member(sourceId)
export function useRelationship(
  sourceId: number,
  targetId: number,
  self: boolean,
) {
  return useQuery({
    queryKey: ['tree', sourceId, targetId],
    queryFn: () => API.getRelationship(sourceId, targetId, self),
  })
}
