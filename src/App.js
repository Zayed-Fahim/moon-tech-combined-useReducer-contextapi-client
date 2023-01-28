import './App.css';
import ProductProvider from './Context/ProductProvider';
import Route from './Routes/Route/Route';

function App() {
  return (
    <ProductProvider>
      <Route></Route>
    </ProductProvider>
  );
}

export default App;
