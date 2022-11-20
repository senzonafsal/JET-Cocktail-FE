import * as React from "react";
import "./../assets/scss/App.scss";
import {
    ThemeProvider, Paper, Box, Typography, FormGroup, FormControlLabel, Checkbox
} from '@mui/material';
import {appTheme} from 'jet-cocktail-shared';

// @ts-ignore
import {useSearchContext} from 'jet-cocktail-search/src/searchcontext';

const Filter = () => {
    const {cocktails, loading} = useSearchContext();
    if (loading) {
        return "Loading";
    }
    if (!cocktails || (cocktails && cocktails.length == 0)) {
        return (
            <h2 className="section-title">no cocktails found to filter</h2>
        );
    }
    const categories = [...new Set(cocktails.map(item => item.category.replace(/\w\S*/g, ((txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }))))];
    const ingredients = [...new Set(cocktails.flatMap(item => item.ingredients).map((text) => (text).replace(/\w\S*/g, ((txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }))))];
    const glasses = [...new Set(cocktails.map(item => item.glass.replace(/\w\S*/g, ((txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }))))];
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
                                {categories.map((item: any, index: number) => {
                                    return <FormControlLabel key={index} sx={{'& .MuiTypography-root': {fontSize: 14}}}
                                                             control={<Checkbox
                                                                 sx={{'& .MuiSvgIcon-root': {fontSize: 16}}}/>}
                                                             label={item}/>
                                })}
                            </FormGroup>
                            <Typography variant="h4" sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                margin: "20px 0 10px 0"
                            }}>Glass</Typography>
                            <FormGroup>
                                {glasses.map((item: any, index: number) => {
                                    return <FormControlLabel key={index} sx={{'& .MuiTypography-root': {fontSize: 14}}}
                                                             control={<Checkbox
                                                                 sx={{'& .MuiSvgIcon-root': {fontSize: 16}}}/>}
                                                             label={item}/>
                                })}
                            </FormGroup>
                            <Typography variant="h4" sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                margin: "20px 0 10px 0"
                            }}>Ingredients</Typography>
                            <FormGroup>
                                {ingredients.map((item: any, index: number) => {
                                    return <FormControlLabel key={index} sx={{'& .MuiTypography-root': {fontSize: 14}}}
                                                             control={<Checkbox
                                                                 sx={{'& .MuiSvgIcon-root': {fontSize: 16}}}/>}
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
