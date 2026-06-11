import { ProductContext } from "../contexts/ProductContext";
import { useContext } from "react";

function useProduct() {
    const productValues = useContext(ProductContext);
    if(!productValues){
        throw new Error("Hai dimenticato di mettere il ProductProvider");
    }

    return productValues;
}

export default useProduct;