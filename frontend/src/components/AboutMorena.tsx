import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import amloImg from '../assets/images/morena/andresManuel.jpg';
import presidentaImg from '../assets/images/morena/sheimbaum.jpg';
import morenaImg from '../assets/images/morena/morena.jpg';

const people = [
  {
    name: 'Andrés Manuel López Obrador',
    role: 'Fundador y referente histórico',
    image: amloImg,
  },
  {
    name: 'Nuestra Presidenta',
    role: 'Dirigencia actual',
    image: presidentaImg,
  },
  {
    name: 'MORENA',
    role: 'Movimiento de Regeneración Nacional',
    image: morenaImg,
  },
];

function AboutMorena() {
  return (
    <Box
      component="section"
      id="about-morena"
      sx={{
        py: {
          xs: 8,
          md: 12,
        },
        backgroundColor: '#F6F3F2',
      }}
    >
      <Container maxWidth="xl">

        {/* Encabezado */}
        <Grid
          container
          spacing={{
            xs: 4,
            md: 8,
          }}
        >

          {/* Imagen principal */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component="img"
              src={morenaImg}
              alt="MORENA"
              sx={{
                width: '100%',
                height: {
                  xs: 300,
                  md: 430,
                },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>

          {/* Texto */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                color: '#78592D',
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Nuestro movimiento
            </Typography>

            <Typography
              variant="h2"
              sx={{
                color: '#4D0018',
                fontWeight: 700,
                fontSize: {
                  xs: 30,
                  md: 42,
                },
                mb: 3,
              }}
            >
              Conoce más de MORENA
            </Typography>

            <Typography
              sx={{
                color: '#564244',
                fontSize: {
                  xs: 16,
                  md: 18,
                },
                lineHeight: 1.8,
                maxWidth: 700,
                mb: 4,
              }}
            >
              Conoce la historia, principios, organización y
              trayectoria del Movimiento de Regeneración Nacional.
              Explora información sobre nuestro movimiento,
              sus representantes y sus principales actividades.
            </Typography>

            <Button
              component="a"
              href="https://morena.org/"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: '#6F102B',
                color: '#FFFFFF',
                px: 4,
                py: 1.5,
                borderRadius: 1,
                fontWeight: 700,

                '&:hover': {
                  backgroundColor: '#4D0018',
                },
              }}
            >
              Visitar sitio oficial →
            </Button>
          </Grid>

        </Grid>

        {/* Personas / partido */}
        <Box sx={{ mt: 10 }}>

          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              color: '#4D0018',
              fontWeight: 700,
              fontSize: {
                xs: 26,
                md: 32,
              },
              mb: 5,
            }}
          >
            Personajes y movimiento
          </Typography>

          <Grid
            container
            spacing={3}
          >
            {people.map((person) => (
              <Grid
                key={person.name}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    border: '1px solid #DCC0C2',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',

                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow:
                        '0 10px 30px rgba(77, 0, 24, 0.10)',
                    },
                  }}
                >

                  <Box
                    component="img"
                    src={person.image}
                    alt={person.name}
                    sx={{
                      width: '100%',
                      height: 280,
                      objectFit: 'cover',
                    }}
                  />

                  <CardContent sx={{ p: 3 }}>

                    <Typography
                      variant="h5"
                      sx={{
                        color: '#4D0018',
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {person.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#78592D',
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {person.role}
                    </Typography>

                  </CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>

        </Box>

      </Container>
    </Box>
  );
}

export default AboutMorena;