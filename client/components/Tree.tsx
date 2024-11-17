import { useState } from 'react'
import usePersons from '../hooks/usePersons'
import Polaroid from './Polaroid'

export default function Tree() {
  const [sourceId, setSourceId] = useState('1')

  const { data, isPending, isError } = usePersons()

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
      <form className="flex justify-center items-center">
        <label
          htmlFor="sourceId"
          className="font-heading m-5 text-2xl font-medium"
        >
          Please select yourself
        </label>
        <select
          name="sourceId"
          id="sourceId"
          onChange={handleChange}
          className="font-heading text-2xl bg-purple-400 border-gray-950 border-solid rounded h-11 "
        >
          {data?.persons.map((person) => (
            <option key={person.id} value={String(person.id)}>
              {person.name.charAt(0).toUpperCase() + person.name.slice(1)}
            </option>
          ))}
        </select>
      </form>

      <div className="flex flex-wrap justify-center">
        {data?.persons
          .filter((person) => person.generation === 1)
          .map((person) => (
            <div key={person.id}>
              <Polaroid sourceId={sourceId} {...person} />
            </div>
          ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {data?.persons
          .filter((person) => person.generation === 2)
          .map((person) => (
            <div key={person.id}>
              <Polaroid sourceId={sourceId} {...person} />
            </div>
          ))}
      </div>
      <div className="flex flex-wrap justify-center">
        {data?.persons
          .filter((person) => person.generation === 3)
          .map((person) => (
            <div key={person.id}>
              <Polaroid sourceId={sourceId} {...person} />
            </div>
          ))}
      </div>
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
