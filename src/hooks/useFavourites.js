import { useContext } from "react";
import { FavouritesContext } from "../contexts/FavouritesContext";

function useFavourites(){
    const favouriteValues = useContext(FavouritesContext);
    if(!favouriteValues) {
        throw new Error("Hai dimenticato di mettere il CategoryProvider");
    }

    return favouriteValues;
}

export default useFavourites