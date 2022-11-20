import * as React from "react";
import "./../assets/scss/App.scss";
import {Box, Checkbox, FormControlLabel, FormGroup, Paper, ThemeProvider, Typography} from '@mui/material';
import {appTheme} from 'jet-cocktail-shared';

// @ts-ignore
import {useSearchContext} from 'jet-cocktail-search/src/searchcontext';

const Filter = () => {
    enum FilterTypes {
        "Category",
        'Glass',
        'Ingredients'
    }

    const {
        loading,
        filterTerm,
        setFilterTerm,
        ingredientsFilter,
        categoryFilter,
        glassFilter
    } = useSearchContext();
    let newFilter = {...filterTerm};
    if (loading) {
        return "Loading";
    }

    function filterHandler(value: string, isChecked: boolean, type: FilterTypes) {
        if (newFilter[FilterTypes[type]]) {
            if (isChecked) {
                newFilter[FilterTypes[type]].push(value)
            } else {
                newFilter[FilterTypes[type]] = newFilter[FilterTypes[type]].filter((val: string) => (val !== value));
                if (newFilter[FilterTypes[type]].length === 0) {
                    delete newFilter[FilterTypes[type]];
                }
            }
        } else {
            newFilter[FilterTypes[type]] = [value]
        }
        setFilterTerm(newFilter);
    }

    function categoryFilterHandler(e: any) {
        const {checked, value} = e.target;
        filterHandler(value, checked, FilterTypes.Category);
    }

    function glassFilterHandler(e: any) {
        const {checked, value} = e.target;
        filterHandler(value, checked, FilterTypes.Glass);
    }

    function ingredientsFilterHandler(e: any) {
        const {checked, value} = e.target;
        filterHandler(value, checked, FilterTypes.Ingredients);
    }

    return (
        <div className="jetc-search-filter">
            <ThemeProvider theme={appTheme}>
                <Box
                    sx={{
                        width: "280px",
                        minWidth: "280px",
                        minHeight: "calc(100vh - 80px)",
                    }}
                >
                    <Paper elevation={0} sx={{
                        borderRadius: "8px",
                        padding: "20px",
                        height: "calc(100% - 40px)"
                    }}>
                        <Box>
                            <Typography variant="h3" sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                borderBottom: "2px solid #F8C7CF"
                            }}>Advanced Filter</Typography>
                            <Typography variant="h4" sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                margin: "20px 0 10px 0"
                            }}>Category</Typography>
                            <FormGroup>
                                {categoryFilter.map((item: any, index: number) => {
                                    return <FormControlLabel key={index} sx={{'& .MuiTypography-root': {fontSize: 14}}}
                                                             control={<Checkbox value={item} key={item}
                                                                                sx={{'& .MuiSvgIcon-root': {fontSize: 16}}}
                                                                                onChange={categoryFilterHandler}/>}
                                                             label={item}/>
                                })}
                            </FormGroup>
                            <Typography variant="h4" sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                margin: "20px 0 10px 0"
                            }}>Glass</Typography>
                            <FormGroup>
                                {glassFilter.map((item: any, index: number) => {
                                    return <FormControlLabel key={index} sx={{'& .MuiTypography-root': {fontSize: 14}}}
                                                             control={<Checkbox value={item} key={item}
                                                                                sx={{'& .MuiSvgIcon-root': {fontSize: 16}}}
                                                                                onChange={glassFilterHandler}/>}
                                                             label={item}/>
                                })}
                            </FormGroup>
                            <Typography variant="h4" sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                margin: "20px 0 10px 0"
                            }}>Ingredients</Typography>
                            <FormGroup>
                                {ingredientsFilter.map((item: any, index: number) => {
                                    return <FormControlLabel key={index} sx={{'& .MuiTypography-root': {fontSize: 14}}}
                                                             control={<Checkbox value={item} key={item}
                                                                                sx={{'& .MuiSvgIcon-root': {fontSize: 16}}}
                                                                                onChange={ingredientsFilterHandler}/>}
                                                             label={item}/>
                                })}
                            </FormGroup>
                        </Box>
                    </Paper>
                </Box>
            </ThemeProvider>
        </div>
    )
};

export default Filter;
