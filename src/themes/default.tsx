import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const defaultTheme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: indigo,
    error: red
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    //fontFamily:'Roboto',
    //fontSize:16
  },
});

export default defaultTheme