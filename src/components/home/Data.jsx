// import React from "react";
import { Box, Typography, Button, SvgIcon } from "@mui/material";

const Data = () => {
  return (
    <Box sx={{ padding: 4, maxWidth: "800px", margin: "auto", textAlign: "center" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Nirmalraj Joseph{" "}
        <SvgIcon component="svg" viewBox="0 0 48 48" sx={{ verticalAlign: "middle", ml: 1 }}>
          {/* Paste only the <path> elements from your SVG here */}
          <path d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051..."></path>
          {/* Add all your <path> elements inside this SvgIcon */}
        </SvgIcon>
      </Typography>

      <Typography variant="h5" component="h3" color="text.secondary" gutterBottom>
        Frontend Developer | MERN STACK | FULL STACK
      </Typography>

      <Typography variant="body1" color="text.primary" paragraph>
        I'm a creative designer based in Pondicherry-India, and I'm very passionate and dedicated to my work. A highly motivated and creative
        developer with hands-on experience, a successful software engineer with 6+ years of verifiable success in leading teams with comprehensive
        knowledge of Architecture, Agile Methodologies, Cloud Services, and Web-Based Applications.
      </Typography>

      <Typography variant="body1" color="text.primary" paragraph>
        An innovative change agent with a unique mix of high-level technology direction and deep technical expertise. Ready to take on and work in
        any project immediately without delay—even from scratch. I've had the advantage of working with Swedish, Nordic, London, and Indian clients,
        so I can adapt and integrate with any team with ease.
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href="#contact"
        sx={{ mt: 3 }}
        endIcon={
          <SvgIcon>
            <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352..." />
            <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852..." />
          </SvgIcon>
        }
      >
        Say Hello
      </Button>
    </Box>
  );
};

export default Data;
