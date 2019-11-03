import { createContext, useState, useEffect } from 'react'
import { useWindowSize } from 'web-api-hooks'
import Inducer from './inducer'
import Cell from './cell'

export type position = [number, number]
type positions = {
    cells: position[],
    inducers: position[]
}
type setPositions = (positions: positions) => void
export type worldContext = {
    positions: positions,
    setPositions: setPositions
}

export const WorldContext = createContext<worldContext>({
    positions: { cells: [], inducers: [] },
    setPositions: () => null
})

export default function () {
    const [positions, setPositions] = useState<positions>({ cells: [], inducers: [] })

    const [width, height] = useWindowSize()

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            positions.cells.push([width * Math.random(), height * Math.random()])
        }
        setPositions({ ...positions })
    }, [])

    return <WorldContext.Provider value={{ positions, setPositions }}>
        {positions.inducers.map(
                    (position, index) =>
                        <Inducer
                            position={position}
                            index={index}
                            key={index} />
                )}
                {positions.cells.map(
                    (position, index) =>
                        <Cell
                            position={position}
                            index={index}
                            key={index} />
                )}
    </WorldContext.Provider>
}
