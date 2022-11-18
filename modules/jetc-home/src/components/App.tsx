import * as React from "react";
import "./../assets/scss/App.scss";
import {
    ThemeProvider,
    Box,
    Container,
    Typography,
    FormControl,
    InputBase,
    SvgIcon,
    Button,
    styled,
    Paper,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    CardHeader,
    CardActionArea,
    Badge,
    Chip,
    Stack
} from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {appTheme} from "../assets/themes/theme";

const reactLogo = require("../assets/img/jet_logo.png");
const headerBg1 = require("../assets/img/Header_BG1.png");
const headerBg2 = require("../assets/img/Header_BG2.png");
const cocktailImage = require("../assets/img/cocktail_sample.jpg");

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
                                <a href="/"><img src={reactLogo.default} className="logo" width="300"/></a>
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
                                    }}>
                                    </InputBase>
                                </FormControl>
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
                                <Typography variant="p" sx={{
                                    fontSize: "13px",
                                    color: "#999"
                                }}>your all-time favourites are here!!</Typography>
                            </Box>
                            <Box sx={{marginTop: "20px"}}>
                                <Masonry columns={4} spacing={2}>
                                    <Card sx={{minWidth: "274px"}}>
                                        <CardActionArea>
                                            <Chip sx={{
                                                position: "absolute",
                                                top: "12px",
                                                left: "12px",
                                                zIndex: "999",
                                                background: "rgb(241,134,46)",
                                                color: "white",
                                                fontSize: "13px"
                                            }} label={"Alcoholic"}></Chip>
                                            <CardMedia
                                                component="img"
                                                width="194"
                                                image={cocktailImage.default}
                                                alt="Cocktail Sample"
                                            />
                                            <CardHeader title="Cocktail Sample" sx={{
                                                padding: "12px 16px 16px 16px"
                                            }}/>
                                            <CardContent sx={{padding: "0 16px"}}>
                                                <Stack direction="row" spacing={1} sx={{flexWrap: "wrap"}}>
                                                    <Chip label="Gin" sx={{margin: "4px !important", backgroundColor: "#eee", fontSize: "12px"}}/>
                                                    <Chip label="Grand Marnier"  sx={{margin: "4px !important", backgroundColor: "#eee", fontSize: "12px"}}/>
                                                    <Chip label="Lemon Juice"  sx={{margin: "4px !important", backgroundColor: "#eee", fontSize: "12px"}}/>
                                                    <Chip label="Grenadine"  sx={{margin: "4px !important", backgroundColor: "#eee", fontSize: "12px"}}/>
                                                </Stack>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Add to Favourites
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Masonry>
                            </Box>
                        </Box>
                    </Container>
                </section>
            </div>
        </ThemeProvider>
    )
;

export default App;
