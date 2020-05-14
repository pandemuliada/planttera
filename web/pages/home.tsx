import Layout from '../components/Layout'
import HeroSection from '../components/pages/home/HeroSection'
import PlantSection from '../components/pages/home/PlantSection'
import TestimonialSection from '../components/pages/home/TestimonialSection'
import NewsletterSection from '../components/pages/home/NewsletterSection'

const HomePage = () => {
  return (
    <>
      <Layout title="Homepage" pt="60px">
        <HeroSection />
        <PlantSection />
        <TestimonialSection />
        <NewsletterSection />
      </Layout>
    </>
  )
}

export default HomePage
