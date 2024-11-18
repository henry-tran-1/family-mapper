import { useState } from 'react'
import { PersonData } from '../../models/person'
import { useAddPerson, useAddRelationships } from '../hooks/hooks'
import DetailsForm from './DetailsForm'
import RelationshipsForm from './RelationshipsForm'
import { RelationshipData } from '../../models/relationships'

// A parent component, that will hold the DetailsForm and RelationshipsForm
// The DetailsForm will appear first, and completed first
// When submitted, it will post the person details, and return their new ID
// Also, it will hide the DetailsForm, and make RelationshipsForm visible
// RelationshipsForm will take the new ID as a prop, and allow the relationships to be entered
export default function BuildTree() {
  const addPerson = useAddPerson()
  const addRelationships = useAddRelationships()
  const [personId, setPersonId] = useState('')

  const handleSubmitDetails = async (person: PersonData) => {
    const result = await addPerson.mutateAsync(person)
    setPersonId(() => result)
  }

  const handleSubmitRelationships = async ({
    personId,
    relationships,
  }: {
    personId: string
    relationships: RelationshipData
  }) => {
    const id = Number(personId)
    await addRelationships.mutateAsync({ id, ...relationships })
  }

  return (
    <>
      <DetailsForm onSubmit={handleSubmitDetails} />
      <RelationshipsForm
        personId={personId}
        onSubmit={handleSubmitRelationships}
      />
    </>
  )
}
