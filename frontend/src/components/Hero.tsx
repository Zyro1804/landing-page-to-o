import { Box, Button, Container, Grid, Typography } from '@mui/material';
import portada from '../assets/images/portada.jpg'
import ImageCarousel from './ImagenesCarrusel';

function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: {
          xs: 'auto',
          md: '819px',
        },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#F6F3F2',
        py: {
          xs: 8,
          md: 10,
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >

          {/* Texto */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: '#4D0018',
                  fontSize: {
                    xs: '40px',
                    md: '64px',
                  },
                  lineHeight: {
                    xs: '48px',
                    md: '72px',
                  },
                  letterSpacing: '-0.02em',
                }}
              >
                Juntos por la Transformación
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: '#564244',
                  fontSize: {
                    xs: '24px',
                    md: '32px',
                  },
                }}
              >
                 José Antonio Rodríguez Subiaur
              </Typography>

              <Box>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: '#6F102B',
                    px: 4,
                    py: 2,
                    '&:hover': {
                      backgroundColor: '#4D0018',
                    },
                  }}
                >
                  Únete al Cambio
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Imagen */}
       <Grid size={{ xs: 12, md: 6 }}>
        <ImageCarousel />
        </Grid>

        </Grid>
      </Container>

      {/* Decoración */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '33%',
          height: '100%',
          backgroundColor: '#A33950',
          opacity: 0.1,
          clipPath:
            'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      />
    </Box>
  );
}

export default Hero;