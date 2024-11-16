import useTree from '../hooks/useTree'

interface Props {
  sourceId: string
  id: number
  name: string
  gender: string
}

export default function Person({ sourceId, id, name }: Props) {
  let self = false
  if (Number(sourceId) === id) {
    self = true
  }

  const { data, isPending, isError } = useTree(Number(sourceId), id, self)

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry! An error has occured.</p>

  return (
    <div className="bg-[#20b2aa] h-[200px] min-w-[175px] rounded-[15px] m-[8px] p-[10px] align-content-center justify-items-center">
      <p>{id}</p>
      <p>{name}</p>
      <p>{self ? 'you' : data}</p>
    </div>
  )
}
