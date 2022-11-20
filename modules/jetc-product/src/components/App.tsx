import * as React from "react";
import "./../assets/scss/App.scss";
import ProductListing from "./ProductListing";
import ProductCard from "./ProductCard";
import {
    ThemeProvider,
    Box
} from '@mui/material';
import {appTheme} from 'jet-cocktail-shared';
import {SearchProvider} from 'jet-cocktail-search/src/searchcontext';

const App = () => (
    <div className="jetc-product">
        <SearchProvider>
            <ThemeProvider theme={appTheme}>
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
            </ThemeProvider>
        </SearchProvider>
    </div>
);
export default App;