import styled from 'styled-components'
import { Stage } from '@inlet/react-pixi'
import { useWindowSize } from 'web-api-hooks'

import Quorum from './quorum'

const BlockStage = styled(Stage)`
    display: block;
`

export default function Canvas({ hideTitle }: { hideTitle: () => void }) {
    const [width, height] = useWindowSize()

    return (
        <BlockStage
            onPointerMove={() => {
                hideTitle()
            }}
            width={width}
            height={height} >
            <Quorum />
        </BlockStage>
    )
}