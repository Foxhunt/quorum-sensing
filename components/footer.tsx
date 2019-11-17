import styled from "styled-components"
import Configuration from "./configuration"
import { CenterText } from "./centerText"

const Container = styled.footer`
    position: absolute;
    bottom: 0px;

    width: 100%;
    height: 70px;

    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-top: 5px solid #000000;
    opacity: 1;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-y: auto;
`

const Logo = styled.div`
    display: inline-block;
    
    max-width: 300px;
    flex: 1;

    border-right: 5px solid #000000;

    text-align: center;
    font: 40px/48px Pilowlava;
    letter-spacing: 0;
    color: #000000;
    opacity: 1;
`

const About = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    max-width: 300px;
    flex: 1;

    border-left: 5px solid #000000;

    text-align: center;
    font: Bold 24px Space Mono;
    letter-spacing: 0;
    color: #000000;
    opacity: 1;
`

const Pill = styled.span`
    width: 250px;
    height: 50px;
    line-height: 40px;
    box-sizing: border-box;
    border: 5px solid #000000;
    border-radius: 27px;
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
            <Pill>
                ABOUT
            </Pill>
        </About>
    </Container>
}
