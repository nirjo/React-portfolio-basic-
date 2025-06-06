// import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Tooltip,
  LinearProgress,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Map skill levels to progress percentages
const levelProgress = {
  Basic: 30,
  Intermediate: 60,
  Advanced: 90,
};

const learningSkills = [
  { name: "Typescript", level: "Intermediate", description: "Strongly typed superset of JavaScript." },
  { name: "Python", level: "Intermediate", description: "Popular general-purpose programming language." },
  // Uncomment or add more:
  // { name: "AI-Technology", level: "Intermediate", description: "Learning Artificial Intelligence concepts." },
];

const Learnings = () => {
  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, mb: 4 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Learning Technologies
      </Typography>

      <Grid container spacing={3}>
        {learningSkills.map(({ name, level, description }) => (
          <Grid item xs={12} sm={6} key={name}>
            <Box display="flex" alignItems="center" mb={1}>
              <CheckCircleIcon color="primary" sx={{ mr: 1 }} />
              <Tooltip title={description} arrow>
                <Typography variant="subtitle1" fontWeight={600} sx={{ cursor: "help" }}>
                  {name}
                </Typography>
              </Tooltip>
            </Box>
            <LinearProgress
              variant="determinate"
              value={levelProgress[level] || 0}
              sx={{ height: 10, borderRadius: 5 }}
            />
            <Typography variant="body2" color="text.secondary" mt={0.5}>
              {level}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Learnings;
