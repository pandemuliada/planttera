import { Box, BoxProps } from '@chakra-ui/core'

const containerSettings = {
  width: {
    base: '100%',
    sm: '460px',
    md: '720px',
    lg: '960px',
    xl: '1200px',
  },
  px: {
    base: '20px',
    sm: '0px',
  },
}

const Container: React.FC<BoxProps> = (props) => {
  const { children, ...rest } = props

  return (
    <Box {...containerSettings} {...rest}>
      {children}
    </Box>
  )
}

export default Container
