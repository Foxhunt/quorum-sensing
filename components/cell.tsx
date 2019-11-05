import { useState, useContext } from 'react'
import { Sprite } from '@inlet/react-pixi'
import { WorldContext } from './world'

type cellProps = {
    index: number,
    position: number[]
}

export default function Cell({ index }: cellProps) {
    const { cells, inducers, tick, setTick } = useContext(WorldContext)

    const [image, setImage] = useState('/rectangle.png')

    return <Sprite
        interactive
        pointerdown={() => {
            inducers.push([cells[index][0], cells[index][1], 0.01 * Math.random(), Math.random() * Math.PI * 2])
            setTick(!tick)
        }}
        pointerup={() => {
            setImage('/rectangle.png')
        }}
        pointerupoutside={() => {
            setImage('/rectangle.png')
        }}
        image={image}
        anchor={0.5}
        position={[cells[index][0], cells[index][1]]} />
}