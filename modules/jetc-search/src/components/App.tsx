import * as React from "react";
import "./../assets/scss/App.scss";
import SearchField from "./SearchField";
import Filter from "./Filter";
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
                <div>Name: Search</div>
                <SearchField/>
            </Box>
            <Box
                sx={{
                    padding: "20px 0"
                }}
            >
                <div>Name: Filter</div>
                <Filter/>
            </Box>
        </Box>
    </div>
);
export default App;