import React, {useContext, useEffect, useState, createContext} from "react";
import {AppContextProvider} from "jet-cocktail-shared";

const url = "http://localhost:3000/v1/search.php?s=";

// @ts-ignore
const SearchProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}`, {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            const {drinks} = data;
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strTags,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                        strCategory
                    } = item;
                    const ingredientWithMeasurements = Object.keys(item).filter(key => key.indexOf("strIngredient") != -1).reduce((obj, key) => {
                        if (item[key]) {
                            const measurement = (item[`strMeasure${key.match(/\d/g)}`]);
                            obj[item[key]] = measurement ? measurement.trim() : measurement;
                        }
                        return obj;
                    }, {});
                    const tags = strTags ? strTags.split(",") : strTags;
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                        tags,
                        category: strCategory,
                        ingredientWithMeasurements,
                        ingredients: Object.keys(ingredientWithMeasurements)
                    };
                });
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchDrinks().then(() => {
        });
    }, [searchTerm]);
    return (
        <AppContextProvider.Provider value={{loading, searchTerm, cocktails, setSearchTerm}}>
            {children}
        </AppContextProvider.Provider>
    );
};
const useSearchContext = () => useContext(AppContextProvider);

export {AppContextProvider, SearchProvider, useSearchContext};