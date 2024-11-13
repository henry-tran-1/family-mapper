import { useState } from 'react'

export default function Tree() {
  const [sourceId, setSourceId] = useState('6')

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
    <>
      <h2>Tree</h2>
      <p>the tree will be placed here</p>
      <form>
        <label htmlFor="sourceId">Please select yourself</label>
        <select name="sourceId" id="sourceId" onChange={handleChange}>
          <option value="6">Henry</option>
          <option value="8">Eliza</option>
          <option value="1">Amma</option>
        </select>
      </form>

      <div className="treeContainer">
        <div className="person">
          <p>John</p>
          <p>Father</p>
        </div>
        <div className="person">
          <p>Mary</p>
          <p>Mother</p>
        </div>
        <div className="person">
          <p>Alice</p>
          <p>You</p>
        </div>
      </div>
    </>
  )
}
