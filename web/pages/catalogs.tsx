import {
  Box,
  Badge,
  Flex,
  Grid,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Image,
  Divider,
} from '@chakra-ui/core'
import Layout from '../components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { iRootState } from '../redux/reducers'
import Card from '../components/Card'
import { url, Api } from '../utils/api'
import { useEffect, useState } from 'react'

const CatalogsPage = () => {
  const plants = useSelector((state: iRootState) => state.Plants)
  const Dispatch = useDispatch()

  const [categories, setCategories] = useState<any>([])
  const [category, setCategory] = useState<number | null>(null)

  useEffect(() => {
    loadData()
    loadCategories()
  }, [])

  useEffect(() => {
    if (category !== null) {
      loadData({ categoryId: category })
    }
  }, [category])

  function loadData(params: any = {}) {
    Dispatch({ type: 'GET_PLANTS_PENDING' })
    Api()
      .get('/plants', { params: { ...params } })
      .then((res) => {
        Dispatch({ type: 'GET_PLANTS_FULLFILLED', payload: [...res.data.data] })
      })
      .catch((error) => console.log(error.response))
  }

  function loadCategories() {
    Api()
      .get('/categories')
      .then((res) => {
        setCategories([...res.data.data])
      })
      .catch((error) => console.log(error.response))
  }

  return (
    <Layout pt="90px" pb="90px" useContainer>
      <Box as="section" py="30px">
        <Heading as="h1" size="xl" color="gray.700" textAlign="center" mb="25px">
          Katalog
        </Heading>
        <Box display="flex" flexWrap="wrap" justifyContent={{ base: 'start', sm: 'center' }} alignItems="center">
          <Box
            cursor="pointer"
            onClick={() => {
              loadData()
              setCategory(null)
            }}
            color="gray.500"
            p="5px 10px"
            fontSize="14px"
            {...(category === null && { color: 'teal.400', borderWidth: 1, borderColor: 'teal.200' })}
            mb="10px"
            mr="20px"
          >
            Semua
          </Box>
          {categories.map((item: any) => (
            <Box
              color="gray.500"
              p="5px 10px"
              mr="20px"
              cursor="pointer"
              mb="10px"
              onClick={() => setCategory(item.id)}
              {...(item.id === category && {
                color: 'teal.400',
                borderWidth: 1,
                borderColor: 'teal.200',
              })}
            >
              {item.name}
            </Box>
          ))}
        </Box>

        <Divider mb="50px" />
        {plants.data.length < 1 && (
          <Box textAlign="center" position="relative">
            <Heading fontWeight="400" size="sm" fontStyle="italic" color="gray.600" mb="10px">
              Ups, tanaman tidak ditemukan!
            </Heading>
            <Image src="/images/empty-state-bg.svg" width={{ base: '80%', sm: '50%', lg: '400px' }} mx="auto" />
          </Box>
        )}
        <Grid
          gridTemplateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(5, 1fr)',
          }}
          gridColumnGap="30px"
          gridRowGap="50px"
        >
          {plants.data.map((plant: any, index: number) => (
            <Card
              width="100%"
              height={350}
              key={`${index}_${plant.name}`}
              title={plant.name}
              subtitle={plant.category.name}
              image={{ src: url(`/${plant.picture}`), alt: plant.title }}
            />
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export default CatalogsPage
