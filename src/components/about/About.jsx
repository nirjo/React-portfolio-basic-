
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import AboutImg from "../../assets/mypic.png";
import Info from "./Info";
import CV from "../../assets/nirmalrajresume.pdf";

const About = () => {
  return (
    <Box component="section" id="about" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
           color="primary"
          gutterBottom
        >
          About Me
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          My Introduction
        </Typography>

        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Grid item xs={12} md={5}>
            <Avatar
              src={AboutImg}
              alt="Profile"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: 2,
              }}
              variant="rounded"
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Info />

              <Typography variant="body1" color="text.primary">
                I’m a Frontend Developer, crafting user-friendly web pages
                with a focus on UI/UX. With years of experience, I have
                successfully delivered projects that bring joy to my clients.
              </Typography>

              <Button
                href={CV}
                download="nirmalrajresume.pdf"
                variant="contained"
                startIcon={<CloudDownloadIcon />}
                sx={{ alignSelf: "start", mt: 2 }}
              >
                Download CV
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
