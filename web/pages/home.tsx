import { Box } from '@chakra-ui/core'
import Layout from '../components/Layout'
import HeroSection from '../components/pages/home/HeroSection'
import PlantSection from '../components/pages/home/PlantSection'
import TestimonialSection from '../components/pages/home/TestimonialSection'
import NewsletterSection from '../components/pages/home/NewsletterSection'

const HomePage = () => {
  return (
    <>
      <Layout title="Homepage">
        <Box pt="60px">
          <HeroSection />
        </Box>
        <PlantSection />
        <TestimonialSection />
        <NewsletterSection />
      </Layout>
    </>
  )
}

export default HomePage
