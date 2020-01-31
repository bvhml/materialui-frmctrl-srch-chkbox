import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import CustomFormControl from './CustomFormControl'
import withRoot from '../withRoot'

const useStyles = makeStyles(theme => ({
  root:{
    height:'100vh',
    padding: '10vh',
    backgroundColor: 'grey'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '5em',
    maxWidth: 500,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  form:{
    justifyContent: 'center',
    padding: '6vh',
    margin: theme.spacing(1, 1), //8,1
    display: 'flex',
    flexDirection: 'column',
  },
  image: {
    //backgroundImage: `url(${require('')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '300px 75px',
    backgroundPosition: 'center',
  },
}));

function Find() {
  
  const classes = useStyles();
  return (
    <Grid container className={classes.root} component='main'>
      <Grid container component={Paper} elevation={6}>
        <Grid container className={classes.form} style={{backgroundColor:'transparent'}}>
        <Typography component="h1" variant="h4">
            Enjoy!
            </Typography>
          <Grid container style={{backgroundColor:'transparent'}} justify='center'>
            <CustomFormControl 
            name={'Name'} 
            classes={classes}
            />
         </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withRoot(Find);