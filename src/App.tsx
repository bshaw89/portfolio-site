import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider, ThemeOptions, Theme } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Slide, Typography, Container } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { blue, pink, indigo, deepPurple, grey, lime, amber, blueGrey, lightGreen, lightBlue, green } from '@material-ui/core/colors';

import NavbarScroller from './NavbarScroller';
import AboutMe from './AboutMe';
import { CssBaseline } from '@material-ui/core';
import Development from './Development';
import Contact from './Contact';


// type Props = {
//   theme: () => void;
//   // createMuiTheme: (options?: ThemeOptions | undefined, ...args: object[]) => Theme;
// }

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: lightBlue[100],
    },
    secondary: {
      main: pink[100]
    }
  }
})

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   }
// })


const navigation = {
  brand: { name: "NavbarScroller", to: "/" },
  links: [
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Development", to: "/dev" },
    { name: "RPGs", to: "/rpgs" },
    { name: "Contact", to: "/contact" }
  ]
}

type Props = {
  theme: {(options?: ThemeOptions | undefined, ...args: object[]): Theme},
  brand: { name: string, to: string },
  links: Array<{ name: string; to: string }>
}

class App extends Component {
  public render() {

    const { brand, links } = navigation;
    const { palette } = theme;

    return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container spacing={9}>
        <Grid container item>
          <AppBar style={{ minHeight: 120, minWidth: "100%", background: palette.primary.dark }}>
            <Toolbar>
              <Grid container item
                spacing={3}
                alignContent="space-around"
                alignItems="center"
                justify="space-between"
              >
                <Grid item>
                  <Typography variant="h5" color='textSecondary'>
                    Benjamin Shaw
                  </Typography>
                </Grid>
                <Grid item>
                  <NavbarScroller brand={brand} links={links} />
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid container item spacing={9} direction="column" style={{ paddingTop: 80, paddingRight: 0, paddingBottom: 0 }}>
          <Grid container item
            direction="column"
            spacing={5}
            // alignContent="space-around"
            justify="center"
            style={{background: palette.primary.main }}
          >
            <Grid item style={{ height: "100vh" }}>
              <Route path="/about" component={AboutMe} />
              <Route path="/dev" component={Development} theme={palette} />
              <Route path="/contact" component={Contact} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App;