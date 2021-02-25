import { ChallengesProvider } from '../contexts/ChallengesContext';
import GlobalStyle from '../styles/global';



function MyApp({ Component, pageProps }) {


  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChallengesProvider>
  )
}

export default MyApp
