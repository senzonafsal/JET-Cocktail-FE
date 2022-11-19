import * as React from "react";
import "./../assets/scss/App.scss";
import ProductListing from "./ProductListing";
import ProductCard from "./ProductCard";
import {
    ThemeProvider,
    Box
} from '@mui/material';
import {appTheme} from "../../../../shared/assets/themes/theme";

const App = () => (
    <div className="jetc-product">
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
    </div>
);
export default App;