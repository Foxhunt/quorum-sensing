import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { AnimatePresence, motion, Variants } from 'framer-motion'
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

const Title = styled(motion.div)`
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

const title: Variants = {
  visible: {
    y: 0,
    transition: { duration: 4 }
  },
  hidden: {
    y: '-100%',
    transition: { duration: 2 }
  }
}

export default function Index() {
  const [touched, setTouched] = useState(false)

  return <>
    <GlobalStyle />
    <AnimatePresence>
      {
        !touched &&
        <Title
          key={'1'}
          variants={title}
          initial={'hidden'}
          animate={'visible'}
          exit={'hidden'}
          transition={{ type: 'tween', ease: 'circOut' }} >
          [ˈkvoːʁʊm]
        </Title>
      }
    </AnimatePresence>
    <Canvas
      hideTitle={() => setTouched(true)} />
  </>
}
