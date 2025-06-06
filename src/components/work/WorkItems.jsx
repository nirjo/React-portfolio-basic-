import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const WorkItems = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        mx: "auto",
        borderRadius: 4,
        boxShadow: 4,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea href={item.link} target="_blank" rel="noopener noreferrer">
        <CardMedia
          component="img"
          height="200"
          image={item.image} // Now this works perfectly
          alt={item.title}
        />
        <CardContent>
          <Typography variant="h6" align="center" gutterBottom>
            {item.title}
          </Typography>
          <Box textAlign="center">
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
              {item.category}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default WorkItems;
