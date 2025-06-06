// import React from 'react'

// const Info = () => {
//   return (
//     <div className='about__info grid '>
//     <div className='about__box'>
//     <i className='bx bx-award about__icon'></i>

//         <h3 className='about__title'> Experience</h3>
//         <span className='about__subtitle'>6 Years Working</span>
//     </div>

//     <div className='about__box'>
//     <i className='bx bx-briefcase-alt about__icon'></i>

//         <h3 className='about__title'> Completed</h3>
//         <span className='about__subtitle'>48 + Projects</span>
//     </div>
//     <div className='about__box'>
//     <i className='bx bx-support about__icon'></i>
//         <h3 className='about__title'> Support</h3>
//         <span className='about__subtitle'>Online 24/7
// </span>
//     </div>

    
// </div>
//   )
// }

// export default Info
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Info = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      <Grid item xs={12} sm={4}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            textAlign: "center",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <WorkspacePremiumIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h6" fontWeight="bold">
            Experience
          </Typography>
          <Typography variant="body2" color="text.secondary">
            6 Years Working
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            textAlign: "center",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <WorkOutlineIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h6" fontWeight="bold">
            Completed
          </Typography>
          <Typography variant="body2" color="text.secondary">
            48+ Projects
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            textAlign: "center",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          <SupportAgentIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h6" fontWeight="bold">
            Support
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Online 24/7
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Info;
