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
import {appTheme} from 'jet-cocktail-shared';

const cocktailImage = require("../assets/img/cocktail_sample.jpg");

const ProductCard = ({image, name, info, glass, tags, category, ingredients}) => (
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
                    }} label={category || "Category"}></Chip>
                    <CardMedia
                        component="img"
                        width="194"
                        image={image || cocktailImage.default}
                        alt={name}
                    />
                    <CardHeader title={name || "Header goes here"} sx={{
                        padding: "12px 16px 0 16px"
                    }}/>
                    <CardContent sx={{padding: "0 16px"}}>
                        <p>{`${glass} (${info})`}</p>
                        <Stack direction="row" spacing={1} sx={{flexWrap: "wrap", '& .MuiChip-root': {fontSize: 11, height: "23px", margin: "4px 2px !important", backgroundColor: "#eee", fontSize: "12px"}}}>
                            {tags ? tags.map((item: string, index: number) => {
                                return <Chip key={index} label={item}/>
                            }) : ''}
                            {ingredients ? ingredients.map((item: string, index: number) => {
                                return <Chip key={index} label={item}/>
                            }) : ''}
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
