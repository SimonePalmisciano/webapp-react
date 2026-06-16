
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage.jsx"
import NotFound from "./pages/NotFound.jsx";
import LayoutPagina from "./layouts/LayoutPagina.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import { CategoryProvider } from "./contexts/CategoryContext.jsx";
import ScrollToTop from "./components/ScrollToTop.js";
import { VisitProvider } from "./contexts/VisitContext.jsx";

function App() {

  return (

    <VisitProvider>
      <CategoryProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>

            <Route Component={LayoutPagina}>
              <Route index Component={HomePage} />
              <Route path="products" Component={ProductPage} />
              <Route path="products/:productSlug" Component={ProductDetailPage} />
              <Route path="about-us" Component={AboutUs} />
            </Route>

            <Route path="*" Component={NotFound} />
          </Routes>
        </BrowserRouter>
      </CategoryProvider>
    </VisitProvider>


  )
}
export default App;
