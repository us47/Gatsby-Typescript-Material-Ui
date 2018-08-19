import * as React from 'react';
import Link from "gatsby-link"
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Header from './header';
import { MuiThemeProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import defaultTheme from '../themes/default';
import dayTheme from '../themes/dayTheme';
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

export interface LayoutProps {
    children?: any
}

export interface LayoutStates {
  isDayTheme?:boolean,
}

class Layout extends React.Component<LayoutProps, LayoutStates> {
  constructor (props:any){
    super(props);
      this.state={
        isDayTheme:false
      }
  }
  handleTheme(event:any){
      this.setState({isDayTheme:event.target.checked});
  };
  componentDidMount() {
    this.setState({isDayTheme:true});
  }
  public render() {
    return (
      <MuiThemeProvider theme={this.state.isDayTheme==true?dayTheme:defaultTheme}>
      <div style={{ margin: `0 auto`, maxWidth: 1100, padding: `2rem 2rem` }}>      
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Paper style={{padding: `1rem 1rem` }}>
              <Link to="/" style={{padding: `0.5rem 0.5rem` }}>
              <Typography variant="body2" color="primary" style={{display: 'inline-block'}}> Home  </Typography>
              </Link>
              <Link to="/customer/">
              <Typography variant="body2" color="primary" style={{display: 'inline-block'}}> Customer </Typography>
              </Link>
              <FormControlLabel style={{padding: `1rem 1rem` }}
                control={
                <Switch
                  checked={this.state.isDayTheme}
                  onChange={this.handleTheme.bind(this)}
                  value="day Theme"
                  color="secondary"
                />
                }
                label="Switch Theme" />
              <Header siteTitle="Gatsby Typescript Material-Ui"/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Paper style={{padding: `1rem 1rem`}}>
              {this.props.children}
            </Paper>
          </Grid>
        </Grid>
      </div>
      </MuiThemeProvider>
     );
  }
}

export default Layout