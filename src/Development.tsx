import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Development = () => {
  return (
    <Container maxWidth="lg">
    <Paper style={{ height: '100%', width: '100%' }} elevation={3}>
      <Typography>
      {"Some of my projects."}
      </Typography>
    </Paper>
    </Container>
  )
}

export default Development;