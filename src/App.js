import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Portfolio from './pages/Portfolio';
import PortfolioLayout from './components/PortfolioLayout';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#818cf8',
      light: '#a5b4fc',
      dark: '#6366f1',
      contrastText: '#0b0f1a',
    },
    secondary: {
      main: '#22d3ee',
      light: '#67e8f9',
      dark: '#06b6d4',
    },
    background: {
      default: '#0b0f1a',
      paper: '#121829',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, fontSize: '3.5rem', lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.3 },
    h3: { fontWeight: 600, fontSize: '2rem', lineHeight: 1.4 },
    h4: { fontWeight: 600, fontSize: '1.5rem', lineHeight: 1.4 },
    body1: { fontSize: '1.1rem', lineHeight: 1.6 },
    body2: { fontSize: '1rem', lineHeight: 1.5 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.12), transparent), #0b0f1a',
          backgroundAttachment: 'fixed',
        },
        '::selection': { background: 'rgba(129,140,248,0.35)' },
        '::-webkit-scrollbar': { width: 10 },
        '::-webkit-scrollbar-track': { background: '#0b0f1a' },
        '::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(180deg, #6366f1, #22d3ee)',
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, padding: '12px 24px', borderRadius: 10 },
        contained: {
          boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
          '&:hover': { boxShadow: '0 6px 28px rgba(34, 211, 238, 0.35)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 500 },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: 'rgba(11, 15, 26, 0.85)',
          backdropFilter: 'blur(16px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.07)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PortfolioLayout>
                <Portfolio />
              </PortfolioLayout>
            }
          />
          <Route
            path="*"
            element={
              <PortfolioLayout>
                <Portfolio />
              </PortfolioLayout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
