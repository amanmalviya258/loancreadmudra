import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Link,
  Stack,
  Container,
} from "@mui/material";
import CredmudraLogo from "../assets/credmudra_logo.png";

const NavBar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          boxShadow: "rgba(149, 157, 165, 0.2)",
          backgroundColor: "white",
        }}
      >
        <Container>
          <Toolbar>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <img src={CredmudraLogo} />

              <Stack direction="row" spacing={4}>
                <Link underline="none" color="black" fontWeight="500">
                  Business Loan
                </Link>
                <Link underline="none" color="black" fontWeight="500">
                  Personal Loan
                </Link>
                <Link underline="none" color="black" fontWeight="500">
                  Blogs
                </Link>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
