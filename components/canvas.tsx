import { Stage } from '@inlet/react-pixi'

import Cell from './cell'
import Inducer from './inducer'

const cells: number[] = []
const inducers: number[] = []

for (let i = 0; i < 10; i++) {
    cells.push(i)
    inducers.push(i)
}

export default () => {
    return <Stage>
        {cells.map(index => <Cell key={index}/>)}
        {inducers.map(index => <Inducer key={index}/>)}
    </Stage>
}