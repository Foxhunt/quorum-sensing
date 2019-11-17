import { useEffect, useRef } from "react"
import styled from "styled-components"
import { motion, useMotionValue } from "framer-motion"

const Container = styled.div`
    width: 100%;
    height: 44px;
    border-left: 5px solid #000000;
    border-right: 5px solid #000000;
    
    display: flex;
    align-items: center;
`

const Line = styled.div`
    width: 100%;
    height: 5px;
    background-color: #000000;
`

const Slideble = styled(motion.div)`
    position: relative;
    left: calc(50% - 64px / 2);

    width: 64px;
    height: 28px;

    box-sizing: border-box;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 5px solid #000000;
    border-radius: 16px;
    opacity: 1;
`

export default function Slider({setFrictionAir}) {
    const dragConstraintRef = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)

    useEffect(() => {
        const unsubX = x.onChange(() => {
            if(dragConstraintRef.current){
                const width = dragConstraintRef.current.clientWidth / 2
                setFrictionAir((x.get() / width) * -0.1)
            }
        })
        return () => { unsubX() }
    }, [])

    return <Container>
        <Line ref={dragConstraintRef}>
            <Slideble
                style={{ y: "-11.5px", x }}
                drag="x"
                dragMomentum={false}
                dragElastic={0.09}
                dragConstraints={dragConstraintRef} />
        </Line>
    </Container>
}
