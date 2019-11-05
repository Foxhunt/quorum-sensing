import { useState, useContext } from 'react'
import { Sprite } from '@inlet/react-pixi'
import { WorldContext } from './world'

type inducerProps = {
    index: number,
    position: number[]
}

export default function Inducer({ index }: inducerProps) {
    const { inducers } = useContext(WorldContext)

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
        position={[inducers[index][0], inducers[index][1]]} />
}