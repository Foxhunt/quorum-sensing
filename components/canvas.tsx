import styled from 'styled-components'
import { Stage } from '@inlet/react-pixi'

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

export default () => {
    return (
        <BlockStage
            width={window.innerWidth}
            height={window.innerHeight} >
            {cells.map(index => <Cell key={index} />)}
            {inducers.map(index => <Inducer key={index} />)}
        </BlockStage>
    )
}