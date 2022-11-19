import * as React from "react";
import "./../assets/scss/App.scss";
import {
    FormControl,
    InputBase,
    ThemeProvider,
    SvgIcon,
    Button,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {appTheme} from "jetc-home/src/assets/themes/theme";

const SearchField = () => (
    <div className="jetc-search">
        <ThemeProvider theme={appTheme}>
            <FormControl fullWidth={true} sx={{
                margin: "40px auto 20px auto",
                maxWidth: 600,
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 16px rgb(43 52 69 / 10%)"
            }}>
                <InputBase fullWidth={true} placeholder="Search your cocktail here.." size="small"
                           startAdornment={(
                               <SvgIcon fontSize="small" component={SearchOutlinedIcon}></SvgIcon>
                           )} endAdornment={(
                    <Button variant="contained" size="large" sx={{
                        color: "#fff",
                        textTransform: "none",
                        height: "50px"
                    }}>Search</Button>
                )} sx={{
                    background: "#fff",
                    color: "#4B566B",
                    paddingLeft: "14px",
                    height: "50px"
                }}/>
            </FormControl>
        </ThemeProvider>
    </div>
);

export default SearchField;
