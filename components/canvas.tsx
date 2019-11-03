import styled from 'styled-components'
import { Stage } from '@inlet/react-pixi'
import { useWindowSize } from 'web-api-hooks'

import Cell from './cell'
import Inducer from './inducer'

const cells: number[] = []
const inducers: number[] = []

for (let i = 0; i < 10; i++) {
    cells.push(i)
    inducers.push(i)
}

const BlockStage = styled(Stage)`
    display: block;
`

export default ({ hideTitle }: { hideTitle: () => void }) => {
    const [width, height] = useWindowSize()
    return (
        <BlockStage
            onPointerDown={hideTitle}
            width={width}
            height={height} >
            {cells.map(index => <Cell key={index} />)}
            {inducers.map(index => <Inducer key={index} />)}
        </BlockStage>
    )
}