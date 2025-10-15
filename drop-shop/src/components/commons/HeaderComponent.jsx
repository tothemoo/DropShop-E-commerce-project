import React from "react";
import {
  Typography,
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Button,
  Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const HeaderComponent = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(90deg, #8380B6 0%, #111D4A 100%)",
        borderRadius: { xs: "20px", sm: "40px", md: "60px" },
      }}
    >
      <Toolbar>
        <img src="/logo.svg" alt="logo" width={"30px"} />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction={"row"} spacing={1}>
          <Button
            sx={{
              fontSize: { xs: "0.5rem", sm: "0.7rem", md: "0.8rem" },

              fontWeight: "900",
              color: "white",
            }}
          >
            HOME
          </Button>
          <Button
            sx={{
              fontSize: { xs: "0.5rem", sm: "0.7rem", md: "0.8rem" },

              fontWeight: "900",
              color: "white",
            }}
          >
            CATEGORY
          </Button>
          <Button
            sx={{
              fontSize: { xs: "0.5rem", sm: "0.7rem", md: "0.8rem" },

              fontWeight: "900",
              color: "white",
            }}
          >
            ABOUT
          </Button>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
