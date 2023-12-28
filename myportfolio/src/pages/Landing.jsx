import React from 'react'
import { Button, Container, Typography, Box, CssBaseline, Paper } from '@mui/material';
import Layout from '../Layout'

function Landing() {
  return (
   
    <Container component="main" style={{
    backgroundImage: 'myportfolio\public\samuel-prof.jpg',
    height: '100vh'
   }}>
  

   <CssBaseline />

   <Layout>
    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
    Welcome to my portfolio!
    </Typography>
  
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      Who Am I?
    </Typography>

    <div class="parallax-container">
      <div class="parallax">
        <img src="" alt=""></img>

      </div>
    </div>
    </Layout>
   </Container>
   
  );
}

export default Landing