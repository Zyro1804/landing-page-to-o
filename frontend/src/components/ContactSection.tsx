import {
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        backgroundColor: '#FCF9F8',
        py: {
          xs: 8,
          md: 10,
        },
      }}
    >
      <Container maxWidth="xl">

        {/* Conoce más */}
        <Box
          sx={{
            backgroundColor: '#6F102B',
            color: '#FFFFFF',
            borderRadius: 2,
            p: {
              xs: 4,
              md: 7,
            },
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >

          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: 28,
                md: 36,
              },
              fontWeight: 700,
              mb: 2,
            }}
          >
            Conoce más de MORENA
          </Typography>

          <Typography
            sx={{
              maxWidth: 700,
              mx: 'auto',
              color: 'rgba(255,255,255,0.9)',
              fontSize: {
                xs: 16,
                md: 18,
              },
              lineHeight: 1.7,
              mb: 4,
            }}
          >
            Conoce nuestra historia, principios, propuestas y
            las actividades que realizamos para continuar
            construyendo una transformación cercana a la
            ciudadanía.
          </Typography>

          <Button
            component="a"
            href="https://morena.org/"
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#6F102B',
              px: 4,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 1,

              '&:hover': {
                backgroundColor: '#F0EDED',
              },
            }}
          >
            Conoce más →
          </Button>

        </Box>

        {/* Contacto y redes */}
        <Box
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            justifyContent: 'space-between',
            alignItems: {
              xs: 'center',
              md: 'flex-start',
            },
            gap: 5,
          }}
        >

          {/* Contacto */}
          <Box
            sx={{
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#4D0018',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Contáctanos
            </Typography>

            <Typography
              sx={{
                color: '#564244',
                mb: 1,
              }}
            >
              ¿Quieres conocer más o formar parte?
            </Typography>

            <Typography
              sx={{
                color: '#6F102B',
                fontWeight: 600,
              }}
            >
              contacto@ejemplo.com
            </Typography>

            <Typography
              sx={{
                color: '#564244',
              }}
            >
              +52 993 000 0000
            </Typography>
          </Box>

          {/* Redes */}
          <Box
            sx={{
              textAlign: {
                xs: 'center',
                md: 'right',
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#4D0018',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Síguenos
            </Typography>

            <Box
              sx={{
                display: 'flex',
                gap: 1,
              }}
            >

              <IconButton
                component="a"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#6F102B',
                  '&:hover': {
                    backgroundColor: '#F0EDED',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#6F102B',
                  '&:hover': {
                    backgroundColor: '#F0EDED',
                  },
                }}
              >
                <XIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#6F102B',
                  '&:hover': {
                    backgroundColor: '#F0EDED',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#6F102B',
                  '&:hover': {
                    backgroundColor: '#F0EDED',
                  },
                }}
              >
                <YouTubeIcon />
              </IconButton>

            </Box>
          </Box>

        </Box>

      </Container>
    </Box>
  );
}

export default ContactSection;