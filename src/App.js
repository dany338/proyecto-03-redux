import Rutas from './routes';
import { Provider } from 'react-redux'
import { store } from './redux/store'
// import AuthState from './context/auth/authState';
// import ProductState from './context/products/ProductState';

function App() {
  return (
    <Provider store={store}>
      <Rutas />
    </Provider>
    // <AuthState>
    //   <ProductState>
    //   </ProductState>
    // </AuthState>
  );
}

export default App;
