import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";

const ApplyLoan = () => {
  return (
    <Container>
      <Box
        flexDirection="row"
        justifyContent={"space-around"}
        alignItems={"center"}
        sx={{
          height: 200,
          width: "100%",
          backgroundColor: "#10162C",
          marginTop: "20px",
          display: "flex",
        }}
      >
        <Typography variant="h4" color={"white"} sx={{ fontWeight: "900" }} fontFamily="Inter, sans-serif">
          Apply For A Personal Loan <br />
          Online With{" "}
          <span style={{ color: "#5AB56B" }}>
            Minimum <br />
            Documentation
          </span>
        </Typography>
        <Button variant="contained" color="success" sx={{ color: "white", marginLeft: "100px" }}>
          Apply Now
        </Button>
        <img src="https://credmudra.com/assets/images/ple_banner_img.webp" height={"100%"} alt="discover" />
      </Box>
    </Container>
  );
};

export default ApplyLoan;
