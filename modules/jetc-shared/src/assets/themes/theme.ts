import {createTheme} from "@mui/material/styles";
import "@fontsource/roboto";

export const appTheme = createTheme({
    palette: {
        primary: {
            main: "rgb(241,134,46)",
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
        ].join(','),
    },
});