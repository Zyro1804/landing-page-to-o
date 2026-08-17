import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4D0018',
      light: '#6F102B',
      dark: '#400013',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#78592D',
      light: '#FF DDB4',
      contrastText: '#FFFFFF',
    },

    background: {
      default: '#FCF9F8',
      paper: '#FCF9F8',
    },

    text: {
      primary: '#1C1B1B',
      secondary: '#564244',
    },

    divider: '#DCC0C2',
  },

  typography: {
    fontFamily: 'Inter, sans-serif',

    h1: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 800,
    },

    h2: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },

    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },

    button: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 4,
  },
});

export default theme;