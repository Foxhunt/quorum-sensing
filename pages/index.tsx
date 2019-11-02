import styled, { createGlobalStyle } from 'styled-components'
import dynamic from 'next/dynamic'

const Canvas = dynamic(
  () => import('../components/canvas'),
  {
    ssr: false,
    loading: () => <>loading...</>
  }
)

const GlobalStyle = createGlobalStyle`
  html {
    user-select: none;
  }
  body {
    margin: 0px;
  }
`

const Title = styled.div`
  position: absolute;
  width: 100%;

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 4em;
  line-height: 94px;

  text-align: center;
  color: #ffffff;
`

export default () => <>
  <GlobalStyle />
  <Title>[ˈkvoːʁʊm]</Title>
  <Canvas />
</>
