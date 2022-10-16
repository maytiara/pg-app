import React from 'react'
import theme from '../../styles/Theme';
import { RoundedButton } from '../../styles/StyledButton';

import { Stack, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const SignupButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={{ width: '300px', height: '2rem'}}>
        <RoundedButton color="secondary" variant="contained" sx={{ opacity: "90%"}}>
          <Typography sx={{ fontSize: '1.15rem', fontWeight: 300, textTransform: "none" }}>
            <Link to="/signup" style={{ textDecoration: 'none', color: '#0c0c0c' }} >
            Create account
            </Link>
          </Typography>
        </RoundedButton>
      </Stack>
    </ThemeProvider>
  )
}


export default SignupButton