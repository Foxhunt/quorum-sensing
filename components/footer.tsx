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

const OuterText = styled.div`
    height: 70px;

    display: flex;

    justify-content: center;
    align-items: center;

    padding-left: 20px;
    padding-right: 20px;

    text-align: center;
    letter-spacing: 0;
    color: #000000;
    opacity: 1;

    @media (max-width: 600px) {
        flex: 0 0 100%;
        padding-left: 0px;
        padding-right: 0px;
    }
`

const Logo = styled(OuterText)`
    font: 40px/48px Pilowlava;
`

const About = styled(OuterText)`
    font: bold 38px/57px Space Mono;
`

const Pill = styled.span`
    width: 250px;
    height: 53px;
    line-height: 43px;
    box-sizing: border-box;
    border: 5px solid #000000;
    border-radius: 27px;
`

export default function Footer({ setFrictionAir }) {
    return <Container>
        <Logo>
            <CenterText>
                Quo·rum
            </CenterText>
        </Logo>
        <Configuration
            setFrictionAir={setFrictionAir} />
        <About>
            <Pill>
                ABOUT
            </Pill>
        </About>
    </Container>
}
