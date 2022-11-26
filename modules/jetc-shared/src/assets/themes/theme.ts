import {createTheme} from "@mui/material/styles";

export const appTheme = createTheme({
    palette: {
        primary: {
            main: "rgb(241,134,46)",
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            "Helvetica",
            "Arial",
            "sans-serif",
        ].join(','),
    },
});