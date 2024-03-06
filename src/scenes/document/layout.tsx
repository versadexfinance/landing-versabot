import { ReactNode, Suspense } from 'react'

import Html from '@/scenes/document/html'
import ServerStylesheet from '@/styled/server-stylesheet'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '@/components/header/header'

import Footer from '@/components/footer/footer'
import { Flex } from '@/components/box'
import { styled } from '@/styled'
import { AnimatePresence } from 'framer-motion'

interface RootLayoutProps {
  children: ReactNode
}

export const generateStaticParams = async () => {}

const Container = styled('div', {
  transition: 'all 0.5s ease-in-out',
  display: 'flex',
  flexDirection: 'column',

  opacity: 0,
  variants: {
    mounted: {
      true: {
        opacity: 1,
      },
    },
  },
  width: '100%',
  maxWidth: 380,

  mx: 'auto',

  py: 4,
})

const RootLayout = ({ children, ...props }: RootLayoutProps) => {
  return (
    <ServerStylesheet>
      <Html>
        <Header />

        <Container>{children}</Container>
        {/* <div
          style={{
            position: 'absolute',
            borderRadius: '658px',
            width: '658px',
            height: '208px',
            zIndex: -1,

            left: '50%',
            transform: 'translateX(-50%)',
            background:
              'var(--Gradient---90deg, linear-gradient(180deg, black 0%, white 100%))',
            filter: 'blur(100px)',
            top: '230px',
          }}
        ></div> */}
        <Footer />
        <ToastContainer position="top-center" theme="dark" />
      </Html>
    </ServerStylesheet>
  )
}

export default RootLayout
