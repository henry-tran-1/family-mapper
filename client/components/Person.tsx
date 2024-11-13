import useTree from '../hooks/useTree'

interface Props {
  sourceId: string
  id: number
  name: string
  gender: string
}

export default function Person({ sourceId, id, name, gender }: Props) {
  let self = false
  if (Number(sourceId) === id) {
    self = true
  }

  const { data, isPending, isError } = useTree(Number(sourceId), id, self)

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry! An error has occured.</p>

  return (
    <div className="person">
      <p>{id}</p>
      <p>{name}</p>
      <p>{self ? 'you' : data}</p>
    </div>
  )
}
