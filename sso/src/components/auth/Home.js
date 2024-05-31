import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import image from './images/image.png'; // Adjust the path to your actual image file
import ResponsiveNavbar from './Menu';
import { useState } from 'react';


const HomePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    
    <Box sx={{ display: 'flex', height: '100vh' }}>
         <ResponsiveNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Box
      
        sx={{
          width: '50%',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></Box>
      <Box
        sx={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: 4
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Employee and Salary Portal
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sign In to Proceed
        </Typography>
        {/* <Button variant="contained" color="primary" sx={{ mt: 3 }}>
          SIGN IN
        </Button> */}
        <Typography variant="body2" sx={{ mt: 5 }}>
          In case of any technical issue, please reach out to support team
          (Gondunikhil5061@gmail.com)
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;

