import { useState } from 'react'
import { PersonData } from '../../models/person'

interface Props {
  onSubmit: (_: PersonData) => void
}

export default function DetailsForm({ onSubmit }: Props) {
  const [formState, setFormState] = useState({
    name: '',
    gender: 'nonbinary',
    generation: 0,
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

    if (name === 'generation') {
      const valueNum = Number(value)
      setFormState((prev) => ({ ...prev, [name]: valueNum }))
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }))
    }
  }

  return (
    <div>
      <p>This will be the person details form</p>

      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          name="name"
          id="name"
          type="text"
          placeholder="Enter Person's Name"
          value={formState.name}
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
        />

        {/* Gender input */}
        <label htmlFor="gender">Gender:</label>
        <select onChange={handleChange} name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="nonbinary" selected>
            Non-Binary
          </option>
        </select>

        {/* Generation input */}
        <label htmlFor="generation">Generation:</label>
        <select onChange={handleChange} name="generation" id="generation">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button type="submit">Submit Details</button>
      </form>
    </div>
  )
}
