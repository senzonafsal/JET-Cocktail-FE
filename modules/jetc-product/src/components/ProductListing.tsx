import * as React from "react";
import "./../assets/scss/App.scss";
import {
    ThemeProvider,
} from '@mui/material';
import {appTheme} from "../../../../shared/assets/themes/theme";
import Masonry from "@mui/lab/Masonry";
import ProductCard from "./ProductCard";

const ProductListing = () => (
    <div className="jetc-product-product-listing">
        <ThemeProvider theme={appTheme}>
            <Masonry columns={4} spacing={2}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Masonry>
        </ThemeProvider>
    </div>
);

export default ProductListing;
