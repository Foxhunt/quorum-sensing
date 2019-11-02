import { useState } from 'react'
import { Sprite, useApp, useTick } from '@inlet/react-pixi'

export default () => {
    const app = useApp()
    const [position, setPosition] = useState<[number, number]>([app.view.width * Math.random(), app.view.height * Math.random()])
    const [velocity] = useState(0.1)
    const [direction, setDirection] = useState(Math.random() * Math.PI * 2)

    useTick(_delta => {
        const delta = _delta ? _delta : 0
        const dX = Math.cos(direction) * velocity * delta
        const dY = Math.sin(direction) * velocity * delta
        setPosition([position[0] + dX, position[1] + dY])
        setDirection(direction + 0.01 % Math.PI * 2)
    })

    const [image, setImage] = useState('/rectangle.png')

    return <Sprite
        interactive
        pointerdown={() => {
            setImage('./ellipse.png')
        }}
        pointerup={() => {
            setImage('/rectangle.png')
        }}
        pointerupoutside={() => {
            setImage('/rectangle.png')
        }}
        image={image}
        anchor={0.5}
        position={position} />
}