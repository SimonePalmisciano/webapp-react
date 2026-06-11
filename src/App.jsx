import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import { ProductProvider } from "./contexts/ProductContext";


function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try{
        const response = await fetch("http://localhost:2222/products");
        const data = await response.json();

        if(!response.ok || data.error) {
          throw new Error(data.error || "Errore nel recupero dei prodotti"); 
        }

        setProducts(data.result || []);
      } catch (error) {
        setError(error.message || "Errore sconosciuto");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);




  return (

    <ProductProvider>
      <Main products={products} loading={loading} error={error}/>
    </ProductProvider>

  )
}
export default App;
