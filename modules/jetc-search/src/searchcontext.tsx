import React, {useContext, useEffect, useState, createContext} from "react";
import {AppContextProvider} from "jet-cocktail-shared";

const url = "http://localhost:3000/v1/search.php?s=";

// @ts-ignore
const SearchProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [filterTerm, setFilterTerm] = useState({});
    const [isFiltered, setIsFiltered] = useState(false);
    const [filteredCocktails, setFilteredCocktails] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState([]);
    const [glassFilter, setGlassFilter] = useState([]);
    const [ingredientsFilter, setIngredientsFilter] = useState([]);

    const createFilter = (newCocktails) => {
        setCategoryFilter([...new Set(newCocktails.map(item => item.category.replace(/\w\S*/g, ((txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }))))]);
        setIngredientsFilter([...new Set(newCocktails.flatMap(item => item.ingredients).map((text) => (text).replace(/\w\S*/g, ((txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }))))]);
        setGlassFilter([...new Set(newCocktails.map(item => item.glass.replace(/\w\S*/g, ((txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }))))]);
    };

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
                createFilter(newCocktails);
            } else {
                setCocktails([]);
            }
            setIsFiltered(false);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    const filterDrinks = () => {
        let filteredCocktails = [...cocktails];
        if (Object.keys(filterTerm).length > 0) {
            if (filterTerm["Category"]) {
                filteredCocktails = filteredCocktails.filter((item) => filterTerm["Category"].map((txt) => txt.toLowerCase()).includes(item.category.toLowerCase()));
            }
            if (filterTerm["Glass"]) {
                filteredCocktails = filteredCocktails.filter((item) => filterTerm["Glass"].map((txt) => txt.toLowerCase()).includes(item.glass.toLowerCase()));
            }
            if (filterTerm["Ingredients"]) {
                filteredCocktails = filteredCocktails.filter((item) => filterTerm["Ingredients"].map((txt) => txt.toLowerCase()).some(r => item.ingredients.map((txt) => txt.toLowerCase()).indexOf(r) >= 0));
            }
        }
        setIsFiltered(true);
        setFilteredCocktails(filteredCocktails);
    };
    useEffect(() => {
        fetchDrinks().then(false);
    }, [searchTerm]);
    useEffect(() => {
        filterDrinks();
    }, [filterTerm]);
    return (
        <AppContextProvider.Provider
            value={{
                loading,
                searchTerm,
                cocktails,
                setSearchTerm,
                filterTerm,
                setFilterTerm,
                filteredCocktails, setFilteredCocktails,
                isFiltered,
                setIsFiltered,
                categoryFilter,
                setCategoryFilter,
                glassFilter,
                setGlassFilter,
                ingredientsFilter,
                setIngredientsFilter
            }}>
            {children}
        </AppContextProvider.Provider>
    );
};
const useSearchContext = () => useContext(AppContextProvider);

export {AppContextProvider, SearchProvider, useSearchContext};