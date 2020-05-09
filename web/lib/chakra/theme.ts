import { theme } from '@chakra-ui/core'

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    heading: '"Muli", sans-serif',
    body: '"Muli", sans-serif',
  },
  // Breakpoints [480, 768, 992, 1280]
}

export default customTheme
