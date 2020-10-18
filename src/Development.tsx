import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Grow, Theme, ThemeOptions, createMuiTheme } from '@material-ui/core';
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
      main: blue[200],
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
      <Grid container spacing={5} >
        <Grid item>
        <Typography variant="h5">
          Projects
        </Typography>
        <Typography variant="body1">
          {"Some of my projects."}
        </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={0} style={{ height: "100%", width: "100%" }}>
          <Grid item style={{ height: "60%", width: "30%" }}>
            <Card style={{ 
              padding: "10%", 
              height: "auto", 
              flex: 1, 
              background: theme.palette.primary.dark 
              }}>
              <Typography variant="h6" align="center" color="textPrimary">
                <Link href="https://github.com/bshaw89/Apocalypse-Twins" color="textPrimary">
                  Apocalypse Twins
                </Link>
              </Typography>
              <Typography variant="body1">
                A choose-your-own-adventure game for two players using socket.io and React.
              </Typography>
            </Card>
          </Grid>
          <Grid item style={{ height: "auto", width: "30%" }}>
            <Card style={{ padding: "10%", height: "auto", flex: 1, background: theme.palette.primary.light }}>
              <Typography variant="h6" align="center" color="secondary">
                <Link href="https://github.com/bshaw89/shoppies" color="secondary">
                  Film Awards
                </Link>
              </Typography>
              <Typography variant="body1">
                A live-search app allowing users to add up to 5 films to their nominees list using the OMBD api and React.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      {/* </Paper> */}
    </Container>
  )
}

export default Development;