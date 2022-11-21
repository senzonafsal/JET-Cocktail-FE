import {ReactNode} from "react";

export interface IProductCardData {
    "id": string;
    "name": string;
    "image": string;
    "info": string;
    "glass": string;
    "tags": string[];
    "category": string;
    ingredientWithMeasurements?: any[];
    ingredients: any[],
}

export interface Props {
    children?: ReactNode
}
