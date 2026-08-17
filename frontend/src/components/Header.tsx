import { AppBar, Box, Button, Container, Toolbar} from "@mui/material";
import { useEffect, useState } from "react";
import logo from '../assets/images/logo.png'
import logo1 from '../assets/images/logo toño.jpg'
const navigation = [
  {
    label: 'Noticias',
    id: 'news',
  },
  {
    label: 'Conoceme',
    id: 'biography',
  },
  {
    label: 'Voluntario',
    id: 'volunteer',
  },
  {
    label: 'Contactanos',
    id: 'transparency',
  },
];

function HeaderComponent() {

  const [activeSection, setActiveSection] = useState('proposals');

  useEffect(() => {

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };

  }, []);
    
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: 80,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
        {/* Logo */}
        <Box
        component="img"
        src={logo}
        alt="MORENA"
        sx={{
            height: 50,
            width: 'auto',
            objectFit: 'contain',
        }}
        />

          {/* Navigation */}
  {/* Navigation */}
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              gap: 2,
              alignItems: 'center',
            }}
          >

            {navigation.map((item) => {

              const isActive = activeSection === item.id;

              return (
                <Button
                  key={item.id}
                  href={`#${item.id}`}
                  sx={{
                    color: isActive
                      ? '#6F102B'
                      : 'text.secondary',

                    fontWeight: isActive
                      ? 'bold'
                      : 'normal',

                    borderBottom: isActive
                      ? '2px solid #6F102B'
                      : '2px solid transparent',

                    borderRadius: 0,

                    transition: 'all 0.2s ease',

                    '&:hover': {
                      color: '#6F102B',
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );

            })}

          </Box>

          {/* Donate */}
              <Box
        component="img"
        src={logo1}
        alt="MORENA"
        sx={{
            height: 50,
            width: 'auto',
            objectFit: 'contain',
        }}
        />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderComponent;