import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Slide } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import { indigo, deepPurple, grey, lime, amber, blueGrey, lightGreen, lightBlue, green } from '@material-ui/core/colors';

import NavbarScroller from './NavbarScroller';
import AboutMe from './AboutMe';
import { CssBaseline } from '@material-ui/core';
import Development from './Development';
import Contact from './Contact';
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: indigo[200]
    },
    secondary: {
      main: lightGreen[200]
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
        <AppBar position="static" color="default">
          <Toolbar>
          <Grid container 
        // direction="column"
        spacing={3}
        alignContent="space-around"
        justify="flex-end"
      >

            <NavbarScroller brand={brand} links={links} />
            </Grid>
          </Toolbar>
        </AppBar>
      <Grid container={true} 
        direction="column"
        spacing={4}
        // alignContent="space-around"
        justify="center"
      >
        <Grid item>
        {/* <div className='App'>
        </div> */}
        </Grid>
        {/* <Slide> */}
        <Grid item>
        <Route path="/about" component={AboutMe} />
        <Route path="/dev" component={Development} />
        <Route path="/contact" component={Contact} />
        </Grid>
        {/* </Slide> */}
      </Grid>
      </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App;
