// import React from "react";
// import "./skills.css";
// import Frontend from "./Frontend";
// import Backend from "./Backend";
// import Cloud from "./Cloud";
// import Learnings from "./Learnings";

// const skills = () => {
//   return (
//     <section className="skill section" id="skills">
//       <h2 className="section__title">Skills</h2>
//       <span className="section__subtitle">My Tecnical level</span>
//       {/* <p className="skills__description">
//       I love to create design which speaks, Keep it clean, minimal and simple.
// I LIKE TO DESIGN
// Web Design
// Mobile Apps
// TOOLS
// Figma

// I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
// SKILLS
// Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.

// TOOLS
// VScode, Github etc.
//       </p> */}
//       <div className="skills__container container grid">
//         <Frontend />
//         <Backend />
//         <Cloud />
//         <Learnings />
//       </div>
//     </section>
//   );
// };

// export default skills;
// import React from "react";
// import { Box, Typography, Grid, Container } from "@mui/material";
// import Frontend from "./Frontend";
// import Backend from "./Backend";
// import Cloud from "./Cloud";
// import Learnings from "./Learnings";

// const Skills = () => {
//   return (
//     <Box
//       component="section"
//       id="skills"
//       sx={{
//         py: 8,
//         backgroundColor: "#f5f5f5",
//       }}
//     >
//       <Container>
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: "bold" }}
//         >
//           Skills
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           align="center"
//           gutterBottom
//           sx={{ mb: 4, color: "text.secondary" }}
//         >
//           My Technical Level
//         </Typography>

//         <Grid container spacing={4}>
//           <Grid item xs={12} md={6}>
//             <Frontend />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Backend />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Cloud />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Learnings />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Skills;
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Cloud from "./Cloud";
import Learnings from "./Learnings";

const Skills = () => {
  return (
    <Box component="section" id="skills" py={8}>
      <Container>
        <Typography variant="h4" align="center"  color="primary"
 gutterBottom>
          Skills
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
          My Technical Level
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6} lg={3}>
            <Frontend />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Backend />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Cloud />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Learnings />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;

