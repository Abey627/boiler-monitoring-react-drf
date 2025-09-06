import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1E88E5', // Industrial blue
      light: '#4B9FEA',
      dark: '#1565C0',
    },
    secondary: {
      main: '#FF9800', // Warning orange for alerts/notifications
      light: '#FFB74D',
      dark: '#F57C00',
    },
    error: {
      main: '#E53935', // Critical alerts
      light: '#EF5350',
      dark: '#C62828',
    },
    warning: {
      main: '#FFA726', // Warning indicators
      light: '#FFB74D',
      dark: '#F57C00',
    },
    success: {
      main: '#43A047', // Success indicators
      light: '#66BB6A',
      dark: '#2E7D32',
    },
    info: {
      main: '#29B6F6', // Information indicators
      light: '#4FC3F7',
      dark: '#0288D1',
    },
    background: {
      default: '#F5F7FA', // Light gray background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50', // Dark blue-gray for text
      secondary: '#546E7A',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E0E0E0',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid #E0E0E0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.1)',
        },
      },
    },
  },
});
