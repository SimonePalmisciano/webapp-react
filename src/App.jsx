import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { useEffect, useState } from "react";
import { ProductProvider } from "./contexts/ProductContext";


function App() {
  return (

    <ProductProvider>
      <Main products={products} loading={loading} error={error}/>
    </ProductProvider>

  )
}
export default App;
