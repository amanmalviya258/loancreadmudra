import { Typography, Container, Box } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

const Ple_PageContent = () => {
  return (
    <>
      <Container>
        <Box display="flex" marginTop="10px" justifyContent={"space-between"}>
          <div>
            <Typography variant="h4" sx={{ fontWeight: "900" }} fontFamily="Inter, sans-serif" marginTop={3} marginBottom={3}>
              Check Your Personal Loan Eligibility To Get a <br /> Credit Of Up To Rs.20 Lakh From Credmudra!
            </Typography>
            <Typography variant="body1" fontFamily="Inter, sans-serif" marginTop={3} marginBottom={3}>
              A personal loan is one of the choicest go-to options for individuals with an immediate requirement of funds.
              <br /> The main reason behind its popularity is the flexibility of loan customization, easy application process, and <br /> instant fund disbursement. In addition, the personal loan
              eligibility criteria are quite lenient, ensuring you can <br /> get assured and instant credit approval on applying correctly.
            </Typography>
            <Typography variant="body1" fontFamily="Inter, sans-serif" marginTop={3} marginBottom={3}>
              Before proceeding with the credit application process, you should note that the eligibility requirements for <br /> salaried and self-employed people are somewhat different. Let’s dive
              deep to get an explicit idea regarding.
            </Typography>
          </div>

          <div  >
            <Box
              display="flex"
              sx={{
                backgroundColor: "#10162C",
                height: 50,
                width: 270,
                justifyContent: "center",
                alignItems: "center",
                marginTop: "49px",
              }}
            >
              <Typography color="white" fontWeight="600" marginRight="10px">
                Personal Loan Pages
              </Typography>
            </Box>
            <Box>
              <List sx={{ width: 250, bgcolor: "background.paper" }}>
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Personal Loan Interest Rate" primaryTypographyProps={{ color: "green" }}/>
                </ListItem>
                <Divider />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Personal Loan Eligibility" primaryTypographyProps={{ color: "green" }}/>
                </ListItem>
                <Divider />
                <ListItem alignItems="flex-start">
                  <ListItemText primary="Personal Loan EMI Calculator" primaryTypographyProps={{ color: "green" }}/>
                </ListItem>
              </List>
            </Box>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Ple_PageContent;
