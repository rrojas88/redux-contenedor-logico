import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  root: {
    backgroundColor: 'red',
  },
  palette: {
    primary: {
      main: '#cc2d26',
    },
    secondary: {
      main: '#ffd6cc',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: { useNextVariants: true },
  // ==================
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      text: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

export default theme;