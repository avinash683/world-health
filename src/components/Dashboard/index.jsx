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
import logo from "../../assets/Sun Pharma Logo.png";
const useStyles = makeStyles((theme) => ({}));
function Dashboard() {
  const [showPledge, setShowPledge] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get('http://3.14.4.162:9000/api/user_count')
      .then(function (response) {
        console.log(JSON.stringify(response.data.userCount));
        setCount(response.data.userCount);
      }).catch(function (error) {
      console.log(error);
    })
  }, [showPledge]);

  const information = [{
    logo: firstIcon,
    description: <Typography variant="h6">
      <b><span className='bold-text'>1 in 4</span> suffers from mental illness accross the globe today
      </b>
    </Typography>
  }, {
    logo: secondIcon,
    description: <Typography variant="h6">
      <b>Due to mental illness every <span className='bold-text'>40 seconds</span> a person suicides</b>
    </Typography>
  }, {
    logo: thirdIcon,
    description: <Typography variant="h6">
      <b><span className='bold-text'>COVID-19</span> pandemic has a further impact on people's mental health</b>
    </Typography>
  }, {
    logo: fourthIcon,
    description:
      <Typography variant="h6">
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
                  <Typography variant="h6">{data.description}</Typography>
                </Box>
              </Box>
            </Slide>
          })}
          <Container maxWidth="sm">
              <Typography variant="h6"><b>On this occasion of</b></Typography>
              <br/>
              <Typography variant="h6" align="center">
                <img className='mainLogo' src={mainLogo} alt="main-logo"/>
              </Typography>
              <br/>
             <Typography variant="h6">
                   <img className='mainLogo' src={allLogo} alt="all-logo"/>
             </Typography>
             <br/>

            {!showPledge &&
            <Typography style={{cursor:"pointer"}} variant="h6" align="left" onClick={() => setShowPledge(true)}>
              <img style={{width:"60%"}} src={clickLogo} alt="all-logo"/>
            </Typography>
            }
          </Container>
          <Typography variant="subtitle1" align="right" gutterBottom style={{cursor : "pointer"}}>
            <b> A public awarness initiative by</b> &nbsp;&nbsp;<img style={{width: "4.7vmin"}} src={logo} alt="all-logo"/>
          </Typography>
        </div>
      </div>
      : <SubmitMessage count={count}/>}
  </>
}


export default Dashboard
