import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import firstIcon from "../../assets/Icon 1.png";
import secondIcon from "../../assets/Icon 2.png";
import thirdIcon from "../../assets/Icon 3.png";
import fourthIcon from "../../assets/Icon 4.png";
import Typography from "@material-ui/core/Typography";
import allLogo from '../../assets/Mental Health For All.png';
import makeStyles from "@material-ui/core/styles/makeStyles";
import SubmitMessage from "./SubmitMessage";
import Slide from "react-reveal";
import clickLogo from "../../assets/Click Pedge.png";
import Container from "@material-ui/core/Container";
import withWidth from '@material-ui/core/withWidth';
import logo from "../../assets/Sun Pharma Logo.png";
import {isWidthDown, isWidthUp} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import mainLogo from '../../assets/19-0919 World Mental health day Pledge card__Sanket.png'
const useStyles = makeStyles((theme) => ({
  mainLogo : {
    [theme.breakpoints.up('sm')]: {
      width:"80%"
    },
    [theme.breakpoints.down('sm')]: {
      width:"70%"
    },
  },
  click:{
    [theme.breakpoints.up('sm')]: {
      width:"60%"
    },
    [theme.breakpoints.down('sm')]: {
      width:"50%"
    },
  }

}));


function Dashboard(props) {
  const [showPledge, setShowPledge] = useState(false);
  const classes = useStyles();
  const information = [{
    logo: firstIcon,
    description: <Typography variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}>
      <b><span className='bold-text'>1 in 4 </span>people suffers from mental illness across the Globe!
      </b>
    </Typography>
  }, {
    logo: secondIcon,
    description: <Typography  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}>
      <b>Due to mental illness, every <span className='bold-text'>40 seconds</span> a person suicides!</b>
    </Typography>
  }, {
    logo: thirdIcon,
    description: <Typography variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}>
      <b><span className='bold-text'>COVID-19</span> pandemic has a further impact on people's mental health!</b>
    </Typography>
  }, {
    logo: fourthIcon,
    description:
      <Typography  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}>
        <b><span className='bold-text'>75%</span> of people with mental, neurological and substance use disorders receive
          no treatment for their condition at all!</b>
      </Typography>
  }]

  return <>
    {!showPledge ?
      <div>
        <br/>
        <div>
          {information.map((data, index) => {
            return <Slide left cascade>
               <Box display="flex" p={1}>
                <Box p={1}>
                  <img src={data.logo} alt="logo" className='image-description'/>
                </Box>
                <Box p={1} flexGrow={1} style={{margin: 'auto'}}>
                  <Typography>{data.description}</Typography>
                </Box>
              </Box>
            </Slide>
          })}
          <Container className="App" maxWidth="xs">
            <Typography align="center"  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}><b>On this</b></Typography>
            <Typography  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'} align="center">
                <img className={classes.mainLogo} src={mainLogo} alt="main-logo"/>
              </Typography>
             <Typography variant="h6">
                 <img style={{width:"80%"}}  src={allLogo} alt="all-logo"/>
             </Typography>
             <br/>
            {!showPledge &&
            <Typography style={{cursor:"pointer"}} variant="h6" align="left" onClick={() => setShowPledge(true)}>
              <img className={classes.click} src={clickLogo} alt="all-logo"/>
            </Typography>
            }
          </Container>
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
        </div>
      </div>
      : <SubmitMessage/>}
  </>
}

export default withWidth()(Dashboard);

