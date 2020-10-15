import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
// import { Toolbar } from '@material-ui/core/AppBar';
import grey from '@material-ui/core/colors/grey'

import NavbarScroller from './NavbarScroller';
import AboutMe from './AboutMe';
import { CssBaseline } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[50]
    }
  }
})

const navigation = {
  brand: { name: "NavbarScroller", to: "/" },
  links: [
    { name: "About Me", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Development", to: "/dev" },
    { name: "Games", to: "/games" },
    { name: "Contact", to: "/contact" }
  ]
}

class App extends Component {
  public render() {

    const { brand, links } = navigation;

    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container 
        direction="column" 
        spacing={4}
        alignContent="space-around"
        justify="space-evenly"
      >
        <Grid item>
        <AppBar position="static" color="default">
          <Toolbar>
            <NavbarScroller brand={brand} links={links} />
          </Toolbar>
        </AppBar>
        {/* <div className='App'>
        </div> */}
        </Grid>

        <Grid item>
        {/* <AboutMe /> */}
        </Grid>
      </Grid>
      </ThemeProvider>
    )
  }
}

export default App;
