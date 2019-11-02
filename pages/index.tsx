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
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 94px;
`

export default () => <>
  <GlobalStyle></GlobalStyle>
  <Title>[ˈkvoːʁʊm]</Title>
  <Canvas />
</>
