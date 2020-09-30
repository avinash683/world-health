import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';
import Dashboard from "../Dashboard";
import green from "@material-ui/core/colors/green";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/Sun Pharma Logo.png";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
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
      <Container maxWidth="sm"className={classes.root} id="example1">
         <Switch>
           <Route path={`/`} component={()=><Dashboard/>}/>
         </Switch>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item xs={3} md={4} align="left">
            <Typography variant="caption" align="right" gutterBottom style={{color:"gray"}}>
            Source: WHO
            </Typography>
          </Grid>
          <Grid item xs={9} md={8} align="right">
            <Typography variant="subtitle2" align="right" gutterBottom>
              <b> A public awareness initiative by</b> &nbsp;&nbsp;<img style={{width: "6vmin"}} src={logo} alt="all-logo"/>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
