import {ReactNode} from "react";

export interface IProductData {
    "idDrink": string;
    "strDrink": string;
    "strTags": string[];
    "strDrinkThumb": string;
    "strAlcoholic": string;
    "strGlass": string;
    "strCategory": string;
}

export interface IProductDataList {
    "drinks": Array<IProductData>;
}

export interface IProductCardData {
    "id": string;
    "name": string;
    "image": string;
    "info": string;
    "glass": string;
    "tags": string;
    "category": string;
    ingredientWithMeasurements?: any[];
    ingredients: any[],
}

export interface IProductCardDataList extends Array<IProductCardData> {
}

export interface Props {
    children?: ReactNode
}