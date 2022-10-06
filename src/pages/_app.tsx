import type { AppProps } from 'next/app'
import styled from 'styled-components'
import { GlobalStyles } from '../styles/GlobalStyles'
import { ThemeProvider } from '../contexts/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <ThemeProvider theme={'light'}>
        <GlobalStyles />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  )
}

export default MyApp


const Main = styled.main`
  /* insert page wrapper styles */
  max-width: 720px;
  height: 100%;
  margin: 0 auto;
  padding-top: 2rem;

  &.dark {
    --main-color: #5e5e5e
    --accent-color: #ffffff;
  }
`