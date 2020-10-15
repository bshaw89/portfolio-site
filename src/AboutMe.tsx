import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Slide, Grow, Fade } from '@material-ui/core';
import { TransitionProps as TransitionPropsType } from '@material-ui/core/transitions';


const AboutMe = ({TransitionProps}: { TransitionProps: TransitionPropsType }) => {
  return (
    <Container maxWidth="lg">
        {/* <Grow {...TransitionProps} in timeout={800}> */}
    <Paper elevation={0} style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: 50, minWidth: "100%", background: "#303030"}} >
      <Typography variant="h5">
        About Me
      </Typography>
      <Typography variant="body1">
      {"A developer who trained as an opera singer who loves to create RPG content."}
      </Typography>
    </Paper>
    {/* </Grow> */}
    </Container>
  )
}

export default AboutMe;