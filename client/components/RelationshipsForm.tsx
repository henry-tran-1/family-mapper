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
      <h2 className="m-3 mb-14 text-2xl text-[#111010] font-medium text-center font-heading">
        Add more to your family!
      </h2>
      <h3 className="m-2 mb-0.5 text-xl font-medium text-center font-heading">
        Please enter all their relationships, do not forget any, or this App
        will break!
      </h3>
      <h3 className="mt-0.5 mb-6 text-md font-medium text-center font-heading">
        (do not forget any, or this App might break)
      </h3>
      <div className="flex justify-center">
        <section className="mr-16">
          <form onSubmit={handleSubmit} className="flex flex-col items-center ">
            <label
              htmlFor="spouse"
              className="text-lg font-medium font-heading"
            >
              Spouse
            </label>
            <input
              onChange={handleChange}
              name="spouse"
              id="spouse"
              type="text"
              placeholder="Spouse's ID"
              value={formState.spouse}
              className="w-full m-3 mt-0.5 h-9 text-lg text-center"
            />

            <label
              htmlFor="parents"
              className="text-lg font-medium font-heading"
            >
              Parents
            </label>
            <input
              onChange={handleChange}
              name="parents"
              id="parents"
              type="text"
              placeholder="Parent's ID"
              value={formState.parents}
              className="w-full m-3 mt-0.5 h-9 text-lg text-center"
            />

            <label
              htmlFor="children"
              className="text-lg font-medium font-heading"
            >
              Children
            </label>
            <input
              onChange={handleChange}
              name="children"
              id="children"
              type="text"
              placeholder="Child's ID"
              value={formState.children}
              className="w-full m-3 mt-0.5 h-9 text-lg text-center"
            />
            <button
              className="h-12 w-full m-3 p-2 rounded font-heading font-medium text-xl text-black bg-[#00ADB5]"
              type="submit"
            >
              Submit Relationships
            </button>
          </form>
        </section>
        <section className="ml-16">
          <table className="text-lg font-medium font-heading">
            <thead className="border border-black">
              <tr>
                <th className="p-3 m-1">Family Member</th>
                <th className="p-3 m-1">Member ID</th>
              </tr>
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
            <caption className="w-[400px]">
              Table of Family Member and their IDs
            </caption>
          </table>
        </section>
      </div>
    </>
  )
}
