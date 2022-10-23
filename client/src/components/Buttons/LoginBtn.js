import React from 'react'
import theme from '../../styles/Theme';
import { RoundedButton } from '../../styles/StyledButton';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const LoginButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ width: '300px', height: '2rem'}}>
        <RoundedButton color="secondary" variant="contained" sx={{ opacity: "90%" }}>
          <Typography sx={{ fontSize: '1.15rem', fontWeight: 300, textTransform: "none" }}>
            <Link to="/login" style={{ textDecoration: 'none', color:  '#0c0c0c' }} >
            Sign in
            </Link>
          </Typography>
        </RoundedButton>
      </Stack>
    </ThemeProvider>
  )
}


export default LoginButton