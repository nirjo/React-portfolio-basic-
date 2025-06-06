 import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";

const Services = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box component="section" id="services" py={8}>
      <Typography variant="h4" color="primary"
 align="center" gutterBottom>
        Services
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        What I offer
      </Typography>

      <Box display="flex" justifyContent="center" mt={4}>
        <Box textAlign="center" p={3} border={1} borderRadius={2} maxWidth={320}>
          <Typography variant="h6" gutterBottom>
            Frontend Developer
          </Typography>
          <Button variant="contained" onClick={handleToggle} endIcon={<CheckCircleIcon />}>
            View More
          </Button>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleToggle} fullWidth maxWidth="sm">
        <DialogTitle sx={{ m: 0, p: 2 }}>
          UI/UX Designer
          <IconButton
            aria-label="close"
            onClick={handleToggle}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500]
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText gutterBottom>
            Service with more than 3 years of experience. Providing quality work to clients and companies.
          </DialogContentText>
          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="I develop the user interface." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Web page development" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="I create UX element interactions" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="I position your company brand" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Design and mockups of products" />
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Services;