import { useState, useContext } from 'react'
import { Sprite, useTick } from '@inlet/react-pixi'
import { WorldContext } from './world'

type inducerProps = {
    index: number,
    position: number[]
}

export default function Inducer({ index }: inducerProps) {
    const { positions, setPositions } = useContext(WorldContext)
    const [velocity] = useState(0.5 * Math.random())
    const [direction, setDirection] = useState(Math.random() * Math.PI * 2)

    useTick(_delta => {
        const delta = _delta ? _delta : 0
        const dX = Math.cos(direction) * velocity * delta
        const dY = Math.sin(direction) * velocity * delta
        positions.inducers[index][0] += dX
        positions.inducers[index][1] += dY
        setPositions({ ...positions })
        setDirection(direction - 0.01)
    })

    const [image, setImage] = useState('/ellipse.png')

    return <Sprite
        interactive
        pointerdown={() => {
            setImage('./rectangle.png')
        }}
        pointerup={() => {
            setImage('/ellipse.png')
        }}
        pointerupoutside={() => {
            setImage('/ellipse.png')
        }}
        image={image}
        anchor={0.5}
        position={positions.inducers[index]} />
}