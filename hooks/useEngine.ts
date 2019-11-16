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

    Runner.run(runner, engine)

    return () => {
      Runner.stop(runner)
    }
  }, [runner, engine])

  return engine
}
