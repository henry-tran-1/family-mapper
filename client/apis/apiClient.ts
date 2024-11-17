import request from 'superagent'
import { Person } from '../../models/tree'

// Get the whole list of family members
export async function getAllPersons() {
  const res = await request.get('/api/v1/persons')
  if (res.ok) {
    return res.body as { persons: Person[] }
  } else {
    console.log('Problem with fetching all persons (client to server)')
  }
}

// Get relationship of target member(targetId) to anchor member(sourceId)
export async function getRelationship(
  sourceId: number,
  targetId: number,
  self: boolean,
) {
  if (self) {
    return null
  } else {
    const res = await request.get(
      `/api/v1/relationships/${sourceId}/${targetId}`,
    )
    if (res.ok) {
      return res.body as string
    } else {
      console.log('Problem with fetching relationship (client to server)')
    }
  }
}
