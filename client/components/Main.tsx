import useTree from '../hooks/useTree'
import Persons from './Persons'
import Tree from './Tree'

export default function Main() {
  const sourceId = 8
  const targetId = 6

  const { data, isPending, isError } = useTree(sourceId, targetId)

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry! An error has occured.</p>

  return (
    <>
      <header>
        <h2>Placeholder heading</h2>
        <p>Placeholder text</p>
      </header>
      <main>
        <Tree />
        <p>The relationship between 8 (source) to 6 (target) is {data}</p>
        <Persons />
      </main>
    </>
  )
}
