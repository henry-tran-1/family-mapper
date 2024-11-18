import { useState } from 'react'
import { PersonData } from '../../models/person'

interface Props {
  onSubmit: (_: PersonData) => void
}

export default function DetailsForm({ onSubmit }: Props) {
  const [formState, setFormState] = useState({
    name: '',
    gender: 'nonbinary',
    generation: 1,
    description: '',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
    onSubmit(formState)
  }

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = event.target

    // Convert generation from string to number
    if (name === 'generation') {
      const valueNum = Number(value)
      setFormState((prev) => ({ ...prev, [name]: valueNum }))
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div>
      <h2 className="m-3 text-2xl text-center font-heading">
        Add more to your family!
      </h2>
      <h3 className="m-2 text-xl text-center font-heading">
        Please enter their details below
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* Name input */}
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          name="name"
          id="name"
          type="text"
          placeholder="Enter Person's Name"
          value={formState.name}
          className="w-1/3 m-3"
        />

        {/* Description input */}
        <label htmlFor="description">Description:</label>
        <textarea
          onChange={handleChange}
          name="description"
          id="description"
          rows={2}
          placeholder="Something about them"
          value={formState.description}
          className="w-1/3 m-3"
        />

        {/* Gender input */}
        <label htmlFor="gender">Gender:</label>
        <select
          onChange={handleChange}
          name="gender"
          id="gender"
          className="w-1/3 m-3"
          defaultValue={'nonbinary'}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary">Non-Binary</option>
        </select>

        {/* Generation input */}
        <label htmlFor="generation">Generation:</label>
        <select
          onChange={handleChange}
          name="generation"
          id="generation"
          className="w-1/3 m-3"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button
          className="h-12 w-1/3 m-3 p-2 rounded font-heading text-xl text-black bg-[#00ADB5]"
          type="submit"
        >
          Submit Details
        </button>
      </form>
    </div>
  )
}
