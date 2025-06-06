// import React from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import mypic from "../../assets/mypic.png"; // Correct path

const Home = () => {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        backgroundColor: "#e5e7eb", // Tailwind's bg-gray-200
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4}>
            <Social />
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                width: 200,
                height: 200,
                mx: "auto",
                borderRadius: "50%",
                backgroundImage: `url(${mypic})`, // Correct usage
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Data />
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <ScrollDown />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
