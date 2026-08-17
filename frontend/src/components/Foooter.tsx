import {
  Box,
  Container,
  Link,
  Typography,
  Stack,
} from '@mui/material';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        backgroundColor: '#4D0018',
        color: '#FFFFFF',
      }}
    >
      <Container maxWidth="xl">

        {/* Título */}
        <Typography
          variant="h3"
          sx={{
            fontSize: '28px',
            fontWeight: 700,
            textAlign: 'center',
            mb: 1,
          }}
        >
          Contáctanos
        </Typography>

        <Typography
          sx={{
            textAlign: 'center',
            opacity: 0.85,
            mb: 5,
          }}
        >
          Estamos para ayudarte. Ponte en contacto con nosotros.
        </Typography>

        {/* Información de contacto */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 5,
            mb: 5,
          }}
        >

          {/* Teléfono */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <PhoneIcon />

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Teléfono
              </Typography>

              <Link
                href="tel:+529931234567"
                color="inherit"
                underline="hover"
              >
                +52 993 123 4567
              </Link>
            </Box>
          </Box>

          {/* Correo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <MailIcon />

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Correo electrónico
              </Typography>

              <Link
                href="mailto:contacto@empresa.com"
                color="inherit"
                underline="hover"
              >
                contacto@empresa.com
              </Link>
            </Box>
          </Box>

          {/* Ubicación */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <LocationOnIcon />

            <Box>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Ubicación
              </Typography>

              <Typography sx={{ opacity: 0.9 }}>
                Macuspana Tabasco, México
              </Typography>
            </Box>
          </Box>

        </Box>

        {/* Redes sociales */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 4,
            justifyContent : 'center'
           }}
        >

          <Link
            href="https://wa.me/529931234567"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 45,
              height: 45,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)',
              transition: '0.3s',

              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.25)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            <WhatsAppIcon />
          </Link>

          <Link
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 45,
              height: 45,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)',
              transition: '0.3s',

              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.25)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            <FacebookIcon />
          </Link>

          <Link
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 45,
              height: 45,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)',
              transition: '0.3s',

              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.25)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            <InstagramIcon />
          </Link>

          <Link
            href="mailto:contacto@empresa.com"
            color="inherit"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 45,
              height: 45,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.12)',
              transition: '0.3s',

              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.25)',
                transform: 'translateY(-3px)',
              },
            }}
          >
            <MailIcon />
          </Link>

        </Stack>

        {/* Links */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 3,
            mb: 3,
          }}
        >
          <Link
            href="#"
            color="inherit"
            underline="hover"
          >
            Política de Privacidad
          </Link>

          <Link
            href="#"
            color="inherit"
            underline="hover"
          >
            Términos y condiciones
          </Link>

          <Link
            href="#"
            color="inherit"
            underline="hover"
          >
            Contacto
          </Link>
        </Box>

        {/* Copyright */}
        <Typography
          sx={{
            opacity: 0.7,
            fontSize: 14,
            textAlign: 'center',
          }}
        >
          © 2026 Todos los derechos reservados.
        </Typography>

      </Container>
    </Box>
  );
}

export default Footer;