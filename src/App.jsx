
import { ProductProvider } from "./contexts/ProductContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { ProductDetailPage } from "./pages/ProductDetailPage.jsx"



function App() {
  
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
