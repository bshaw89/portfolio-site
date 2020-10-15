import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import grey from '@material-ui/core/colors/grey'

import NavbarScroller from './NavbarScroller';
import AboutMe from './AboutMe';
import { CssBaseline } from '@material-ui/core';
import Development from './Development';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: grey[50]
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
    { name: "Games", to: "/games" },
    { name: "Contact", to: "/contact" }
  ]
}

class App extends Component {
  public render() {

    const { brand, links } = navigation;

    return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container={true} 
        direction="column"
        spacing={4}
        alignContent="space-around"
        justify="center"
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
          <Route path="/about" component={AboutMe} />
          <Route path="/dev" component={Development} />
        </Grid>
      </Grid>
      </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App;
