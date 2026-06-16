import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (product) => {
        const alreadyExists = favourites.some(
            (item) => item.slug === product.slug
        );

        if (!alreadyExists) {
            setFavourites([...favourites, product]);
        }
    };

    const removeFromFavourites = (productSlug) => {
        const updatedFavourites = favourites.filter(
            (item) => item.slug !== productSlug
        );
        setFavourites(updatedFavourites);
    };

    const isFavourite = (productSlug) => {
        return favourites.some((item) => item.slug === productSlug);
    };

    const toggleFavourite = (product) => {
        if (isFavourite(product.slug)) {
            removeFromFavourites(product.slug);
        } else {
            addToFavourites(product);
        }
    };

    return (
        <FavouritesContext
            value={{
                favourites,
                addToFavourites,
                removeFromFavourites,
                isFavourite,
                toggleFavourite,
            }}
        >
            {children}
        </FavouritesContext>
    );
}

export function useFavourites() {
    return useContext(FavouritesContext);
}

export {
    FavouritesContext,
    FavouritesProvider
}