import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import {
  Code,
  Home,
  Person,
  Build,
  School,
  Work,
  Mail,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const accentGradient = 'linear-gradient(135deg, #8B7CFF 0%, #22D3EE 100%)';

const PortfolioLayout = ({ children }) => {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
    setMenuAnchor(null);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const marker = 140;
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element || element.getBoundingClientRect().top > marker) {
          break;
        }
        currentSection = section;
      }

      setActiveSection((current) => current === currentSection ? current : currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const menuItems = [
    { text: 'Home', icon: <Home />, id: 'home' },
    { text: 'About', icon: <Person />, id: 'about' },
    { text: 'Skills', icon: <Build />, id: 'skills' },
    { text: 'Experience', icon: <Work />, id: 'experience' },
    { text: 'Projects', icon: <Code />, id: 'projects' },
    { text: 'Education', icon: <School />, id: 'education' },
    { text: 'Contact', icon: <Mail />, id: 'contact' },
  ];

  const navButtonSx = (active) => ({
    px: 1.75,
    py: 0.85,
    borderRadius: '999px',
    color: active ? '#E9D5FF' : 'text.secondary',
    bgcolor: active ? 'rgba(139,124,255,0.14)' : 'transparent',
    fontWeight: 700,
    '&:hover': {
      color: '#F5F3FF',
      bgcolor: 'rgba(139,124,255,0.12)',
    },
  });

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 1200,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          bgcolor: 'rgba(7,11,20,0.76)',
          borderBottom: '1px solid rgba(148,163,184,0.12)',
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
          <Box sx={{ height: { xs: 68, md: 76 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
            <Box
              component="button"
              type="button"
              onClick={() => scrollToSection('home')}
              aria-label="Go to portfolio home"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
                border: 0,
                p: 0,
                bgcolor: 'transparent',
                color: 'inherit',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '13px',
                  display: 'grid',
                  placeItems: 'center',
                  color: '#070B14',
                  background: accentGradient,
                  boxShadow: '0 8px 24px rgba(99,102,241,0.28)',
                }}
              >
                <Code sx={{ fontSize: 21 }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.15, fontSize: '0.98rem' }}>
                  Prasannakumar
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                  Full Stack Developer
                </Typography>
              </Box>
            </Box>

            <Box component="nav" aria-label="Portfolio sections" sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 0.5 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  sx={navButtonSx(activeSection === item.id)}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => scrollToSection('contact')}
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  px: 2.5,
                  background: accentGradient,
                  color: '#070B14',
                  '&:hover': { background: 'linear-gradient(135deg, #9D8FFF, #38E1F2)' },
                }}
              >
                Let's Talk
              </Button>
              <IconButton
                aria-label={menuAnchor ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={Boolean(menuAnchor)}
                aria-controls="portfolio-navigation-menu"
                onClick={menuAnchor ? handleMenuClose : handleMenuOpen}
                sx={{ display: { xs: 'inline-flex', lg: 'none' }, color: 'text.primary' }}
              >
                {menuAnchor ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component="main">{children}</Box>

      <Menu
        id="portfolio-navigation-menu"
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 230,
              bgcolor: '#0D1424',
              backgroundImage: 'none',
              border: '1px solid rgba(148,163,184,0.16)',
              borderRadius: '16px',
              boxShadow: '0 20px 60px rgba(2,6,23,0.5)',
            },
          },
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            selected={activeSection === item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{ mx: 1, my: 0.25, borderRadius: '10px' }}
          >
            <Box component="span" sx={{ mr: 1.5, display: 'inline-flex', color: activeSection === item.id ? '#67E8F9' : 'text.secondary' }}>
              {item.icon}
            </Box>
            {item.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PortfolioLayout;
