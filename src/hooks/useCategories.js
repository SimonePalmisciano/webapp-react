import { useContext } from "react";
import { CategoryContext} from "../contexts/CategoryContext";

function useCategories(){
    const categoryValues = useContext(CategoryContext);
    if(!categoryValues) {
        throw new Error("Hai dimenticato di mettere il CategoryProvider");
    }

    return categoryValues;
}

export default useCategories;