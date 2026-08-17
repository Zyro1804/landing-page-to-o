import { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import portada from '../assets/images/portada.jpg';
import imagen2 from '../assets/images/imagen2.jpg';
import imagen3 from '../assets/images/imagen3.jpg';
import imagen4 from '../assets/images/imagen4.jpg';
import imagen5 from '../assets/images/imagen5.jpg';
const images = [
  portada,
  imagen2,
  imagen3,
  imagen4,
  imagen5
];

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrent(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  // Cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: {
          xs: 400,
          md: 600,
        },
        overflow: 'hidden',
        borderRadius: 2,
      }}
    >

      {/* Imágenes */}
      {images.map((image, index) => (
        <Box
          key={image}
          component="img"
          src={image}
          alt={`Imagen ${index + 1}`}
          sx={{
            position: 'absolute',
            inset: 0,

            width: '100%',
            height: '100%',

            objectFit: 'cover',

            opacity: current === index ? 1 : 0,

            transition: 'opacity 1.2s ease-in-out',

            zIndex: current === index ? 1 : 0,
          }}
        />
      ))}

    
      {/* Indicadores */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',

          display: 'flex',
          gap: 1,

          zIndex: 2,
        }}
      >
        {images.map((_, index) => (
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
                  ? '#FFFFFF'
                  : 'rgba(255,255,255,0.5)',

              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>

    </Box>
  );
}

export default ImageCarousel;