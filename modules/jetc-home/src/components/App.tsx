import * as React from "react";
import "./../assets/scss/App.scss";
import {
    ThemeProvider,
    Box,
    Container,
    Typography,
} from '@mui/material';
import {appTheme} from "../../../../shared/assets/themes/theme";

const reactLogo = require("../assets/img/jet_logo.png");
const headerBg1 = require("../assets/img/Header_BG1.png");
const headerBg2 = require("../assets/img/Header_BG2.png");

// @ts-ignore
const SearchField = React.lazy(() => import("jetc-search/SearchField"));
// @ts-ignore
const Filter = React.lazy(() => import("jetc-search/Filter"));
// @ts-ignore
const ProductListing = React.lazy(() => import("jetc-product/ProductListing"));

const App = () => (
        <ThemeProvider theme={appTheme}>
            <div className="app">
                <header>
                    <Box
                        sx={{
                            backgroundColor: 'white'
                        }}
                    >
                        <Container maxWidth="xl">
                            <Box>
                                <a href="/"><img src={reactLogo.default} className="logo" width="300" alt="logo"/></a>
                            </Box>
                        </Container>
                    </Box>
                </header>
                <section>
                    <Box
                        sx={{
                            width: "100%",
                            height: 430,
                            padding: "20px 0",
                            backgroundColor: "#F6F9FC",
                            backgroundSize: "30%,30%",
                            backgroundPosition: "left bottom,right bottom",
                            backgroundRepeat: "no-repeat,no-repeat",
                            transition: "all .3s",
                            backgroundImage: `url(${headerBg1.default}),url(${headerBg2.default})`
                        }}
                    >
                        <Container maxWidth="xl">
                            <Box
                                sx={{
                                    width: "580px",
                                    margin: "120px auto 0 auto",
                                    textAlign: "center"
                                }}
                            >
                                <Typography variant="h1" sx={{
                                    fontSize: "42px",
                                    textAlign: "center",
                                    lineHeight: 1.3,
                                    fontWeight: 600
                                }}>Your favourite cocktails from all over the world.</Typography>
                                <SearchField style="margin: 40px auto 20px auto;"/>
                            </Box>
                        </Container>
                    </Box>
                </section>
                <section>
                    <Container maxWidth="xl" sx={{
                        margin: "40px auto",
                        display: "flex",
                        flexWrap: "wrap"
                    }}>
                        <Filter/>
                        <Box
                            sx={{
                                minHeight: "calc(100vh - 80px)",
                                marginLeft: "1.75rem",
                                width: "calc(100% - 2em - 40px - 280px)",
                                padding: "20px",
                            }}
                        >
                            <Box>
                                <Typography variant="h2" sx={{
                                    fontSize: "25px",
                                    fontWeight: 600,
                                }}>Cocktails</Typography>
                                <Typography sx={{
                                    fontSize: "13px",
                                    color: "#999"
                                }}>your all-time favourites are here!!</Typography>
                            </Box>
                            <Box sx={{marginTop: "20px"}}>
                                <ProductListing/>
                            </Box>
                        </Box>
                    </Container>
                </section>
            </div>
        </ThemeProvider>
    )
;

export default App;
