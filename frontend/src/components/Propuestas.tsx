import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const proposals = [
  {
    title: 'Educación',
    description:
      'Garantizar acceso universal a educación de calidad desde nivel básico hasta superior, con mejores instalaciones.',
    icon: <SchoolIcon />,
  },
  {
    title: 'Salud',
    description:
      'Fortalecer el sistema de salud pública asegurando abasto de medicamentos y atención gratuita para todos.',
    icon: <LocalHospitalIcon />,
  },
  {
    title: 'Seguridad',
    description:
      'Implementar estrategias integrales de prevención y fortalecer a nuestras fuerzas de seguridad con mejor capacitación.',
    icon: <SecurityIcon />,
  },
  {
    title: 'Economía',
    description:
      'Impulsar el desarrollo económico local, apoyando a pequeñas empresas y creando empleos dignos y bien remunerados.',
    icon: <TrendingUpIcon />,
  },
];

function Proposals() {
  return (
    <Box
      component="section"
      id="proposals"
      sx={{
        py: {
          xs: 8,
          md: 10,
        },
        backgroundColor: '#FCF9F8',
        scrollMarginTop: '80px',
      }}
    >
      <Container maxWidth="xl">

        {/* Encabezado */}
        <Box
          sx={{
            textAlign: 'center',
            mb: 8,
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
              mb: 2,
            }}
          >
            Nuestras Propuestas
          </Typography>

          <Typography
            sx={{
              color: '#564244',
              fontSize: '18px',
              maxWidth: 700,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Compromisos claros para continuar la transformación
            de nuestra nación con honestidad y trabajo duro.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={3}>
          {proposals.map((proposal) => (
            <Grid
              key={proposal.title}
              size={{
                xs: 12,
                sm: 6,
                lg: 3,
              }}
            >
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  border: '1px solid #DCC0C2',
                  backgroundColor: '#FCF9F8',
                  transition: 'all 0.3s ease',

                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow:
                      '0 4px 12px rgba(0,0,0,0.05)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>

                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#F0EDED',
                      color: '#6F102B',
                      mb: 2,
                    }}
                  >
                    {proposal.icon}
                  </Box>

                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '24px',
                      color: '#4D0018',
                      mb: 1,
                    }}
                  >
                    {proposal.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#564244',
                      lineHeight: 1.5,
                    }}
                  >
                    {proposal.description}
                  </Typography>

                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}

export default Proposals;