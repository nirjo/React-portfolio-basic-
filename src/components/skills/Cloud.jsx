// /* eslint-disable jsx-a11y/heading-has-content */
// import React from "react";

// const Cloud = () => {
//   return (
//     <div className="skills_content">
//       <h3 className="skills__title">Cloud Technologies</h3>

//       <div className="skills__box">
//         <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">AWS</h3>
//               <span className="skills__level">Basic</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">Azure</h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>
//          </div>
        
        
//       </div>
//     </div>
//   );
// };

// export default Cloud;
import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const cloudSkills = [
  { name: "AWS", level: "Basic" },
  { name: "Azure", level: "Advanced" },
];

const Cloud = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Cloud Technologies
      </Typography>

      <Grid container spacing={2}>
        {cloudSkills.map((skill) => (
          <Grid item xs={12} sm={6} key={skill.name}>
            <Box display="flex" alignItems="center">
              <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Cloud;
