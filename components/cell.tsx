import { useState, useContext } from 'react'
import { Sprite } from '@inlet/react-pixi'
import { WorldContext } from './world'

type cellProps = {
    index: number,
    position: number[]
}

export default function Cell({ index }: cellProps) {
    const { cells, inducers } = useContext(WorldContext)

    const [image] = useState('/rectangle.png')

    const [spawnIntervall, setSpawnIntervall] = useState<number>()

    return <Sprite
        interactive
        pointerdown={() => {
            setSpawnIntervall(setInterval(() => {
                inducers.push([cells[index][0], cells[index][1], 0.1 * Math.random(), Math.random() * Math.PI * 2])
            }))
        }}
        pointerup={() => {
            clearInterval(spawnIntervall)
        }}
        pointerupoutside={() => {
            clearInterval(spawnIntervall)
        }}
        image={image}
        anchor={0.5}
        position={[cells[index][0], cells[index][1]]} />
}