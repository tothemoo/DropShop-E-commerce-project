import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Box, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),

    h1: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 700,
    },

    h2: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 600,
    },

    h3: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontWeight: 600,
    },

    h4: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },

    h5: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },

    h6: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Box sx={{ px: "120px", mt: "30px" }}>
        <App />
      </Box>
    </ThemeProvider>
  </StrictMode>
);
