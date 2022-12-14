import * as React from "react";
import "./../assets/scss/App.scss";
import SearchField from "./SearchField";
import Filter from "./Filter";
import {
    ThemeProvider,
    Box,
} from '@mui/material';
import {appTheme} from 'jet-cocktail-shared';
import {SearchProvider} from 'jet-cocktail-search/src/searchcontext';

const App = () => (
    <div className="jetc-search" data-testid="jetc-search">
        <SearchProvider>
            <ThemeProvider theme={appTheme}>
                <Box
                    sx={{
                        width: "80%",
                        padding: "20px 0",
                        margin: "0 auto",
                    }}
                >
                    <Box
                        sx={{
                            padding: "20px 0",
                        }}
                    >
                        <div>Name: Search</div>
                        <SearchField/>
                    </Box>
                    <Box
                        sx={{
                            padding: "20px 0",
                        }}
                    >
                        <div>Name: Filter</div>
                        <Filter/>
                    </Box>
                </Box>
            </ThemeProvider>
        </SearchProvider>
    </div>
);
export default App;