import styled from 'styled-components'
import { Stage } from '@inlet/react-pixi'
import { useWindowSize } from 'web-api-hooks'

import World from './world'

const BlockStage = styled(Stage)`
    display: block;
`

export default function Canvas({ hideTitle }: { hideTitle: () => void }) {
    const [width, height] = useWindowSize()

    return (
        <BlockStage
            onPointerDown={hideTitle}
            width={width}
            height={height} >
            <World />
        </BlockStage>
    )
}