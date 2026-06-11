import Main from "./components/Main/Main";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  
  return (
    <ProductProvider>
      <Main/>
    </ProductProvider>
  )
}
export default App;
