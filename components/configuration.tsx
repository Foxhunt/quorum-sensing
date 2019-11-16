import styled from "styled-components"

import Slider from "./slider"
import { CenterText } from "./centerText"

const Container = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Text = styled.div`
    width: 160px;
    height: 100%;
    text-align: center;
`

export default function Configuration() {
    return <Container>
        <Text><CenterText>Slow</CenterText></Text>
        <Slider />
        <Text><CenterText>Wild</CenterText></Text>
    </Container>
}
