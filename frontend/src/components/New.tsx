import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from '@mui/material';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import noticia1 from '../assets/images/noticias/nota1.jpg'
import noticia2 from '../assets/images/noticias/nota2.jpg'
import noticia3 from '../assets/images/noticias/nota3.jpg'
import noticia4 from '../assets/images/noticias/nota4.jpg'

const news = [
  {
    title: 'Seguimos construyendo Juntos',
    description:
      'El día de hoy sostuvimos una reunión con diversos líderes y representantes de distintas localidades, sumando voluntades y fortaleciendo la unidad de este gran proyecto de la Cuarta Transformación.',
    date: '15 Agosto 2026',
    image: noticia1,
    link: 'https://www.facebook.com/share/p/1DL9QmuPBA/',
  },
  {
    title: '🤝 ¿Ya llegó el Periódico de Regeneración Nacional hasta tu colonia? ',
    description:
      'Hoy recorrimos la Colonia San Juan, en la Villa Benito Juárez (San Carlos) llevando casa por casa el mensaje de nuestra presidenta, la Dra. Claudia Sheinbaum Pardo, y entregando el periódico Regeneración Nacional. Creemos que la mejor forma de informar es de frente, escuchando a las y los vecinos y compartiendo los avances de la Cuarta Transformación.',
    date: '13 Agosto 2026',
    image: noticia2,
    link: 'https://www.facebook.com/share/p/18fSVs1Ypp/',
  },
  {
    title: 'Diálogo directo con la ciudadanía',
    description:
      'Hoy recorrimos la R/a Caparroso, I y II sección, llevando casa por casa el mensaje de nuestra presidenta, la Dra. Claudia Sheinbaum Pardo, y entregando el periódico Regeneración Nacional.',
    date: '12 Agosto 2026',
    image: noticia3,
    link: 'https://www.facebook.com/share/p/17yAQojLsy/',
  },
  {
    title: '¡Sigamos unidos por la transformación de México! 🇲🇽',
    description:
      'Con una gran participación ciudadana, hoy en Macuspana refrendamos nuestro respaldo absoluto a la Presidenta de México, la Dra. Claudia Sheinbaum Pardo',
    date: '1 Agosto 2026',
    image: noticia4,
    link: 'https://www.facebook.com/share/p/165PxHEoxQh/',
  },
];

function News() {
  const [current, setCurrent] = useState(0);

  const nextNews = () => {
    setCurrent((prev) => (prev + 1) % news.length);
  };

  const previousNews = () => {
    setCurrent(
      (prev) => (prev - 1 + news.length) % news.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextNews();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      component="section"
      id="news"
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
            mb: 6,
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
            Últimas Noticias
          </Typography>

          <Typography
            sx={{
              color: '#564244',
              fontSize: '18px',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            Conoce las últimas actividades, propuestas y
            acciones de nuestro equipo.
          </Typography>
        </Box>

        {/* Carrusel */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >

          {/* Anterior */}
          <Button
            onClick={previousNews}
            sx={{
              minWidth: 48,
              width: 48,
              height: 48,
              borderRadius: '50%',
              position: 'absolute',
              left: {
                xs: -5,
                md: -20,
              },
              zIndex: 2,
              backgroundColor: '#FFFFFF',
              color: '#6F102B',
              boxShadow: 2,

              '&:hover': {
                backgroundColor: '#F6F3F2',
              },
            }}
          >
            <ChevronLeftIcon />
          </Button>

          {/* Card */}
          <Box
            sx={{
              width: '100%',
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            <Card
              elevation={0}
              sx={{
                display: {
                  xs: 'block',
                  md: 'flex',
                },

                minHeight: {
                  xs: 'auto',
                  md: 360,
                },

                border: '1px solid #DCC0C2',
                borderRadius: 2,
                overflow: 'hidden',

                transition:
                  'opacity 0.5s ease, transform 0.5s ease',
              }}
            >

              {/* Imagen */}
              <Box
                component="img"
                src={news[current].image}
                alt={news[current].title}
                sx={{
                  width: {
                    xs: '100%',
                    md: '50%',
                  },

                  height: {
                    xs: 250,
                    md: 360,
                  },

                  objectFit: 'cover',
                }}
              />

              {/* Contenido */}
              <CardContent
                sx={{
                  width: {
                    xs: '100%',
                    md: '50%',
                  },

                  p: {
                    xs: 3,
                    md: 5,
                  },

                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >

                <Typography
                  sx={{
                    color: '#78592D',
                    fontSize: 14,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    mb: 2,
                  }}
                >
                  {news[current].date}
                </Typography>

                <Typography
                  variant="h3"
                  sx={{
                    color: '#4D0018',
                    fontSize: {
                      xs: 24,
                      md: 28,
                    },
                    mb: 2,
                  }}
                >
                  {news[current].title}
                </Typography>

                <Typography
                  sx={{
                    color: '#564244',
                    lineHeight: 1.6,
                    mb: 3,
                  }}
                >
                  {news[current].description}
                </Typography>

            <Button
            component="a"
            href={news[current].link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                alignSelf: 'flex-start',
                color: '#6F102B',
                fontWeight: 700,
                px: 0,

                '&:hover': {
                backgroundColor: 'transparent',
                },
            }}
            >
            Leer más →
            </Button>

              </CardContent>

            </Card>
          </Box>

          {/* Siguiente */}
          <Button
            onClick={nextNews}
            sx={{
              minWidth: 48,
              width: 48,
              height: 48,
              borderRadius: '50%',
              position: 'absolute',
              right: {
                xs: -5,
                md: -20,
              },
              zIndex: 2,
              backgroundColor: '#FFFFFF',
              color: '#6F102B',
              boxShadow: 2,

              '&:hover': {
                backgroundColor: '#F6F3F2',
              },
            }}
          >
            <ChevronRightIcon />
          </Button>

        </Box>

        {/* Indicadores */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 1,
            mt: 4,
          }}
        >
          {news.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrent(index)}
              sx={{
                width: current === index ? 24 : 8,
                height: 8,
                borderRadius: 10,
                cursor: 'pointer',

                backgroundColor:
                  current === index
                    ? '#6F102B'
                    : '#DCC0C2',

                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>

      </Container>
    </Box>
  );
}

export default News;