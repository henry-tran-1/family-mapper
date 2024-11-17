/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRelationship } from '../hooks/hooks'
import { useState } from 'react'

interface Props {
  sourceId: string
  id: number
  name: string
  image: string
  description: string
}

export default function Polaroid({
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
    setFlip((prev) => !prev)
  }

  const { data, isPending, isError } = useRelationship(
    Number(sourceId),
    id,
    self,
  )
  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry! An error has occured.</p>

  return (
    // overrall container civ, that has click effect and size constraint
    // TODO: flip animation effect on click
    <div className="relative w-[250px] h-[300px]" onClick={handleClick}>
      {/* front side of the polaroid */}
      <section
        className={`absolute h-full w-full rounded-md -m-0.5 p-0 align-content-center justify-items-center font-polaroid text-[24px] font-bold hover:scale-125 duration-300 transition-all ${flip ? 'hidden' : ''} `}
      >
        <img
          src={`/images/${image}`}
          alt={`Front of ${name}'s polaroid`}
          className="object-cover w-full h-full"
        />
        <p className="relative -top-[80px]">{name}</p>
        <p className="relative -top-[95px]">{self ? 'you' : data}</p>
      </section>

      {/* back side of the polaroid */}
      <section
        className={`absolute w-full h-full rounded-md  -m-0.5 p-0 align-content-center justify-items-center font-polaroid text-[24px] text-bold  hover:scale-125 duration-300 transition-all ${flip ? '' : 'hidden'}`}
      >
        <img
          src="/images/polaroid_back.png"
          alt={`Back of ${name}'s polaroid`}
          className="object-cover w-full h-full"
        />
        <p className="text-center w-[200px] relative -top-[230px]">{name}</p>
        <p className="text-center w-[200px] relative -top-[180px]">
          {description}
        </p>
      </section>
    </div>
  )
}
