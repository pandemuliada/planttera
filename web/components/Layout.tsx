import Navigation from './Navigation'
import Head from 'next/head'
import Container from './Container'
import Footer from './Footer'

interface iLayoutProps {
  title?: string
  useContainer?: boolean
}

const Layout: React.FC<iLayoutProps> = (props) => {
  const { title = 'Planttera', useContainer = false, children } = props

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation />
      {useContainer ? <Container mx="auto">{children}</Container> : children}
      <Footer />
    </>
  )
}

export default Layout
