import React, { useRef, useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Link,
  Snackbar,
  Alert
} from '@mui/material';
import { Email, WhatsApp, Send } from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const sendEmail = (e) => {
    e.preventDefault();

    // Use FormData to extract values
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const project = formData.get('project');

    // Send these details using EmailJS
    const templateParams = {
      name: name,
      email: email,
      project: project,
    };

    // EmailJS send to owner (you), not to user
    emailjs.send('service_cp4o2kp', 'template_7o9nvvb', templateParams, 'XjVS4wLOn98YajBSE')
      .then(() => {
        setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' });
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.text);
        setSnackbar({ open: true, message: 'Message failed. Please try again.', severity: 'error' });
      });
  };

  return (
    <Box component="section" id="contact" sx={{ py: 8, px: 2 }}>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        Get in Touch
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Contact Me
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h6" gutterBottom>Talk to me</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Email color="primary" fontSize="large" />
                  <Typography variant="h6">Email</Typography>
                  <Typography variant="body2">nirmalraj.joseph86@gmail.com</Typography>
                </CardContent>
                <CardActions>
                  <Link href="mailto:nirmalraj.joseph86@gmail.com" underline="hover" target="_blank">
                    Write me
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <WhatsApp color="success" fontSize="large" />
                  <Typography variant="h6">WhatsApp</Typography>
                  <Typography variant="body2">+91-9791277201</Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://api.whatsapp.com/send?phone=919791277201&text=Hello, more information!"
                    underline="hover"
                    target="_blank"
                  >
                    Write me
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>Write me your projects</Typography>
          <Box component="form" ref={form} onSubmit={sendEmail} noValidate autoComplete="off">
            <TextField fullWidth margin="normal" name="name" label="Name" variant="outlined" required />
            <TextField fullWidth margin="normal" name="email" label="Email" type="email" variant="outlined" required />
            <TextField
              fullWidth
              margin="normal"
              name="project"
              label="Project Details"
              multiline
              rows={4}
              variant="outlined"
              required
            />
            <Button variant="contained" type="submit" endIcon={<Send />} sx={{ mt: 2 }}>
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
