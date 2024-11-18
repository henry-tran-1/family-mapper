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
      <h2 className="m-3 mb-14 text-2xl text-[#111010] font-medium text-center font-heading">
        Add more to your family!
      </h2>
      <h3 className="m-2 mb-6 text-xl font-medium text-center font-heading">
        Please enter their details below:
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        {/* Name input */}
        <label htmlFor="name" className="text-lg font-medium font-heading">
          Name:
        </label>
        <input
          onChange={handleChange}
          name="name"
          id="name"
          type="text"
          placeholder="Enter person's name"
          value={formState.name}
          className="w-1/4 m-3 mt-0.5 h-9 text-lg text-center"
        />

        {/* Description input */}
        <label
          htmlFor="description"
          className="text-lg font-medium font-heading"
        >
          Description:
        </label>
        <textarea
          onChange={handleChange}
          name="description"
          id="description"
          rows={2}
          placeholder="Write something interesting about them"
          value={formState.description}
          className="w-1/4 m-2 mt-0.5 text-lg text-center"
        />

        <section className="flex">
          <div className="mt-2 mr-5 text-center">
            {/* Gender input */}
            <label
              htmlFor="gender"
              className="text-lg font-medium font-heading"
            >
              Gender:
            </label>
            <select
              onChange={handleChange}
              name="gender"
              id="gender"
              className="w-full m-3 mt-0.5 text-lg text-center font-medium h-9"
              defaultValue={'nonbinary'}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonbinary">Non-Binary</option>
            </select>
          </div>
          <div className="mt-2 ml-5 text-center">
            {/* Generation input */}
            <label
              htmlFor="generation"
              className="text-lg font-medium font-heading"
            >
              Generation:
            </label>
            <select
              onChange={handleChange}
              name="generation"
              id="generation"
              className="w-full m-3 mt-0.5 text-lg text-center font-medium h-9"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </section>

        <button
          className="h-12 w-1/4 m-3 p-2 rounded font-heading font-medium text-xl text-black bg-[#00ADB5]"
          type="submit"
        >
          Submit Details
        </button>
      </form>
    </div>
  )
}
