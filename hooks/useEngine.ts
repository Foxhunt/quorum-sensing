import { useState, useEffect } from "react"

import "matter-attractors"
import Matter, { Engine, Runner, Bodies, World } from "matter-js"
Matter.use('matter-attractors');

export default function useEngine(width: number, height: number) {
  const [engine] = useState(Engine.create({
    positionIterations: 1,
    velocityIterations: 1,
    constraintIterations: .1
  }))

  const [runner] = useState(Runner.create({}))
  useEffect(() => {
    engine.world.gravity = { x: 0, y: 0, scale: 1 }

    const leftWall = Bodies.rectangle(0, height / 2, 10, height + 10, { isStatic: true })
    const rightWall = Bodies.rectangle(width, height / 2, 10, height + 10, { isStatic: true })
    const bottomWall = Bodies.rectangle(width / 2, height, width + 10, 10, { isStatic: true })
    const topWall = Bodies.rectangle(width / 2, 0, width + 10, 10, { isStatic: true })
    World.add(engine.world, [leftWall, rightWall, bottomWall, topWall])

    Runner.run(runner, engine)

    return () => {
      Runner.stop(runner)
    }
  }, [runner, engine])

  return engine
}
