
// import { wrapper } from '../redux/store';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/_global.scss';
function App({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>

}

// export default wrapper.withRedux(App)
export default App
