import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey, lightGreen, amber, blueGrey, pink, blue, indigo } from '@material-ui/core/colors';
import { Grid, Typography, Paper } from '@material-ui/core';
import { Link } from '@material-ui/core'


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: pink[200]
    }
  }
})

const Blog: React.FC = () => {
  return (
    <Grid container justify="center" spacing={5}>
      <Grid item sm={4} md={4} lg={4} xl={4} xs={4}>
      <Paper elevation={6} style={{ borderColor: theme.palette.secondary.dark, background: theme.palette.secondary.dark, padding: 10 }}>
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
      <Grid item sm={4} md={4} lg={4} xl={4} xs={4}>
      <Paper elevation={6} style={{ borderColor: theme.palette.secondary.dark, background: theme.palette.secondary.dark, padding: 10 }}>
        <Typography variant="h6" align="center" color="secondary">
          <Link href="https://github.com/bshaw89/shoppies" color="secondary">
          Film Awards Night
          </Link>
        </Typography>
        <Typography variant="body1">
        A live-search app allowing users to add up to 5 films to their nominees list using the OMBD api and React.
        </Typography>
      </Paper>
      </Grid>
      <Grid item sm={4} md={4} lg={4} xl={4} xs={4}>
      <Paper elevation={6} style={{ borderColor: theme.palette.secondary.dark, background: theme.palette.secondary.dark, padding: 10 }}>
        <Typography>
          Yep. Well.
          Well.
          Well. Howow howow howowo hasd hasd hasd hasd
        </Typography>
      </Paper>
      </Grid>
      <Grid item sm={4} md={4} lg={4} xl={4} xs={4}>
      <Paper elevation={6} style={{ borderColor: theme.palette.secondary.dark, background: theme.palette.secondary.dark, padding: 10 }}>
        <Typography>
          Yep. Well.
          Well.
          Well. Howow howow howowo hasd hasd hasd hasd
        </Typography>
      </Paper>
      </Grid>
      <Grid item sm={4} md={4} lg={4} xl={4} xs={4}>
      <Paper elevation={6} style={{ borderColor: theme.palette.secondary.dark, background: theme.palette.secondary.dark, padding: 10 }}>
        <Typography>
          Yep. Well.
          Well.
          Well. Howow howow howowo hasd hasd hasd hasd
        </Typography>
      </Paper>
      </Grid>
      <Grid item sm={4} md={4} lg={4} xl={4} xs={4}>
      <Paper elevation={6} style={{ borderColor: theme.palette.secondary.dark, background: theme.palette.secondary.dark, padding: 10 }}>
        <Typography>
          Yep. Well.
          Well.
          Well. Howow howow howowo hasd hasd hasd hasd
        </Typography>
      </Paper>
      </Grid>
    </Grid>
  )
}

export default Blog;