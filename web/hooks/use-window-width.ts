import { useState, useEffect } from 'react'

const initialWidth = 0

const useWindowWidth = (width: number = initialWidth) => {
  const [windowWidth, setWindowWidth] = useState(width)

  function getWindowWidth() {
    return window.innerWidth
  }

  useEffect(() => {
    if (process.browser) {
      setWindowWidth(getWindowWidth())
      window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
      return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    }
  }, [])

  return [windowWidth, setWindowWidth]
}

export default useWindowWidth
