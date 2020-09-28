import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import {Switch, Route, Redirect, Link} from 'react-router-dom';
import Dashboard from "../Dashboard";
import SubmitMessage from "../Dashboard/SubmitMessage";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import green from "@material-ui/core/colors/green";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function Main(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar style={{backgroundColor : "#57af39"}}>
        <Toolbar>
          <Typography variant="h6">Mental health for everyone</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor"/>
      <Container maxWidth="md" className={classes.main}>
         <Switch>
            <Redirect exact from='/' to='/dashboard'/>
            <Route path={`/dashboard`} component={Dashboard}/>
            <Route path={`/thankyou`} component={SubmitMessage}/>
          </Switch>
      </Container>
         <Fab className={`${classes.fab} ${classes.fabGreen}`} color="primary" variant="extended" size="large">
           <ThumbUpAltOutlinedIcon className={classes.extendedIcon}/>
           <Typography variant='subtitle1'>Click to <b>Pledge</b></Typography>
        </Fab>
    </div>
  );
}
