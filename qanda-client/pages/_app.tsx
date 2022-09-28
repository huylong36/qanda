
import { wrapper } from '../redux/store';
import '../styles/_global.scss';
function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
