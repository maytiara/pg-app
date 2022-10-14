import React from 'react'
import css from './Home.module.css'; //css

import Box from '@mui/material/Box';

import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero'; //components

const Home = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }} >
      <Hero />
      <Box components="footer" sx={{
          mt: 'auto'}}>
        <Footer />
      </Box>
    </Box>
    
  )
}

export default Home
