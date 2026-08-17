import {
  Box,
  Container,
  Link,
  Typography,
} from '@mui/material';

import ShareIcon from '@mui/icons-material/Share';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 5,
        backgroundColor: '#4D0018',
        color: '#FFFFFF',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="xl">

        <Typography
          variant="h3"
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            mb: 2,
          }}
        >
          
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
            mb: 3,
          }}
        >
          <Link href="#" color="inherit" underline="hover">
            Politica de Privacidad
          </Link>

          <Link href="#" color="inherit" underline="hover">
           
          </Link>

          {/* <Link href="#" color="inherit" underline="hover">
            Election Rules
          </Link> */}

          <Link href="#" color="inherit" underline="hover">
            Contactanos
          </Link>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mb: 3,
          }}
        >
          <ShareIcon />
          <MailIcon />
        </Box>

        <Typography
          sx={{
            opacity: 0.8,
            fontSize: 14,
          }}
        >
          © 2026
        </Typography>

      </Container>
    </Box>
  );
}

export default Footer;