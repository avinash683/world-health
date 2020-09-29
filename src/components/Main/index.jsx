import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import Dashboard from "../Dashboard";
import green from "@material-ui/core/colors/green";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.up('sm')]: {
      height: "100vh"
    },
    [theme.breakpoints.down('sm')]: {
      height: "100%"
    },
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
  mainLogo : {
    [theme.breakpoints.up('sm')]: {
      width:"70%"
    },
    [theme.breakpoints.down('sm')]: {
      width:"50%"
    },
  }
}));

export default function Main(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} >
      {/*<CssBaseline/>*/}
      <Container maxWidth="md" className={`${classes.root}`} id="example1">
         <Switch>
           <Route path={`/`} component={()=><Dashboard/>}/>
         </Switch>
      </Container>
    </div>
  );
}
