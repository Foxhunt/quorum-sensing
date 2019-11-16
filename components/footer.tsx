import styled from "styled-components"
import Configuration from "./configuration"
import { CenterText } from "./centerText"

const Container = styled.footer`
    position: absolute;
    bottom: 0px;

    width: 100%;
    height: 68px;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-top: 5px solid #000000;
    opacity: 1;

    display: flex;
    justify-content: space-between;
`

const Logo = styled.div`
    display: inline-block;
    
    width: 300px;

    border-right: 5px solid #000000;

    text-align: center;
    font: Regular 40px/48px Pilowlava;
    letter-spacing: 0;
    color: #000000;
    opacity: 1;
`

const About = styled.div`
    display: inline-block;

    width: 300px;

    border-left: 5px solid #000000;

    text-align: center;
    font: Regular 40px/48px Pilowlava;
    letter-spacing: 0;
    color: #000000;
    opacity: 1;
`

export default function Footer() {
    return <Container>
        <Logo>
            <CenterText>
                Quo·rum
            </CenterText>
        </Logo>
        <Configuration />
        <About>
            <CenterText>
                ABOUT
            </CenterText>
        </About>
    </Container>
}
