import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Portfolio from './pages/Portfolio';
import PortfolioLayout from './components/PortfolioLayout';

const headingFont = '"Space Grotesk", "Inter", "Roboto", "Helvetica", "Arial", sans-serif';
const bodyFont = '"Inter", "Roboto", "Helvetica", "Arial", sans-serif';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B7CFF',
      light: '#A78BFA',
      dark: '#6D5DF6',
      contrastText: '#070B14',
    },
    secondary: {
      main: '#22D3EE',
      light: '#67E8F9',
      dark: '#06B6D4',
    },
    success: {
      main: '#34D399',
    },
    background: {
      default: '#070B14',
      paper: '#0D1424',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(148,163,184,0.14)',
  },
  typography: {
    fontFamily: bodyFont,
    h1: { fontFamily: headingFont, fontWeight: 800, fontSize: '3.5rem', lineHeight: 1.08, letterSpacing: '-0.04em' },
    h2: { fontFamily: headingFont, fontWeight: 800, fontSize: '2.5rem', lineHeight: 1.15, letterSpacing: '-0.03em' },
    h3: { fontFamily: headingFont, fontWeight: 800, fontSize: '2rem', lineHeight: 1.2, letterSpacing: '-0.02em' },
    h4: { fontFamily: headingFont, fontWeight: 800, fontSize: '1.5rem', lineHeight: 1.25 },
    h5: { fontFamily: headingFont, fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.3 },
    h6: { fontFamily: headingFont, fontWeight: 700, fontSize: '1rem', lineHeight: 1.35 },
    body1: { fontSize: '1.05rem', lineHeight: 1.7 },
    body2: { fontSize: '0.95rem', lineHeight: 1.6 },
    button: { fontWeight: 700, letterSpacing: '0.01em' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            'radial-gradient(ellipse 70% 45% at 15% -10%, rgba(139,124,255,0.16), transparent), radial-gradient(ellipse 55% 40% at 90% 0%, rgba(34,211,238,0.1), transparent), #070B14',
          backgroundAttachment: 'fixed',
        },
        '::selection': { background: 'rgba(139,124,255,0.38)', color: '#F8FAFC' },
        '::-webkit-scrollbar': { width: 10 },
        '::-webkit-scrollbar-track': { background: '#070B14' },
        '::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(180deg, #8B7CFF, #22D3EE)',
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 700, padding: '11px 22px', borderRadius: '999px' },
        contained: {
          background: 'linear-gradient(135deg, #8B7CFF, #22D3EE)',
          color: '#070B14',
          boxShadow: '0 8px 30px rgba(99,102,241,0.28)',
          '&:hover': {
            background: 'linear-gradient(135deg, #9D8FFF, #38E1F2)',
            boxShadow: '0 12px 36px rgba(34,211,238,0.25)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: 'rgba(148,163,184,0.28)',
          '&:hover': { borderColor: '#22D3EE', bgcolor: 'rgba(34,211,238,0.06)' },
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
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: '999px' },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#0D1424',
          backgroundImage: 'none',
          border: '1px solid rgba(148,163,184,0.16)',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(2,6,23,0.5)',
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
