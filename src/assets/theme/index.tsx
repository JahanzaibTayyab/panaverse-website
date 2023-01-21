"use client";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
};

const theme = extendTheme({
  colors: {
    yellow: {
      50: "#fff7da",
      100: "#ffe7ad",
      200: "#ffd87d",
      300: "#ffc84b",
      400: "#ffb81a",
      500: "#e69e00",
      600: "#b37b00",
      700: "#815800",
      800: "#4e3500",
      900: "#1e1100",
    },
    blue: {
      "50": "#E8EFFD",
      "100": "#BDD1F9",
      "200": "#93B4F6",
      "300": "#6997F2",
      "400": "#3F79EE",
      "500": "#145CEB",
      "600": "#104ABC",
      "700": "#0C378D",
      "800": "#08255E",
      "900": "#04122F",
    },
    red: {
      "50": "#FDE8EB",
      "100": "#F9BEC7",
      "200": "#F594A2",
      "300": "#F06A7E",
      "400": "#EC415A",
      "500": "#E81735",
      "600": "#BA122B",
      "700": "#8B0E20",
      "800": "#5D0915",
      "900": "#2E050B",
    },
    customBlack: {
      50: "#f1f2f3",
      100: "#d8d8d8",
      200: "#bebebe",
      300: "#a4a4a4",
      400: "#898a8a",
      500: "#6f7071",
      600: "#575757",
      700: "#3e3e3e",
      800: "#252525",
      900: "#0c0c0e",
    },
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Nunito', sans-serif`,
  },
  config,
});
export default theme;
