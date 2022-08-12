import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#345CCE',
      text: '#FFFFFF',
    },
    secondary: {
      main: '#919FC7',
      text: '#FFFFFF',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
