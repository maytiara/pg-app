import React from 'react'
import css from './LoginBtn.module.css'

import Box from '@mui/material/Box';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiButton from "@mui/material/Button";

export const Button = styled(MuiButton)(({ theme, pill }) => ({
  borderRadius: pill ? theme.shape.pillRadius : theme.shape.borderRadius
}));

const theme = createTheme({
  shape: {
    pillRadius: 50,
  }
});

const LoginButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ pt: 22 }}>
        <Button variant="outlined" size="large" pill className={css.loginBtn}>
        &emsp;&emsp;&emsp;&emsp;LOG IN&emsp;&emsp;&emsp;&emsp;
        </Button>
      </Box>
    </ThemeProvider>
  )
}


export default LoginButton