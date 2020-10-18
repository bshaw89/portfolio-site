import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Grow, Theme, ThemeOptions, createMuiTheme, Button } from '@material-ui/core';
import { TransitionProps as TransitionPropsType } from '@material-ui/core/transitions';
import { blueGrey, pink, blue } from '@material-ui/core/colors';
import { borders } from '@material-ui/system';

// type Props = {
//   theme: {(options?: ThemeOptions | undefined, ...args: object[]): Theme},
//   brand: { name: string, to: string },
//   links: Array<{ name: string; to: string }>
// }

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: blueGrey[800],
    },
    secondary: {
      main: pink[100]
    }
  }
})

// const Development = ({TransitionProps}: { TransitionProps: TransitionPropsType }) => {
const Development: React.FC = () => {
  return (
    <Container maxWidth="lg" disableGutters style={{ height: "100%", width: "100%" }}>
      {/* <Paper elevation={0} style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: 50, minWidth: "100%", background: theme.palette.primary.main }}> */}
      <Grid container item spacing={0}>
      <Grid container item spacing={5} >
        <Grid item>
        <Typography variant="h5">
          Projects
        </Typography>
        <Typography variant="body1">
          {"Some of my projects."}
        </Typography>
        </Grid>
      </Grid>
      <Grid container item spacing={3} style={{ height: "100%", width: "100%" }}>
          <Grid item style={{ height: "60%", width: "30%" }}>
            <Paper variant="outlined" style={{ 
              padding: "10%", 
              height: "auto", 
              flex: 1, 
              background: theme.palette.primary.main 
              }}>
              <Typography variant="h6" align="center" color="secondary">
                <Link href="https://github.com/bshaw89/Apocalypse-Twins" color="secondary">
                  Apocalypse Twins
                </Link>
              </Typography>
              <Typography variant="body1">
                A choose-your-own-adventure game for two players using socket.io and React.
              </Typography>
            </Paper>
          </Grid>
          <Grid item style={{ height: "auto", width: "30%" }}>
            <Paper variant="outlined" style={{ padding: "10%", height: "auto", flex: 1, background: theme.palette.primary.main }}>
              <Typography variant="h6" align="center" color="secondary">
                <Link href="https://github.com/bshaw89/shoppies" color="secondary">
                  Film Awards
                </Link>
              </Typography>
              <Typography variant="body1">
                A live-search app allowing users to add up to 5 films to their nominees list using the OMBD api and React.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      {/* </Paper> */}
      </Grid>
    </Container>
  )
}

export default Development;