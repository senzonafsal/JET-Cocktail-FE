import * as React from "react";
import "./../assets/scss/App.scss";
import {
    ThemeProvider, Paper, Box, Typography,
} from '@mui/material';
import {appTheme} from "../../../../shared/assets/themes/theme";

const Filter = () => (
    <div className="jetc-search-filter">
        <ThemeProvider theme={appTheme}>
            <Box
                sx={{
                    width: "280px",
                    minWidth: "280px",
                    height: "calc(100vh - 80px)",
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
                        }}>Cocktail Type</Typography>
                    </Box>
                </Paper>
            </Box>
        </ThemeProvider>
    </div>
);

export default Filter;
