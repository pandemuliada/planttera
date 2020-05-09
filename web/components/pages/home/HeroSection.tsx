import useWindowWidth from '../../../hooks/use-window-width'
import { Heading, Box, Text, InputGroup, InputLeftElement, Icon, Input, Image } from '@chakra-ui/core'
import Container from '../../Container'

const HeroSection = () => {
  const [windowWidth] = useWindowWidth()

  return (
    <Box
      position="relative"
      as="section"
      py="30px"
      backgroundImage={{ base: "url('/images/hero-background.png')", lg: 'none' }}
      backgroundPosition="top right"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      minHeight="80vh"
      display="flex"
      flexDir={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent={{ base: 'center', lg: 'auto' }}
    >
      <Container mx="auto" display={{ base: 'flex', lg: 'grid' }} gridTemplateColumns={{ lg: 'repeat(2, 1fr)' }}>
        <Box textAlign={{ base: 'center', lg: 'left' }}>
          <Heading
            as="h1"
            size="2xl"
            color={windowWidth >= 992 ? 'gray.700' : 'white'}
            lineHeight="auto"
            mb="25px"
            fontWeight="800"
          >
            Percantik Rumah <br /> Dengan Tanaman
          </Heading>
          <Text color={windowWidth >= 992 ? 'gray.600' : 'white'}>
            Tanaman bisa memberikan kesan sejuk pada rumah anda Lorem ipsum dolor sir amet
          </Text>

          <InputGroup mt="35px" width="95%" mx={{ base: 'auto', lg: 0 }}>
            <InputLeftElement children={<Icon name="search" color="gray.300" />} />
            <Input size="lg" rounded="0" type="text" placeholder="Cari Tanaman" focusBorderColor="teal.400" />
          </InputGroup>
        </Box>
        <Box
          display={{ base: 'none', lg: 'block' }}
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          bgImage="url('/images/hero-background.png')"
          width="47%"
          backgroundSize="cover"
        />
      </Container>
    </Box>
  )
}

export default HeroSection
