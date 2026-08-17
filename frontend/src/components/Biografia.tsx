import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import imagen1 from '../assets/images/imagen1.jpg'

function Biography() {
  return (
    <Box
      component="section"
      id="biography"
      sx={{
        py: {
          xs: 8,
          md: 10,
        },
        backgroundColor: '#F6F3F2',
        scrollMarginTop: '80px',
      }}
    >
      <Container maxWidth="xl">

        <Grid
          container
          spacing={{
            xs: 5,
            md: 10,
          }}
        >

          {/* Imagen */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              component="img"
              src={imagen1}
              alt="Candidato con la comunidad"
              sx={{
                width: '100%',
                height: {
                  xs: 400,
                  md: 500,
                },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>

          {/* Texto */}
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >

              <Typography
                variant="h2"
                sx={{
                  color: '#4D0018',
                  fontSize: {
                    xs: '28px',
                    md: '32px',
                  },
                }}
              >
                Una Vida de Servicio
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    color: '#564244',
                    fontSize: '18px',
                    lineHeight: 1.6,
                  }}
                >
                  Soy José Antonio Rodríguez Subiaur, originario de Macuspana, Tabasco, militante de izquierda desde hace más de 25 años, guiado por las ideas del Lic. Andrés Manuel López Obrador y comprometido por el bienestar de todas y todos.
                </Typography>

                <Typography
                  sx={{
                    color: '#564244',
                    fontSize: '18px',
                    lineHeight: 1.6,
                  }}
                >
                  Con una trayectoria impecable en el servicio
                  público, su compromiso siempre ha sido la
                  honestidad y la transparencia.
                </Typography>
              </Box>

              <Box
                sx={{
                  borderLeft: '4px solid #6F102B',
                  pl: 3,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    fontStyle: 'italic',
                    color: '#1C1B1B',
                  }}
                >
                  "El poder solo tiene sentido y se convierte en
                  virtud cuando se pone al servicio de los demás."
                </Typography>
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#564244',
                  textTransform: 'uppercase',
                }}
              >
                [Nombre del Candidato]
              </Typography>

            </Box>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}

export default Biography;