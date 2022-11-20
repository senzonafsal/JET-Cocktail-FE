import * as React from "react";
import "./../assets/scss/App.scss";
import {Button, FormControl, InputBase, SvgIcon, ThemeProvider,} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {appTheme} from 'jet-cocktail-shared';

import {useSearchContext} from 'jet-cocktail-search/src/searchcontext';

const SearchField = () => {
    const {setSearchTerm} = useSearchContext();
    const searchValue = React.useRef("");

    function searchCocktail() {
        const inputValue = searchValue.current;
        setSearchTerm(inputValue.value);
    }

    function keyDownHandler(e) {
        if (e.key === 'Enter') {
            searchCocktail();
        }
    }

    React.useEffect(() => {
        searchValue.current.focus();
    }, []);
    return (
        <div className="jetc-search-search-field">
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
                        }} onClick={searchCocktail}>Search</Button>
                    )} sx={{
                        background: "#fff",
                        color: "#4B566B",
                        paddingLeft: "14px",
                        height: "50px"
                    }} inputRef={searchValue} onKeyDown={keyDownHandler}/>
                </FormControl>
            </ThemeProvider>
        </div>
    )
};

export default SearchField;
