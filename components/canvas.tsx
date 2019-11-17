import styled from 'styled-components'
import { Stage } from '@inlet/react-pixi'
import { useWindowSize } from 'web-api-hooks'

import Quorum from './quorum'

const BlockStage = styled(Stage)`
    display: block;
`

export default function Canvas() {
    const [width, height] = useWindowSize()

    return (
        <BlockStage
            width={width}
            height={height - 75} >
            <Quorum />
        </BlockStage>
    )
}