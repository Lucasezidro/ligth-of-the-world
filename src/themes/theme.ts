import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

export const theme = extendTheme({

    colors: {
        gray:{
            "900": "#181b23",
            "800": "#1f2029",
            "700": "#353646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797d9a",
            "300": "#9699b0",
            "200": "#b3b5c6",
            "100": "#d1d2dc",
            "50": "#eeeef2",
            "white": "#fff",

            "250": "#95A3A4",
        },

        yellow: {
            "900": "#ca8a04",
            "800": "#ffb703",
            "700": "#ffc52c",
            "600": "#eab308",
            "500": "#facc15",
            "400": "#facb4b", 
            "300": "#fde047",
            "200": "#F3E37C",
            "100": "#fde68a",
            "50": "#fef08a",

            "450": "#FAF33E",
        },

        purple: {
            "900": "#581c87",
            "800": "#6b21a8",
            "700": "#7e22ce",
            "600": "#9333ea",
            "500": "#a855f7",
            "400": "#c084fc", 
            "300": "#d8b4fe",
            "200": "#e9d5ff",
            "100": "#f3e8ff",
            "50": "#fdf4ff",

            "650": "#5448C8"
        },

        pink: {
            "200": "#F991CC"
        },

        green: {
            "600": "#119DA4",
            "500": "#00FDDC",
            "300": "#03B5AA"
        },

        blue: {
            "500": "#3185FC",
            "400": "#3C91E6"
        }


    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
})

export const themeConfig = extendTheme({ config })