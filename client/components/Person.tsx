/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import useTree from '../hooks/useTree'
import { useState } from 'react'

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
  name = name.charAt(0).toUpperCase() + name.slice(1)
  const [flip, setFlip] = useState(false)

  let self = false
  if (Number(sourceId) === id) {
    self = true
  }

  const handleClick = () => {
    setFlip(!flip)
  }

  const { data, isPending, isError } = useTree(Number(sourceId), id, self)
  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry! An error has occured.</p>

  return (
    <div
      className="h-[300px] w-[200px] rounded-[15px] m-[-2px] p-0 align-content-center justify-items-center font-polaroid text-[24px] font-bold hover:scale-125 duration-300 transition-all "
      onClick={() => handleClick}
    >
      <img
        src={`/images/${image}`}
        alt={`${name}`}
        className="w-[300px] h-[300px] object-cover"
      />
      <p className="relative -top-[80px]">{name}</p>
      <p className="relative -top-[95px]">{self ? 'you' : data}</p>
    </div>
  )
}
