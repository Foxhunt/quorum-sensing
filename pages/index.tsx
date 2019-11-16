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
