import React, {useContext, useEffect, useState} from "react";
import {AppContextProvider} from "jet-cocktail-shared";
import {Props} from "./interfaces";

const ProductProvider = ({children}: Props) => {
    const [favouriteItem, setFavouriteItem] = useState(() => {
        const favourites = localStorage.getItem('favourites')
        return favourites ? JSON.parse(favourites) : []
    });

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favouriteItem))
    }, [favouriteItem]);

    return (
        <AppContextProvider.Provider value={{favouriteItem, setFavouriteItem} as any}>
            {children}
        </AppContextProvider.Provider>
    );
};
const useProductContext = () => useContext(AppContextProvider);

export {AppContextProvider, ProductProvider, useProductContext};