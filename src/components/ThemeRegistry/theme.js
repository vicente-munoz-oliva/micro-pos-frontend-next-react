import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({

  palette: {
    mode: 'light',
    background: {
      default: '#f6f7f9'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {

      variants: [
        {
          props: { variant: 'text', color: 'error' },
          style: {
            color: '#e53935',
            borderRadius: 10
          }
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            borderRadius: 10,
            background: '#1976d2',
          },
        },

      ],
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
