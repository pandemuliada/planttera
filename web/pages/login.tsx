import Layout from '../components/Layout'
import { Grid, Image, Box, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/core'
import { PrimaryButton } from '../components/primitives/buttons'

const Login = () => {
  function onLogin(e: any) {
    e.preventDefault()
    console.log(e.currentTarget.password.value)
  }

  return (
    <>
      <Layout title="Masuk" pt="50px">
        <Grid gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }} height="90vh">
          <Box display="flex" alignItems="center" backgroundColor="gray.100">
            <Box width={{ base: '100%', md: '50%' }} ml={{ md: '20%' }} px={{ base: '20px', md: 0 }}>
              <Heading mb="10px">Login to Planttera</Heading>
              <Text mb={{ base: '30px', md: '80px' }} color="gray.600">
                Login to find best plant to decorate you rooms
              </Text>

              <Box as="form" onSubmit={(e: any) => onLogin(e)} width="100%">
                <FormControl mb="20px">
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    focusBorderColor="gray.300"
                    placeholder="youremail@mail.com"
                    aria-describedby="email-helper-text"
                    name="email"
                  />
                </FormControl>
                <FormControl mb="20px">
                  <FormLabel htmlFor="email">Password</FormLabel>
                  <Input
                    type="password"
                    id="password"
                    focusBorderColor="gray.300"
                    placeholder="********"
                    aria-describedby="password-helper-text"
                    name="password"
                  />
                </FormControl>

                <PrimaryButton display="block" width="100%" textTransform="uppercase" letterSpacing="5px">
                  Login
                </PrimaryButton>
              </Box>
            </Box>
          </Box>
          <Box
            display={{ base: 'none', md: 'block' }}
            bgImage="url('/images/hero-background.png')"
            width="100%"
            backgroundSize="cover"
          ></Box>
        </Grid>
      </Layout>
    </>
  )
}

export default Login
