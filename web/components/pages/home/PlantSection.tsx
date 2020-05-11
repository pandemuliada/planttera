import dynamic from 'next/dynamic'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Heading, Text } from '@chakra-ui/core'
import Container from '../../Container'
import { iRootState } from '../../../redux/reducers'
import { useEffect } from 'react'
import { url } from '../../../utils/api'
import { PrimaryButton } from '../../primitives/buttons'
import NextLink from '../../NextLink'
import useWindowWidth from '../../../hooks/use-window-width'

const Card = dynamic(() => import('../../Card'))
const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), { ssr: false })

const PlantCarousel: React.FC<any> = ({ data }) => {
  return (
    <Carousel
      keepDirectionWhenDragging
      infinite
      centered
      clickToChange
      slidesPerPage={2}
      itemWidth={270}
      breakpoints={{
        480: {
          infinite: false,
        },
      }}
    >
      {data.map((plant: any, index: number) => (
        <Card
          width="100%"
          height={370}
          key={`${index}_${plant.name}`}
          title={plant.name}
          subtitle={plant.category.name}
          mr="20px"
          image={{ src: url(`/${plant.picture}`), alt: plant.title }}
        >
          <NextLink href={`catalogs/${plant.id}`} display="block" mt="20px" _hover={{ textDecoration: 'none' }}>
            <PrimaryButton as="span" display="block" width="75%" mx="auto">
              Detail
            </PrimaryButton>
          </NextLink>
        </Card>
      ))}
    </Carousel>
  )
}

const PlantSection: React.FC = () => {
  const [windowWidth] = useWindowWidth()

  const Dispatch = useDispatch()
  const plants = useSelector((state: iRootState) => state.Plants)

  useEffect(() => {
    loadData()
  }, [])

  function loadData() {
    Dispatch({ type: 'GET_PLANTS_PENDING' })
    fetch('http://localhost:3000/plants')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        Dispatch({ type: 'GET_PLANTS_FULLFILLED', payload: [...res.data] })
      })
      .catch((err) => console.log(err))
  }

  return (
    <Box as="section" py="60px">
      <Container mx="auto" textAlign="center">
        <Heading as="h2" color="gray.700" size="xl" mb="15px">
          Tanaman Populer
        </Heading>
        <Text color="gray.600" mb="35px">
          Tanaman yang banyak dicari oleh pelanggan yang bisa jadi referensi anda
        </Text>
      </Container>
      {windowWidth > 720 ? (
        <Container mx="auto">
          <PlantCarousel data={plants.data} />
        </Container>
      ) : (
        <PlantCarousel data={plants.data} />
      )}
    </Box>
  )
}

export default PlantSection
