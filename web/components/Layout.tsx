import Navigation from './Navigation'
import Head from 'next/head'
import Container from './Container'
import Footer from './Footer'
import { Box, BoxProps } from '@chakra-ui/core'

interface iLayoutProps extends BoxProps {
  title?: string
  useContainer?: boolean
}

const Layout: React.FC<iLayoutProps> = (props) => {
  const { title = 'Planttera', useContainer = false, children, ...rest } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      {useContainer ? (
        <Container mx="auto" minHeight="calc(100vh - 178px)" {...rest}>
          {children}
        </Container>
      ) : (
        <Box minHeight="calc(100vh - 178px)" {...rest}>
          {children}
        </Box>
      )}
      <Footer />
    </>
  )
}

export default Layout
