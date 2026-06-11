import Main from "./components/Main/Main.jsx";
import { useEffect, useState } from "react";
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { ProductDetailPage } from "./pages/ProductDetailPage.jsx"

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("http://localhost:2222/products");
        const data = await response.json();

        if (!response.ok || data.error) {
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
      <BrowserRouter>
        <Routes>

          <Route Component={LayoutPagina}>
            <Route index Component={HomePage} />
            <Route path="products" Component={ProductsPage} />
            <Route path="product/:productSlug" Component={ProductDetailPage} />
            <Route path="about-us" Component={AboutUs} />
          </Route>

          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  )
}
export default App;
