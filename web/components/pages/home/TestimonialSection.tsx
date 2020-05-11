import dynamic from 'next/dynamic'
import { Box, Heading, Image, Flex, Text } from '@chakra-ui/core'
import { IoMdQuote } from 'react-icons/io'
import Container from '../../Container'
import useWindowWidth from '../../../hooks/use-window-width'

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), { ssr: false })

const testimonials = [
  {
    user: 'Wayan Alex',
    avatar: '/images/person-1.jpg',
    message: 'Tanamannya sangat bagus dan mudah dirawat',
  },
  {
    user: 'Jonathan',
    avatar: '/images/person-2.jpg',
    message: 'Tanamannya sangat bagus dan mudah dirawat',
  },
  {
    user: 'John',
    avatar: '/images/person-3.jpg',
    message: 'Tanamannya sangat bagus dan mudah dirawat',
  },
  {
    user: 'Margaret',
    avatar: '/images/person-2.jpg',
    message: 'Tanamannya sangat bagus dan mudah dirawat',
  },
  {
    user: 'Akeru',
    avatar: '/images/person-3.jpg',
    message: 'Tanamannya sangat bagus dan mudah dirawat',
  },
]

const TestimonialCarousel: React.FC<any> = ({ data }) => {
  return (
    <Carousel
      keepDirectionWhenDragging
      infinite
      clickToChange
      slidesPerPage={2}
      itemWidth={280}
      breakpoints={{
        480: {
          infinite: false,
          centered: true,
        },
      }}
    >
      {data.map((testimony: any, index: number) => (
        <Box
          key={testimony.user + index}
          position="relative"
          boxShadow="md"
          bg="white"
          p="20px"
          mr="20px"
          width="100%"
          my="20px"
          textAlign="center"
          height={300}
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Box as={IoMdQuote} size="50px" position="absolute" top="-20px" zIndex={2} color="teal.400" opacity={0.8} />
          <Image src={testimony.avatar} width="100px" rounded="50%" mx="auto" />
          <Heading as="h6" size="md" mt="10px" color="gray.600">
            {testimony.user}
          </Heading>
          <Text color="gray.600" mt="12px">
            {testimony.message}
          </Text>
        </Box>
      ))}
    </Carousel>
  )
}

const TestimonialSection: React.FC = () => {
  const [windowWidth] = useWindowWidth()

  return (
    <Box as="section" py="60px" bg="#fcfcfc">
      <Container textAlign="center" mx="auto">
        <Heading display={{ base: 'block', md: 'none' }} as="h2" color="gray.700" size="xl" mb="25px">
          Kata Mereka
        </Heading>
      </Container>
      {windowWidth > 720 ? (
        <Container mx="auto" display="flex" alignItems="center" position="relative">
          <Box width="40%" mr="50px">
            <Image src="/images/newsletter-fg.png" width="100%" objectFit="cover" />
          </Box>
          <Box width="60%">
            <Heading as="h2" color="gray.700" size="xl" mb="25px">
              Kata Mereka
            </Heading>
            <TestimonialCarousel data={testimonials} />
          </Box>
        </Container>
      ) : (
        <TestimonialCarousel data={testimonials} />
      )}
    </Box>
  )
}

export default TestimonialSection
