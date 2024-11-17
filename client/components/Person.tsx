import useTree from '../hooks/useTree'

interface Props {
  sourceId: string
  id: number
  name: string
  image: string
  description: string
}

export default function Person({
  sourceId,
  id,
  name,
  image,
  description,
}: Props) {
  let self = false
  if (Number(sourceId) === id) {
    self = true
  }

  const { data, isPending, isError } = useTree(Number(sourceId), id, self)

  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry! An error has occured.</p>

  return (
    <div className="h-[300px] min-w-[175px] rounded-[15px] m-[-2px] p-0  align-content-center justify-items-center font-polaroid text-[24px]">
      <img src={`/images/${image}`} alt={`${name}`} className="w-[300px]" />
      <p className="relative -top-[80px]">{name}</p>
      <p className="relative -top-[95px]">{self ? 'you' : data}</p>
    </div>
  )
}
