import usePersons from '../hooks/usePersons'

export default function Persons() {
  const { data, isPending, isError } = usePersons()

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry, an error has occured. Come back later.</p>

  return (
    <>
      <h2>List of Family members</h2>
      <ul>
        {data?.persons.map((person) => (
          <li key={person.id}>
            id: {person.id} name: {person.name}, gender: {person.gender}
          </li>
        ))}
      </ul>
    </>
  )
}
