import React, {useContext, useEffect, useState} from "react";
import {AppContextProvider} from "jet-cocktail-shared";
import {IProductData, IProductDataList, IProductCardData, IProductCardDataList, Props} from "./interfaces";
import {TFilterTerm} from "./types";

const url = "http://localhost:3000/v1/search.php?s=";

const SearchProvider = ({children}: Props) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [cocktails, setCocktails] = useState<any[]>([]);
    const [filterTerm, setFilterTerm] = useState<TFilterTerm>({});
    const [isFiltered, setIsFiltered] = useState<boolean>(false);
    const [filteredCocktails, setFilteredCocktails] = useState<any[]>([]);
    const [categoryFilter, setCategoryFilter] = useState<any[]>([]);
    const [glassFilter, setGlassFilter] = useState<any[]>([]);
    const [ingredientsFilter, setIngredientsFilter] = useState<any[]>([]);

    const createFilter = (newCocktails: IProductCardDataList) => {
        setCategoryFilter([...new Set(newCocktails.map(item => item.category.replace(/\w\S*/g, ((txt: string) => {
            return txt.charAt(0)
            .toUpperCase() + txt.substring(1)
            .toLowerCase();
        })))),
        ]);
        setIngredientsFilter([...new Set(newCocktails.flatMap(item => item.ingredients)
        .map((text) => (text).replace(/\w\S*/g, ((txt: string) => {
            return txt.charAt(0)
            .toUpperCase() + txt.substring(1)
            .toLowerCase();
        })))),
        ]);
        setGlassFilter([...new Set(newCocktails.map(item => item.glass.replace(/\w\S*/g, ((txt: string) => {
            return txt.charAt(0)
            .toUpperCase() + txt.substring(1)
            .toLowerCase();
        })))),
        ]);
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
            const {drinks}: IProductDataList = data;
            if (drinks) {
                const newCocktails = drinks.map((item: IProductData) => {
                    const {
                        idDrink,
                        strDrink,
                        strTags,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                        strCategory,
                    } = item;
                    const ingredientWithMeasurements = Object.keys(item)
                    .filter(key => key.indexOf("strIngredient") != -1)
                    .reduce((obj: any, key: string) => {
                        const itemVal = item[key as keyof IProductData];
                        if (itemVal) {
                            const measurement = (item[`strMeasure${key.match(/\d/g)}` as keyof IProductData]);
                            obj[itemVal as string] = measurement ? (measurement as string).trim() : measurement;
                        }
                        return obj;
                    }, {});
                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                        tags: strTags ? (strTags as any).split(",") : strTags,
                        category: strCategory,
                        ingredientWithMeasurements,
                        ingredients: Object.keys(ingredientWithMeasurements),
                    } as IProductCardData;
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
                filteredCocktails = filteredCocktails.filter((item) => filterTerm["Category"]?.map((txt: string) => txt.toLowerCase())
                .includes(item.category.toLowerCase()));
            }
            if (filterTerm["Glass"]) {
                filteredCocktails = filteredCocktails.filter((item) => filterTerm["Glass"]?.map((txt: string) => txt.toLowerCase())
                .includes(item.glass.toLowerCase()));
            }
            if (filterTerm["Ingredients"]) {
                filteredCocktails = filteredCocktails.filter((item) => filterTerm["Ingredients"]?.map((txt: string) => txt.toLowerCase())
                .some((r: string) => item.ingredients.map((txt: string) => txt.toLowerCase())
                .indexOf(r) >= 0));
            }
        }
        setIsFiltered(true);
        setFilteredCocktails(filteredCocktails);
    };
    useEffect(() => {
        fetchDrinks()
        .then();
    }, [searchTerm]);
    useEffect(() => {
        filterDrinks();
    }, [filterTerm]);
    return (
        <AppContextProvider.Provider value={{
            loading,
            searchTerm,
            cocktails,
            setSearchTerm,
            filterTerm,
            setFilterTerm,
            filteredCocktails,
            setFilteredCocktails,
            isFiltered,
            setIsFiltered,
            categoryFilter,
            setCategoryFilter,
            glassFilter,
            setGlassFilter,
            ingredientsFilter,
            setIngredientsFilter,
        } as any}>
            {children}
        </AppContextProvider.Provider>
    );
};
const useSearchContext = () => useContext(AppContextProvider);

export {AppContextProvider, SearchProvider, useSearchContext};