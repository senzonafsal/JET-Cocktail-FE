import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "jet-cocktail-shared";
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
        <GlobalContext.Provider value={{favouriteItem, setFavouriteItem} as any}>
            {children}
        </GlobalContext.Provider>
    );
};
const useProductContext = () => useContext(GlobalContext);

export {ProductProvider, useProductContext};