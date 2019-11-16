import styled from "styled-components"

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

const Slideble = styled.div`
    width: 64px;
    height: 28px;

    box-sizing: border-box;

    transform: translate(49px, -12px);

    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 5px solid #000000;
    border-radius: 16px;
    opacity: 1;
`

export default function Slider() {
    return <Container>
        <Line><Slideble/></Line>
    </Container>
}
