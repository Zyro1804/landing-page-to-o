import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

function Volunteer() {
  return (
    <Box
      component="section"
      id="volunteer"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: {
          xs: 8,
          md: 10,
        },
        textAlign: 'center',
        backgroundColor: '#6F102B',
        color: '#FFFFFF',
        scrollMarginTop: '80px',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 2,
        }}
      >

        <Typography
          variant="h2"
          sx={{
            color: '#FFFFFF',
            fontSize: {
              xs: '28px',
              md: '32px',
            },
            mb: 2,
          }}
        >
          Súmate a la Historia
        </Typography>

        <Typography
          sx={{
            color: 'rgba(255,255,255,0.9)',
            fontSize: '18px',
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          La transformación la hacemos todos. Únete a nuestro
          equipo de voluntarios y sé parte del cambio verdadero
          en nuestra comunidad.
        </Typography>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            gap: 1,
            maxWidth: 600,
            mx: 'auto',
          }}
        >

          <TextField
            fullWidth
            placeholder="Tu número de WhatsApp"
            type="tel"
            required
            slotProps={{
                input: {
                startAdornment: (
                    <PhoneIphoneIcon
                    sx={{
                        mr: 1,
                        color: '#564244',
                    }}
                    />
                ),
                },
            }}
            sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: 1,

                '& fieldset': {
                border: 'none',
                },
            }}
            />

          <Button
            type="submit"
            variant="contained"
            sx={{
              px: 3,
              whiteSpace: 'nowrap',
              backgroundColor: '#FFFFFF',
              color: '#6F102B',

              '&:hover': {
                backgroundColor: '#F0EDED',
              },
            }}
          >
            Quiero ser Voluntario
          </Button>

        </Box>

      </Container>

      {/* Patrón */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage:
            'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

    </Box>
  );
}

export default Volunteer;