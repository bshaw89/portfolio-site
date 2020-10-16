import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Grow } from '@material-ui/core';
import { TransitionProps as TransitionPropsType } from '@material-ui/core/transitions';


// const Development = ({TransitionProps}: { TransitionProps: TransitionPropsType }) => {
const Development = (props: {
  theme:
}) => {
  return (
    <Container maxWidth="lg" style={{ height: "100%", width: "100%" }}>
      {/* <Grow {...TransitionProps} in timeout={800}> */}
    <Paper elevation={0} style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: 50, minWidth: "100%", background: props.theme.palette.primary.main }}>
      <Typography variant="h5">
        Projects
      </Typography>
      <Typography variant="body1">
      {"Some of my projects."}
      </Typography>
      <Grid container spacing={3} style={{ height: "100%", width: "100%" }}>
        <Grid item style={{ height: "auto", width: "30%" }}>
      <Card raised style={{ padding: "10%", height: "100%", flex: 1, background: "#1c313a" }}>
          <Typography variant="h6" align="center" color="primary">
        <Link href="https://github.com/bshaw89/Apocalypse-Twins" color="secondary">
          Apocalypse Twins
        </Link>
          </Typography>
          <Typography variant="body1">
            A choose-your-own-adventure game for two players using socket.io and React.
          </Typography>
      </Card>
      </Grid>
        <Grid item style={{ height: "auto", width: "30%" }}>
      <Card raised style={{ padding: "10%", height: "100%", flex: 1, background: "#1c313a" }}>
          <Typography variant="h6" align="center">
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
    </Paper>
    {/* </Grow> */}
    </Container>
  )
}

export default Development;