import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import Dashboard from "../Dashboard";
import SubmitMessage from "../Dashboard/SubmitMessage";
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import green from "@material-ui/core/colors/green";
import bg from "../../assets/Background.png";
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
