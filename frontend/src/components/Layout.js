import React, { useState } from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  Settings as SettingsIcon,
  AccountCircle,
  Logout,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    handleProfileMenuClose();
  };

  const menuItems = [
    { text: 'Dashboard', icon: React.createElement(DashboardIcon), path: '/dashboard' },
    { text: 'Users', icon: React.createElement(PeopleIcon), path: '/users' },
    { text: 'Analytics', icon: React.createElement(BarChartIcon), path: '/analytics' },
    { text: 'Settings', icon: React.createElement(SettingsIcon), path: '/settings' },
  ];

  const drawer = React.createElement(
    'div',
    null,
    React.createElement(
      Toolbar,
      null,
      React.createElement(
        Typography,
        { variant: 'h6', noWrap: true, component: 'div' },
        'Dashboard'
      )
    ),
    React.createElement(
      List,
      null,
      menuItems.map((item) =>
        React.createElement(
          ListItem,
          { key: item.text, disablePadding: true },
          React.createElement(ListItemButton, {
            selected: location.pathname === item.path,
            onClick: () => navigate(item.path),
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
    React.createElement(AppBar, {
      position: 'fixed',
      sx: {
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      },
      children: React.createElement(
        Toolbar,
        null,
        React.createElement(IconButton, {
          color: 'inherit',
          'aria-label': 'open drawer',
          edge: 'start',
          onClick: handleDrawerToggle,
          sx: { mr: 2, display: { sm: 'none' } },
          children: React.createElement(MenuIcon),
        }),
        React.createElement(Typography, {
          variant: 'h6',
          noWrap: true,
          component: 'div',
          sx: { flexGrow: 1 },
          children: 'Dashboard System',
        }),
        React.createElement(IconButton, {
          size: 'large',
          'aria-label': 'account of current user',
          'aria-controls': 'menu-appbar',
          'aria-haspopup': 'true',
          onClick: handleProfileMenuOpen,
          color: 'inherit',
          children: React.createElement(
            Avatar,
            { sx: { width: 32, height: 32 } },
            React.createElement(AccountCircle)
          ),
        }),
        React.createElement(Menu, {
          id: 'menu-appbar',
          anchorEl: anchorEl,
          anchorOrigin: { vertical: 'top', horizontal: 'right' },
          keepMounted: true,
          transformOrigin: { vertical: 'top', horizontal: 'right' },
          open: Boolean(anchorEl),
          onClose: handleProfileMenuClose,
          children: [
            React.createElement(MenuItem, {
              key: 'profile',
              onClick: handleProfileMenuClose,
              children: [
                React.createElement(ListItemIcon, {
                  children: React.createElement(AccountCircle, { fontSize: 'small' }),
                }),
                'Profile',
              ],
            }),
            React.createElement(MenuItem, {
              key: 'logout',
              onClick: handleLogout,
              children: [
                React.createElement(ListItemIcon, {
                  children: React.createElement(Logout, { fontSize: 'small' }),
                }),
                'Logout',
              ],
            }),
          ],
        })
      ),
    }),
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
        p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      },
      children: [React.createElement(Toolbar), children],
    })
  );
};

export default Layout;
