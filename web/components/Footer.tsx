import { Box, Grid, Heading, Text, Link } from '@chakra-ui/core'
import Container from './Container'
import NextLink from './NextLink'

const Footer: React.FC = () => {
  return (
    <Box as="footer" py="40px" borderTop="1px solid" borderColor="gray.200">
      <Container mx="auto">
        <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap="20px">
          <Box display="flex" flexDir="column">
            <Heading as="h6" color="gray.700" mb="10px" size="lg">
              Planttera
            </Heading>
            <Text color="gray.600" mb="5px">
              Planttera adalah toko online yang mejual berbagai jenis tanaman
            </Text>
          </Box>
          <Box display="flex" flexDir="column">
            <Heading as="h6" color="gray.700" mb="10px" size="lg">
              Pelanggan
            </Heading>
            <NextLink href="/catalogs" as="/catalogs" _hover={{ textDecoration: 'none', color: 'teal.400' }} mb="5px">
              Katalog
            </NextLink>
            <NextLink
              href="/how-to-order"
              as="/how-to-order"
              _hover={{ textDecoration: 'none', color: 'teal.400' }}
              mb="5px"
            >
              Cara Pesan
            </NextLink>
          </Box>
          <Box display="flex" flexDir="column">
            <Heading as="h6" color="gray.700" mb="10px" size="lg">
              Perusahaan
            </Heading>
            <NextLink href="/about" as="/about" _hover={{ textDecoration: 'none', color: 'teal.400' }} mb="5px">
              Tentang
            </NextLink>
            <NextLink href="/contact" as="/contact" _hover={{ textDecoration: 'none', color: 'teal.400' }} mb="5px">
              Kontak
            </NextLink>
          </Box>
          <Box display="flex" flexDir="column">
            <Heading as="h6" color="gray.700" mb="10px" size="lg">
              Ikuti Kami
            </Heading>
            <Link href="" _hover={{ textDecoration: 'none', color: 'teal.400' }} mb="5px">
              Facebook
            </Link>
            <Link href="" _hover={{ textDecoration: 'none', color: 'teal.400' }} mb="5px">
              Instagram
            </Link>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
