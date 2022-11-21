import * as React from "react";
import "./../assets/scss/App.scss";
import {
    ThemeProvider,
} from '@mui/material';
import {appTheme} from 'jet-cocktail-shared';
import Masonry from "@mui/lab/Masonry";
import ProductCard from "./ProductCard";

// @ts-ignore
import {useSearchContext} from 'jet-cocktail-search/src/searchcontext';

const ProductListing = () => {
    const {cocktails, loading, isFiltered, filteredCocktails}: any = useSearchContext();
    const cocktailDrinks = isFiltered ? [...filteredCocktails] : [...cocktails];
    if (loading) {
        return <div>Loading</div>;
    }
    if (!cocktailDrinks || (cocktailDrinks && cocktailDrinks.length == 0)) {
        return (
            <h2 className="section-title">no cocktails matched your searches</h2>
        );
    }
    return (
        <div className="jetc-product-product-listing">
            <ThemeProvider theme={appTheme}>
                <Masonry columns={4} spacing={2}>
                    {cocktailDrinks.map((item: any) => {
                        return <ProductCard key={item.id} {...item}/>
                    })}
                </Masonry>
            </ThemeProvider>
        </div>
    )
};

export default ProductListing;
