import { useState, useContext } from 'react'
import { Sprite, useTick } from '@inlet/react-pixi'
import { WorldContext } from './world'

type cellProps = {
    index: number,
    position: number[]
}

export default function Cell({ index }: cellProps) {
    const { positions, setPositions } = useContext(WorldContext)
    const [velocity] = useState(0.1 * Math.random())
    const [direction, setDirection] = useState(Math.random() * Math.PI * 2)

    useTick(_delta => {
        const delta = _delta ? _delta : 0
        const dX = Math.cos(direction) * velocity * delta
        const dY = Math.sin(direction) * velocity * delta
        positions.cells[index][0] += dX
        positions.cells[index][1] += dY
        setPositions({ ...positions })
        setDirection(direction + 0.01)
    })

    const [image, setImage] = useState('/rectangle.png')

    return <Sprite
        interactive
        pointerdown={() => {
            positions.inducers.push([positions.cells[index][0], positions.cells[index][1]])
            setPositions({ ...positions })
        }}
        pointerup={() => {
            setImage('/rectangle.png')
        }}
        pointerupoutside={() => {
            setImage('/rectangle.png')
        }}
        image={image}
        anchor={0.5}
        position={positions.cells[index]} />
}