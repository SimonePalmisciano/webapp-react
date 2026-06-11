import Main from "./components/Main/Main";
import { ProductProvider } from "./contexts/ProductContext";
import useProduct from "./hooks/useProduct";


function App() {
  const {products, loading, error} = useProduct();

  return (
    <ProductProvider>
      <Main products={products} loading={loading} error={error}/>
    </ProductProvider>
  )
}
export default App;
