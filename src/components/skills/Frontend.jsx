// /* eslint-disable jsx-a11y/heading-has-content */
// import React from "react";

// const Frontend = () => {
//   return (
//     <div className="skills_content">
//       <h3 className="skills__title">Frontend Developer</h3>

//       <div className="skills__box">
//         <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">HTML | CSS </h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">Javascript</h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name"> ReactJS</h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name"> NextJS</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//         </div>

//         <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">GIT</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">Bootstrap</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">tailwindCSS </h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//         </div>
        
        
//       </div>
//     </div>
//   );
// };

// export default Frontend;
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const skillsGroup1 = [
  { name: "HTML | CSS", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "ReactJS", level: "Advanced" },
  { name: "NextJS", level: "Intermediate" },
];

const skillsGroup2 = [
  { name: "GIT", level: "Intermediate" },
  { name: "Bootstrap", level: "Intermediate" },
  { name: "TailwindCSS", level: "Intermediate" },
];

const SkillItem = ({ name, level }) => (
  <Box display="flex" alignItems="center" mb={2}>
    <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
    <Box>
      <Typography variant="subtitle1" fontWeight={600}>
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {level}
      </Typography>
    </Box>
  </Box>
);

const Frontend = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Frontend Developer
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          {skillsGroup1.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {skillsGroup2.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Frontend;
