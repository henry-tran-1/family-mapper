import { PersonData } from '../../models/person'
import { useAddPerson } from '../hooks/hooks'

export default function BuildTree() {
  const addPerson = useAddPerson()

  const data: PersonData = {
    name: 'frontTest',
    gender: 'nonbinary',
    generation: 1,
    description: 'this is a test!',
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const result = await addPerson.mutateAsync(data)
    console.log('component:', result)
  }

  return (
    <>
      <p>there will be forms here to enter new family members</p>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}
