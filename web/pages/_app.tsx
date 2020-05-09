import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { composeWithDevTools } from 'redux-devtools-extension'

import theme from '../lib/chakra/theme'
import rootReducers from '../redux/reducers'

import '@brainhubeu/react-carousel/lib/style.css'
import '../stylesheets/main.css'

const store = createStore(rootReducers, composeWithDevTools())

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
