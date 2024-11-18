import { useState } from 'react'
import { RelationshipData } from '../../models/relationships'
import { useAllPersons } from '../hooks/hooks'

interface Props {
  onSubmit: (_: { personId: string; relationships: RelationshipData }) => void
  personId: string
}

export default function RelationshipsForm({ onSubmit, personId }: Props) {
  const [formState, setFormState] = useState({
    spouse: '',
    parents: '',
    children: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // TODO: onSubmit (need to write hook and api function first)

    onSubmit({ personId, relationships: formState })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const { data, isPending, isError } = useAllPersons()
  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Oh! Error!</p>

  return (
    <>
      <h2 className="m-3 text-2xl text-center font-heading">
        Add more to your family!
      </h2>
      <h3 className="m-2 text-xl text-center font-heading">
        Please enter their relationships, do not forget any, or this App will
        break!
      </h3>
      <div className="flex justify-around">
        <section>
          <form onSubmit={handleSubmit} className="flex flex-col items-center ">
            <label htmlFor="spouse">Spouse</label>
            <input
              onChange={handleChange}
              name="spouse"
              id="spouse"
              type="text"
              placeholder="Spouse's ID"
              value={formState.spouse}
            />

            <label htmlFor="parents">Parents</label>
            <input
              onChange={handleChange}
              name="parents"
              id="parents"
              type="text"
              placeholder="Parent'sID"
              value={formState.parents}
            />

            <label htmlFor="children">Children</label>
            <input
              onChange={handleChange}
              name="children"
              id="children"
              type="text"
              placeholder="Child's ID"
              value={formState.children}
            />
            <button
              className="h-12 w-full m-3 p-2 rounded font-heading text-xl text-white bg-[#393E46]"
              type="submit"
            >
              Submit Relationships
            </button>
          </form>
        </section>
        <section>
          <table className="border border-black">
            <caption className="w-[400px]">
              Table of Family Member and their ID
            </caption>
            <thead className="border border-black">
              <th className="p-3 m-1">Family Member</th>
              <th className="p-3 m-1">Member ID</th>
            </thead>
            <tbody>
              {data?.persons.map((person) => (
                <tr key={person.id}>
                  <td className="text-center border border-black">
                    {person.name.charAt(0).toUpperCase() + person.name.slice(1)}
                  </td>
                  <td className="text-center border border-black">
                    {person.id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  )
}
