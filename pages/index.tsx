import { createGlobalStyle } from 'styled-components'
import dynamic from 'next/dynamic'

import Footer from "../components/footer"

const Canvas = dynamic(
  () => import('../components/canvas'),
  {
    ssr: false,
    loading: () => <>loading...</>
  }
)

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pilowlava";
    src: url("/Pilowlava-Regular.otf");
  }
  @font-face {
    font-family: "Space Mono";
    src: url("/i7dMIFZifjKcF5UAWdDRaPpZUFWaGw.ttf");
  }
  html {
    user-select: none;
  }
  body {
    margin: 0px;
  }
`

export default function Index() {
  return <>
    <GlobalStyle />
    <Canvas />
    <Footer />
  </>
}
