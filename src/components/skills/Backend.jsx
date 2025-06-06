// /* eslint-disable jsx-a11y/heading-has-content */
// import React from "react";

// const Backend = () => {
//   return (
//     <div className="skills_content">
//       <h3 className="skills__title">Backend Developer</h3>

//       <div className="skills__box">
//         <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">PHP</h3>
//               <span className="skills__level">Basic</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">MySql</h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">NodeJS</h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">ExpressJS</h3>
//               <span className="skills__level">Advanced</span>
//             </div>
//           </div>
//         </div>

//         <div className="skills__group">
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">Firebase</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>

//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">mongoDB</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//           <div className="skills__data">
//             <i class="bx bx-badge-check"></i>
//             <div>
//               <h3 className="skills__name">SQl</h3>
//               <span className="skills__level">Intermediate</span>
//             </div>
//           </div>
//         </div>
        
        
//       </div>
//     </div>
//   );
// };

// export default Backend;
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const skillsGroup1 = [
  { name: "PHP", level: "Basic" },
  { name: "MySQL", level: "Advanced" },
  { name: "NodeJS", level: "Advanced" },
  { name: "ExpressJS", level: "Advanced" },
];

const skillsGroup2 = [
  { name: "Firebase", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "SQL", level: "Intermediate" },
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

const Backend = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        Backend Developer
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

export default Backend;
