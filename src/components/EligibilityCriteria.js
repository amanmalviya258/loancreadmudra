import React from "react";
import { Typography, Container, ListItem, Box } from "@mui/material";
const EligibilityCriteria = () => {
  return (
    <div>
      <Container>
        <Typography variant="h4" sx={{ fontWeight: "900" }} fontFamily="Inter, sans-serif" marginTop={3} marginBottom={3}>
          Eligibility Criteria For Salaried Persons
        </Typography>
        <Typography variant="body1" fontFamily="Inter, sans-serif" marginTop={3} marginBottom={3}>
          If you are a salaried individual, you will need to fulfil some simple eligibility criteria to get an instant approval for your credit application. These are as follows:
        </Typography>
        <Box display='flex' alignItems="center">
            <div style={{width: '10px', height: '10px', backgroundColor: '#5ab56b', borderRadius: '100%'}}></div>
            <ListItem>First Item</ListItem>
        </Box>
        


      </Container>
    </div>
  );
};

export default EligibilityCriteria;
