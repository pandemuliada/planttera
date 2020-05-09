import NextLink from 'next/link'
import { Link as ChakraLink } from '@chakra-ui/core'

interface iLinkProps {
  href: string
  as?: string
  [x: string]: any
}

const Link: React.FC<iLinkProps> = (props) => {
  const { href, as, children, ...rest } = props

  return (
    <NextLink href={href} as={as || href}>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  )
}

export default Link
