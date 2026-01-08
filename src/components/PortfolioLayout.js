import React, { useState, useEffect } from 'react';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import {
  Home,
  Person,
  Code,
  Build,
  School,
  Work,
  Mail,
} from '@mui/icons-material';

const drawerWidth = 240;

const PortfolioLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileOpen(false); // Close mobile drawer after navigation
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { text: 'Home', icon: React.createElement(Home), id: 'home' },
    { text: 'About', icon: React.createElement(Person), id: 'about' },
    { text: 'Skills', icon: React.createElement(Build), id: 'skills' },
    { text: 'Experience', icon: React.createElement(Work), id: 'experience' },
    { text: 'Projects', icon: React.createElement(Code), id: 'projects' },
    { text: 'Education', icon: React.createElement(School), id: 'education' },
    { text: 'Contact', icon: React.createElement(Mail), id: 'contact' },
  ];

  const drawer = React.createElement(
    'div',
    null,
    React.createElement(
      Typography,
      { variant: 'h6', noWrap: true, component: 'div', sx: { p: 2 } },
      'Portfolio'
    ),
    React.createElement(
      List,
      null,
      menuItems.map((item) =>
        React.createElement(
          ListItem,
          { key: item.text, disablePadding: true },
          React.createElement(ListItemButton, {
            selected: activeSection === item.id,
            onClick: () => scrollToSection(item.id),
            children: [
              React.createElement(ListItemIcon, { children: item.icon }),
              React.createElement(ListItemText, { primary: item.text }),
            ],
          })
        )
      )
    )
  );

  return React.createElement(
    Box,
    { sx: { display: 'flex' } },
    React.createElement(CssBaseline),
    React.createElement(Box, {
      component: 'nav',
      sx: { width: { sm: drawerWidth }, flexShrink: { sm: 0 } },
      'aria-label': 'mailbox folders',
      children: [
        React.createElement(Drawer, {
          variant: 'temporary',
          open: mobileOpen,
          onClose: handleDrawerToggle,
          ModalProps: { keepMounted: true },
          sx: {
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          },
          children: drawer,
        }),
        React.createElement(Drawer, {
          variant: 'permanent',
          sx: {
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          },
          open: true,
          children: drawer,
        }),
      ],
    }),
    React.createElement(Box, {
      component: 'main',
      sx: {
        flexGrow: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      },
      children: children,
    })
  );
};

export default PortfolioLayout;