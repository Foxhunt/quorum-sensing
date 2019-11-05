import { createContext, useState, useEffect } from 'react'
import { useTick } from '@inlet/react-pixi'
import { useWindowSize } from 'web-api-hooks'
import Inducer from './inducer'
import Cell from './cell'

export type cells = [number, number, number, number][]
type setPositions = (positions: cells) => void
export type worldContext = {
    cells: cells,
    setCells: setPositions
    inducers: cells,
    setInducers: setPositions,
    tick: boolean,
    setTick: (tick: boolean) => void
}

export const WorldContext = createContext<worldContext>({
    cells: [],
    setCells: () => null,
    inducers: [],
    setInducers: () => null,
    tick: false,
    setTick: () => null
},
)

export default function () {
    const [width, height] = useWindowSize()
    const [cells, setCells] = useState<cells>([])
    const [inducers, setInducers] = useState<cells>([])
    const [tick, setTick] = useState(false)

    useEffect(() => {
        for (let i = 0; i < 20; i++) {
            cells.push([
                width * Math.random(),
                height * Math.random(),
                0.2 * Math.random(),
                Math.random() * Math.PI * 2
            ])
        }
        setCells([...cells])
    }, [])

    useTick(_delta => {
        const delta = _delta ? _delta : 0
        for (const cell of cells) {
            const dX = Math.cos(cell[3]) * cell[2] * delta
            const dY = Math.sin(cell[3]) * cell[2] * delta
            cell[0] += dX
            cell[1] += dY
            cell[3] -= 0.01
        }
        for (const inducer of inducers) {
            const dX = Math.cos(inducer[3]) * inducer[2] * delta
            const dY = Math.sin(inducer[3]) * inducer[2] * delta
            inducer[0] += dX
            inducer[1] += dY
            inducer[3] += 0.01
        }
        setTick(!tick)
    })

    console.log(inducers.length)

    return <WorldContext.Provider value={{ tick, setTick, cells, setCells, inducers, setInducers }}>
        {inducers.map(
            (position, index) =>
                <Inducer
                    position={position}
                    index={index}
                    key={index} />
        )}
        {cells.map(
            (position, index) =>
                <Cell
                    position={position}
                    index={index}
                    key={index} />
        )}
    </WorldContext.Provider>
}
