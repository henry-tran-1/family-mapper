import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import * as API from '../apis/apiClient'
import { PersonData } from '../../models/person'

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

// Post new person to persons table
export function useAddPerson() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (personDetails: PersonData) => API.addPerson(personDetails),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['persons'] })
    },
  })
}
