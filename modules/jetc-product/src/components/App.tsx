import * as React from "react";
import "./../assets/scss/App.scss";
import ProductListing from "./ProductListing";
import ProductCard from "./ProductCard";
import {
    Box
} from '@mui/material';

const App = () => (
    <div>
        <Box
            sx={{
                width: "80%",
                padding: "20px 0",
                margin: "0 auto"
            }}
        >
            <Box
                sx={{
                    padding: "20px 0"
                }}
            >
                <Box
                    sx={{
                        width: "250px"
                    }}
                >
                    <div>Name: ProductCard</div>
                    <ProductCard/>
                </Box>
            </Box>
            <Box
                sx={{
                    padding: "20px 0"
                }}
            >
                <div>Name: ProductListing</div>
                <ProductListing/>
            </Box>
        </Box>
    </div>
);
export default App;