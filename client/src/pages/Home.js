import React from 'react'

//components
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import SignupButton from '../components/Buttons/SignupBtn'; 
import LoginButton from '../components/Buttons/LoginBtn'; 
import { Container, Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }} >
      <Hero />
      <Container align='center' sx={{ pt: 55 }}>
        <SignupButton />
          <Box sx={{ pt: 2 }}></Box>
        <LoginButton />
      </Container>
      <Box components="footer" sx={{
          mt: 'auto'}}>
        <Footer />
      </Box>
    </Box>
    
  )
}

export default Home
