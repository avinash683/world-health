import React, {useEffect, useState} from "react";
import Box from "@material-ui/core/Box";
import firstIcon from "../../assets/Icon 1.png";
import secondIcon from "../../assets/Icon 2.png";
import thirdIcon from "../../assets/Icon 3.png";
import fourthIcon from "../../assets/Icon 4.png";
import Typography from "@material-ui/core/Typography";
import mainLogo from '../../assets/Mental Health For All LOGO.png';
import allLogo from '../../assets/Mental Health For All.png';
import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";
import SubmitMessage from "./SubmitMessage";
import Slide from "react-reveal";
import clickLogo from "../../assets/Click Pedge.png";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import withWidth from '@material-ui/core/withWidth';
import logo from "../../assets/Sun Pharma Logo.png";
import {isWidthDown, isWidthUp} from "@material-ui/core";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles((theme) => ({
  mainLogo : {
    [theme.breakpoints.up('sm')]: {
      width:"70%"
    },
    [theme.breakpoints.down('sm')]: {
      width:"50%"
    },
  }
}));


function Dashboard(props) {
  const [showPledge, setShowPledge] = useState(false);
  const [count, setCount] = useState(0);
  const classes = useStyles();
  useEffect(() => {
    axios.get('http://3.129.137.121:9000/api/user_count')
      .then(function (response) {
        console.log(JSON.stringify(response.data.userCount));
        setCount(response.data.userCount);
      }).catch(function (error) {
      console.log(error);
    })
  }, [showPledge]);

  const information = [{
    logo: firstIcon,
    description: <Typography variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}>
      <b><span className='bold-text'>1 in 4</span> suffers from mental illness accross the globe today
      </b>
    </Typography>
  }, {
    logo: secondIcon,
    description: <Typography  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}>
      <b>Due to mental illness every <span className='bold-text'>40 seconds</span> a person suicides</b>
    </Typography>
  }, {
    logo: thirdIcon,
    description: <Typography variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}>
      <b><span className='bold-text'>COVID-19</span> pandemic has a further impact on people's mental health</b>
    </Typography>
  }, {
    logo: fourthIcon,
    description:
      <Typography  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}>
        <b><span className='bold-text'>75%</span> of people with mental, neurological and substance use disorders receive
          no treatment for their condition at all</b>
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
          <Container maxWidth="sm">
              <Typography  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'}><b>On this occasion of</b></Typography>
              <Typography  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'h6'} align="center">
                <img className={classes.mainLogo} src={mainLogo} alt="main-logo"/>
              </Typography>
             <Typography variant="h6">
                 <img className={classes.mainLogo} src={allLogo} alt="all-logo"/>
             </Typography>
             <br/>
            {!showPledge &&
            <Typography style={{cursor:"pointer"}} variant="h6" align="left" onClick={() => setShowPledge(true)}>
              <img className={classes.mainLogo} src={clickLogo} alt="all-logo"/>
            </Typography>
            }
          </Container>
          <Typography  variant={isWidthDown('xs', props.width) ? 'subtitle2' : 'subtitle1'} align="right" gutterBottom style={{cursor : "pointer"}}>
            <b> A public awarness initiative by</b> &nbsp;&nbsp;<img style={{width: "5vmin"}} src={logo} alt="all-logo"/>
          </Typography>
        </div>
      </div>
      : <SubmitMessage count={count}/>}
  </>
}

export default withWidth()(Dashboard);

