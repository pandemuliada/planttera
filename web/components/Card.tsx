import { Box, Image, Heading, Text, BoxProps } from '@chakra-ui/core'
import { motion } from 'framer-motion'

interface iCarProps extends BoxProps {
  image?: {
    src: string
    alt?: string
  }
  title?: string
  subtitle?: string
  [x: string]: any
}

const Card: React.FC<iCarProps> = (props) => {
  const { image, title, subtitle, children, ...rest } = props

  const MotionBox = motion.custom(Box)

  const hoverAnimation = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 1,
  }

  return (
    <Box position="relative" {...rest}>
      <Image src={image?.src} alt={image?.alt || ''} height="100%" />
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        p="8px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        opacity={0}
        textAlign="center"
        width="100%"
        whileHover={hoverAnimation}
      >
        <Box width="inherit">
          <Text color="white" fontSize="14px" mb="2px">
            {subtitle}
          </Text>
          <Heading mt="0px" as="h4" size="lg" fontWeight="500" color="white">
            {title}
          </Heading>
          {children}
        </Box>
      </MotionBox>
    </Box>
  )
}

export default Card
