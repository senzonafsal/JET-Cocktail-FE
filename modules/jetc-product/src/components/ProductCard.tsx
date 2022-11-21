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
import {IProductCardData} from "../interfaces";
import {useProductContext} from 'jet-cocktail-product/src/productcontext';

const ProductCard = ({id, image, name, info, glass, tags, category, ingredients}: IProductCardData) => {
    const {setFavouriteItem, favouriteItem}: any = useProductContext();
    const isFavourite = favouriteItem.includes(id);

    const handleToggleFavourite = () => {
        if (!isFavourite) {
            const newFavouriteItem = [...favouriteItem, id]
            setFavouriteItem(newFavouriteItem);
        } else {
            const newFavouriteItem = favouriteItem.filter((existingId: string) => existingId !== id)
            setFavouriteItem(newFavouriteItem);
        }
    }
    return (
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
                            fontSize: "13px",
                        }} label={category || "Category"}></Chip>
                        <CardMedia
                            component="img"
                            width="194"
                            image={image}
                            alt={name}
                        />
                        <CardHeader title={name || "Header goes here"} sx={{
                            padding: "12px 16px 0 16px",
                        }}/>
                        <CardContent sx={{padding: "0 16px"}}>
                            <p>{`${glass} (${info})`}</p>
                            <Stack direction="row" spacing={1}
                                   sx={{flexWrap: "wrap", '& .MuiChip-root': {height: "23px", margin: "4px 2px !important", backgroundColor: "#eee", fontSize: "12px"}}}>
                                {tags ? (tags as any).map((item: string, index: number) => {
                                    return <Chip key={index} label={item}/>
                                }) : ''}
                                {ingredients ? ingredients.map((item: string, index: number) => {
                                    return <Chip key={index} label={item}/>
                                }) : ''}
                            </Stack>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={handleToggleFavourite}>
                            {isFavourite ? "Remove From Favourites" : "Add To Favourites"}
                        </Button>
                    </CardActions>
                </Card>
            </ThemeProvider>
        </div>
    )
};

export default ProductCard;
