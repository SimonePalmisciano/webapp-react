import { useContext } from "react"


const FavouritesContext = useContext(null);

function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (product) => {
        const alreadyExists = favourites.some((item) => item.id === product.id);
        if (!alreadyExists) {
            setFavourites([...favourites, product]);
        }
    };

    const removeFromFavourites = (productId) => {
        const updatedFavourites = favourites.filter((item) => item.id !== productId);
        setFavourites(updatedFavourites);
    };

    const isFavourite = (productId) => {
        return favourites.some((item) => item.id === productId);
    };

    const toggleFavourite = (product) => {
        if (isFavourite(product.id)) {
            removeFromFavourites(product.id);
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