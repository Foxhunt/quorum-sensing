import { createContext, useState, useEffect, useRef, useCallback } from 'react'
import { ParticleContainer, useApp } from '@inlet/react-pixi'
import { useWindowSize } from 'web-api-hooks'
import Cell from './cell'
import useEngine from '../hooks/useEngine'
import { Bodies, Body, World, Events, Mouse } from 'matter-js'

export type cells = Body[]
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
})

export default function Quorum({ frictionAir }) {
    const app = useApp()
    const [width, height] = useWindowSize()
    const [cells, setCells] = useState<cells>([])
    const [inducers, setInducers] = useState<cells>([])
    const [tick, setTick] = useState(false)
    const [gravActive, setGravActive] = useState(false)

    const attractor = useCallback((bodyA, bodyB) => {
        return gravActive ? ({
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
        }) : ({
            x: 0,
            y: 0
        })
    }, [gravActive])

    const attractorRef = useRef(attractor)

    useEffect(() => {
        attractorRef.current = attractor
    }, [attractor])

    const grav = useRef(Bodies.circle(
        width / 2,
        height / 2,
        0,
        {
            isStatic: true,
            plugin: {
                attractors: [
                    (bodyA, bodyB) => attractorRef.current(bodyA, bodyB)
                ]
            }
        }))

    const engine = useEngine(width, height)

    useEffect(() => {
        World.add(engine.world, grav.current)
    }, [])

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            const cell = Bodies.circle(
                width * Math.random(),
                height * Math.random(),
                14, { frictionAir: 0.1 })
            World.add(engine.world, cell)
            cells.push(cell)
        }
        setCells([...cells])
    }, [])

    useEffect(() => {
        if (gravActive && inducers.length < 100) {
            setTimeout(() => {
                const cell = cells[Math.floor(Math.random() * cells.length)]
                const inducer = Bodies.circle(
                    cell.position.x,
                    cell.position.y,
                    10, { frictionAir: 0.1 - frictionAir * 0.1 })
                World.add(engine.world, inducer)
                inducers.push(inducer)
                setInducers([...inducers])
            }, 50)
        }
    }, [gravActive, inducers.length])

    useEffect(() => {
        for (const body of [...cells, ...inducers]) {
            Body.set(body, "frictionAir", 0.1 - frictionAir * 0.1)
        }
    }, [frictionAir])

    useEffect(() => {
        function tick() {
            setTick(tick => !tick)
        }
        const mouse = Mouse.create(app.renderer.view)
        function translateGrav() {
            if (!mouse.mousedownPosition.x) {
                return
            }
            !gravActive && setGravActive(true)
            Body.translate(grav.current, {
                x: (mouse.mousedownPosition.x - grav.current.position.x) * 0.25,
                y: (mouse.mousedownPosition.y - grav.current.position.y) * 0.25
            })
        }

        Events.on(engine, "tick", tick)
        Events.on(engine, "afterUpdate", translateGrav)

        return () => {
            Events.off(engine, "tick", tick)
            Events.off(engine, "afterUpdate", translateGrav)
        }
    }, [engine])

    return <WorldContext.Provider value={{ tick, setTick, cells, setCells, inducers, setInducers }}>
        <ParticleContainer
            interactive
            properties={{ position: true }}>
            {inducers.map(
                (inducer, index) =>
                    <Cell
                        image={"/green2.png"}
                        position={[inducer.position.x, inducer.position.y]}
                        key={index} />
            )}
        </ParticleContainer>
        {cells.map(
            (cell, index) =>
                <Cell
                    image={"/white2.png"}
                    position={[cell.position.x, cell.position.y]}
                    key={index} />
        )}
    </WorldContext.Provider>
}
