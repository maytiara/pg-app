import React from 'react';
import css from './Footer.module.css';
import { GoMarkGithub } from "react-icons/go";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


function Copyright () {
  return (
    <Typography variant="body2" color="text.secondary.light" className={css.footerBold}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Private Gourmet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Footer = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '20vh'}}>
      <Box
        className={css.footerBg}
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1" className={css.footerLight}>
          < GoMarkGithub/> github.com/maytiara
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

export default Footer