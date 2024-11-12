import { Person } from '../../models/tree.ts'
import connection from './connection.ts'

export async function getAllPersons(db = connection): Promise<Person[]> {
  return db('persons').select()
}
