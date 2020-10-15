import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const AboutMe = () => {
  return (
    <Container maxWidth="md">
    <Paper style={{ height: '100%', width: '100%' }} elevation={4}>
      <Typography variant="h5">
        About Me
      </Typography>
      <Typography variant="body1">
      {"A developer who trained as an opera singer who loves to play as much D&D as possible."}
      </Typography>
    </Paper>
    </Container>
  )
}

export default AboutMe;