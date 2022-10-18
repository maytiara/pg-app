import { createTheme } from "@mui/material";

const Colors = {
  black: '#0C0C0C',
  beige: '#F1eCD7',
  gold: '#C5B044',
  white: '#FFFFFF',
  lightgrey: '#939393',
  darkgrey: '303030',
}

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.black,
      light: Colors.lightgrey,
      dark: Colors.darkgrey
    },
    secondary: {
      main: Colors.gold,
      light: Colors.white,
      dark: Colors.beige
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        fontFamily: 'Lato'
      },
    }
  },
  MuiTypography: {
    fontFamily: 'Lato',
    h1: { fontSize: 69 },
    h2: { fontSize: 57 },
    h3: { fontSize: 48 },
    h4: { fontSize: 40 },
    h5: { fontSize: 33 },
    h6: { fontSize: 28 },
  },
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }
  }
});



export default theme;