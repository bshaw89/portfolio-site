import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
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
      <Grid >
      <div className='App'>
        <NavbarScroller brand={brand} links={links} />
      </div>
      <AboutMe />
      </Grid>
      </ThemeProvider>
    )
  }
}

export default App;
