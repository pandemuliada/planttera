import { Box, Link, Flex, Grid, Icon, IconButton, Button, PseudoBox, Stack, Divider } from '@chakra-ui/core'
import NextLink from './NextLink'
import Container from './Container'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import useWindowWidth from '../hooks/use-window-width'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

interface iNavLink {
  key: string
  route: string
  label: string
}

const navLinks: iNavLink[] = [
  {
    key: 'home',
    route: '/',
    label: 'Beranda',
  },
  {
    key: 'catalogs',
    route: '/catalogs',
    label: 'Katalog',
  },
  {
    key: 'about',
    route: '/about',
    label: 'Tentang',
  },
  {
    key: 'how-to-order',
    route: '/how-to-order',
    label: 'Cara Pesan',
  },
]

interface iMobileNavProps {
  visible: boolean
  onToggleNav: (visible: boolean) => void
  navLinks: iNavLink[]
}

const MobileNav: React.FC<iMobileNavProps> = (props) => {
  const { visible, onToggleNav, navLinks } = props

  const Router = useRouter()

  const MotionBox = motion.custom(Box)

  const linkStyles = {
    _hover: {
      textDecoration: 'none',
      color: 'white',
      backgroundColor: 'teal.400',
    },
    padding: '10px',
    color: 'gray.600',
  }

  const activeLinkStyles = {
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'teal.400',
  }

  const variants = {
    show: {
      opacity: 1,
      height: '100%',
      display: 'grid',
      marginTop: '15px',
    },
    hide: {
      opacity: 0,
      height: '0px',
      marginTop: '0px',
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <>
      <Flex alignItems="center">
        <NextLink
          href="/"
          as="/"
          fontSize={{ base: '20px', sm: '22px' }}
          color="gray.600"
          fontWeight="bold"
          _hover={{ textDecoration: 'none' }}
        >
          Planttera
        </NextLink>

        {/* Display on mobile, hide on desktop */}
        <Box ml="auto">
          <PseudoBox role="button" padding="0px" width="22px" height="22px" onClick={() => onToggleNav(visible)}>
            <Box
              ml="auto"
              m={0}
              p={0}
              as={visible ? AiOutlineClose : AiOutlineMenu}
              size="100%"
              color="gray.600"
              transition="all ease-out .5s"
            />
          </PseudoBox>
        </Box>
      </Flex>
      {visible && <Divider mt="15px" />}
      <MotionBox
        gridTemplateRows="repeat(4, 1fr)"
        gridRowGap="10px"
        textAlign="center"
        initial="hide"
        animate={visible ? 'show' : 'hide'}
        variants={variants}
      >
        {navLinks.map((link: iNavLink) => (
          <NextLink
            key={link.key}
            href={link.route}
            as={link.route}
            {...linkStyles}
            {...(Router.pathname === link.route && activeLinkStyles)}
          >
            {link.label}
          </NextLink>
        ))}
      </MotionBox>
    </>
  )
}

interface iDesktopNav {
  navLinks: iNavLink[]
}

const DesktopNav: React.FC<iDesktopNav> = (props) => {
  const { navLinks } = props

  const Router = useRouter()

  const linkStyles = {
    color: 'gray.600',
    _hover: {
      textDecoration: 'none',
      color: 'teal.400',
    },
  }

  const activeLinkStyles = {
    color: 'teal.400',
    fontWeight: '700',
  }

  return (
    <>
      <Flex alignItems="center">
        <NextLink
          href="/"
          as="/"
          fontSize={{ base: '20px', sm: '22px' }}
          color="gray.600"
          fontWeight="bold"
          _hover={{ textDecoration: 'none' }}
        >
          Planttera
        </NextLink>

        {/* Display on > 480px width  */}
        <Grid templateColumns="repeat(4, 1fr)" ml="auto" columnGap={1}>
          {navLinks.map((link: iNavLink) => (
            <NextLink
              key={link.key}
              href={link.route}
              as={link.route}
              {...linkStyles}
              {...(Router.pathname === link.route && activeLinkStyles)}
            >
              {link.label}
            </NextLink>
          ))}
        </Grid>
      </Flex>
    </>
  )
}

const Navigation = () => {
  const [visible, setVisible] = useState(false)
  const [windowWidth] = useWindowWidth()

  function toggleNav(visible: boolean) {
    visible ? setVisible(false) : setVisible(true)
  }

  return (
    <Box as="nav" py="20px" position="fixed" backgroundColor="white" boxShadow="md" width="100%" zIndex={20}>
      <Container mx="auto">
        {windowWidth > 480 ? (
          <DesktopNav navLinks={navLinks} />
        ) : (
          <MobileNav navLinks={navLinks} visible={visible} onToggleNav={(visible: boolean) => toggleNav(visible)} />
        )}
      </Container>
    </Box>
  )
}

export default Navigation
