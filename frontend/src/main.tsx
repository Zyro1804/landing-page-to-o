import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import './index.css'
import App from './App.tsx'

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',

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

    h4: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },

    h5: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },

    h6: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 700,
    },

    body1: {
      fontFamily: 'Montserrat, sans-serif',
    },

    body2: {
      fontFamily: 'Montserrat, sans-serif',
    },

    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Montserrat, sans-serif',
        },
      },
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)