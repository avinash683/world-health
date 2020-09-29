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
    height:"100%"
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
    <div className={classes.root} >
      <CssBaseline/>
      <Container id="example1" maxWidth="md" className={`${classes.root}`}>
         <Switch>
           <Route path={`/`} component={()=><Dashboard/>}/>
         </Switch>
      </Container>
    </div>
  );
}
