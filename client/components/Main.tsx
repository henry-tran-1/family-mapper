import useTree from '../hooks/useTree'
import Persons from './Persons'
import Tree from './Tree'

export default function Main() {
  return (
    <>
      <header>
        <h2>Placeholder heading</h2>
        <p>Placeholder text</p>
      </header>
      <main>
        <Tree />

        <Persons />
      </main>
    </>
  )
}
