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

  const { data, isPending, isError } = useTree(Number(sourceId), id, self)
  if (isPending) return <p>Loading...</p>
  if (isError) return <p>Sorry! An error has occured.</p>

  return (
    // overrall container civ, that has click effect and size constraint
    <div
      className="relative w-[250px] h-[300px] perspective-[1000px]"
      onClick={handleClick}
    >
      {/* container that will manage flip effect */}
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${flip ? 'rotate-y-180' : ''}`}
      >
        {/* front side of the polaroid */}
        <section
          className={`absolute h-full w-full rounded-[15px] backface-hidden m-[-2px] p-0 align-content-center justify-items-center font-polaroid text-[24px] font-bold hover:scale-125 duration-300 transition-all ${flip ? 'hidden' : ''} `}
        >
          <img
            src={`/images/${image}`}
            alt={`Front of ${name}'s polaroid`}
            className="w-full h-full object-cover"
          />
          <p className="relative -top-[80px]">{name}</p>
          <p className="relative -top-[95px]">{self ? 'you' : data}</p>
        </section>

        {/* back side of the polaroid */}
        <section
          className={`absolute w-full h-full rounded-[15px] backface-hidden m-[-2px] p-0 align-content-center justify-items-center font-polaroid text-[24px] text-bold p-0 hover:scale-125 duration-300 transition-all ${flip ? 'block' : 'hidden'}`}
        >
          <img
            src="/images/polaroid_back.png"
            alt={`Back of ${name}'s polaroid`}
            className="w-full h-full object-cover"
          />
          <p className="text-center w-[200px] relative -top-[230px]">{name}</p>
          <p className="text-center w-[200px] relative -top-[180px]">
            {description}
          </p>
        </section>
      </div>
    </div>
  )
}
