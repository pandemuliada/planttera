import Container from '../../Container'
import { Heading, Box, Input, Text } from '@chakra-ui/core'
import { PrimaryButton } from '../../primitives/buttons'

const NewsletterSection: React.FC = () => {
  return (
    <Box
      as="section"
      py="60px"
      bgImage="url('/images/newsletter-bg.png')"
      bgPos="bottom center"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      height="400px"
    >
      <Container mx="auto" textAlign="center">
        <Heading as="h2" color="gray.700" size="xl" mb="25px">
          Newsletter
        </Heading>
        <Text color="gray.600" mb="35px">
          Dapatkan info tentang tanaman terbaru dari Planttera
        </Text>
        <Box>
          <Input size="lg" placeholder="youremail@example.com" rounded="0" focusBorderColor="teal.400" mb="10px" />
          <PrimaryButton>SUBSCRIBE</PrimaryButton>
        </Box>
      </Container>
    </Box>
  )
}

export default NewsletterSection
