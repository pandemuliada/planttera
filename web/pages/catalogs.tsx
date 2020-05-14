import { Box, Badge, Flex, Grid, Heading } from '@chakra-ui/core'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { iRootState } from '../redux/reducers'
import Card from '../components/Card'
import { url } from '../utils/api'

const CatalogsPage = () => {
  const plants = useSelector((state: iRootState) => state.Plants)

  return (
    <Layout pt="90px" pb="90px" useContainer>
      <Box as="section" py="30px">
        <Heading as="h1" size="xl" color="gray.700" textAlign="center" mb="35px">
          Catalogs
        </Heading>
        <Grid
          gridTemplateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
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
