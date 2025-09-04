import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: green[500],
    },
  },
});
