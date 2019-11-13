import { Sprite } from '@inlet/react-pixi'

type cellProps = {
    image: string,
    position: [number, number]
}

export default function Cell({ position, image }: cellProps) {

    return <Sprite
        interactive
        pointerdown={() => {
            console.log("pointerdown!")
        }}
        pointerup={() => {
            console.log("pointerup!")
        }}
        pointerupoutside={() => {
            console.log("pointerupoutside!")
        }}
        image={image}
        anchor={0.5}
        position={position} />
}
