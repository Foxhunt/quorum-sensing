import styled from "styled-components"

import Slider from "./slider"
import { CenterText } from "./centerText"

const Container = styled.div`
    width: 100%;
    flex: 1;
    @media (max-width: 600px) {
        order: -1;
        flex: 0 0 100%;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Text = styled.div`
    width: 160px;
    height: 100%;
    text-align: center;
    
    font: Bold 38px/57px Space Mono;
    letter-spacing: 0;
    color: #000000;
`

export default function Configuration({ setFrictionAir }) {
    return <Container>
        <Text><CenterText>SLOW</CenterText></Text>
        <Slider setFrictionAir={setFrictionAir} />
        <Text><CenterText>WILD</CenterText></Text>
    </Container>
}
