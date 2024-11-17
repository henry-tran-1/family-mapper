import { useState } from 'react'
import Polaroid from './Polaroid'
import { useAllPersons } from '../hooks/hooks'

export default function SeeTree() {
  const [sourceId, setSourceId] = useState('1')

  const { data, isPending, isError } = useAllPersons()

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry, an error has occured. Come back later.</p>

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = event.target.value
    setSourceId(id)
  }

  // get list of all persons
  // map out each person, and render a person component
  // pass the sourceId and person object down to this component as a prop
  // in the person component, use sourceId and targetId to get relationship
  // render person's info as well

  return (
    <div className="m-5">
      {/* Select input to choose anchor member */}
      <form className="flex items-center justify-center">
        <label
          htmlFor="sourceId"
          className="m-5 text-2xl font-medium font-heading"
        >
          Please select yourself
        </label>
        <select
          name="sourceId"
          id="sourceId"
          onChange={handleChange}
          className="text-2xl bg-[#00ADB5] border-solid rounded font-heading border-gray-950 h-11 "
        >
          {data?.persons.map((person) => (
            <option key={person.id} value={String(person.id)}>
              {person.name.charAt(0).toUpperCase() + person.name.slice(1)}
            </option>
          ))}
        </select>
      </form>

      {/* Displays Generation 1 */}
      <div className="flex flex-wrap justify-center">
        {data?.persons
          .filter((person) => person.generation === 1)
          .map((person) => (
            <div key={person.id}>
              <Polaroid sourceId={sourceId} {...person} />
            </div>
          ))}
      </div>
      {/* Displays Generation 2 */}
      <div className="flex flex-wrap justify-center">
        {data?.persons
          .filter((person) => person.generation === 2)
          .map((person) => (
            <div key={person.id}>
              <Polaroid sourceId={sourceId} {...person} />
            </div>
          ))}
      </div>
      {/* Displays Generation 3 */}
      <div className="flex flex-wrap justify-center">
        {data?.persons
          .filter((person) => person.generation === 3)
          .map((person) => (
            <div key={person.id}>
              <Polaroid sourceId={sourceId} {...person} />
            </div>
          ))}
      </div>
      {/* Displays Generation 4 */}
      <div className="flex flex-wrap justify-center">
        {data?.persons
          .filter((person) => person.generation === 4)
          .map((person) => (
            <div key={person.id}>
              <Polaroid sourceId={sourceId} {...person} />
            </div>
          ))}
      </div>
    </div>
  )
}
