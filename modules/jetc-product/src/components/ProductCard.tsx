import * as React from "react";
import "./../assets/scss/App.scss";
import {
    ThemeProvider,
    CardActionArea,
    Chip,
    CardMedia,
    CardHeader,
    CardContent,
    Stack,
    CardActions,
    Button, Card,
} from '@mui/material';
import {appTheme} from "../../../../shared/assets/themes/theme";

const cocktailImage = require("../assets/img/cocktail_sample.jpg");

const ProductCard = () => (
    <div className="jetc-product-product-card">
        <ThemeProvider theme={appTheme}>
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
                            <Chip label="Grand"  sx={{margin: "4px !important", backgroundColor: "#eee", fontSize: "12px"}}/>
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
        </ThemeProvider>
    </div>
);

export default ProductCard;
