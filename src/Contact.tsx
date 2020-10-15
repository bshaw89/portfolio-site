import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grow } from '@material-ui/core';
import { TransitionProps as TransitionPropsType } from '@material-ui/core/transitions';


const Contact = ({TransitionProps}: { TransitionProps: TransitionPropsType }) => {
  return (
    <Container maxWidth="lg">
      {/* <Grow {...TransitionProps} in timeout={800}> */}
    <Paper elevation={0} style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: 50, minWidth: "100%", background: "#303030"}}>
      <Typography variant="h5">
        Contact
      </Typography>
      <Typography>
      {"shaw.j.benjamin@gmail.com"}
      </Typography>
    </Paper>
    {/* </Grow> */}
    </Container>
  )
}

export default Contact;