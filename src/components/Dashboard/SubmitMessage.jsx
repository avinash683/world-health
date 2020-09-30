import React, {useEffect, useState} from "react";
import thankyouLogo from '../../assets/Image Page 2.png';
import logo from '../../assets/Sun Pharma Logo.png';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Jump from 'react-reveal/Jump';
import {isWidthDown} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import axios from "axios";
function SubmitMessage(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('http://3.129.137.121:9000/api/user_count')
      .then(function (response) {
        console.log(JSON.stringify(response.data.userCount));
        setCount(response.data.userCount);
      }).catch(function (error) {
      console.log(error);
    })
  }, []);

  return <div style={{height:"100vh"}}>
      <span className="App">
        <br/>
        <Box display="flex" justifyContent="center" m={1} p={1}>
        <Box p={1} >
           <Typography className="count colorCount">{count}</Typography>
        </Box>
        <Box p={1} style={{margin: isWidthDown('xs', props.width) ? 'auto' : 'inherit'}}>
            <Typography variant="h3" align="left">
              <b className="colorFont">Pledges</b>
          </Typography>
            <Typography variant="h5">
              <b className='bold-text'>& counting...</b>
          </Typography>
        </Box>
      </Box>
        <br/>
       { <Typography variant="h6">
          <img style={{width : "50%"}} src={thankyouLogo} alt="main-logo"/>
        </Typography>}
        <br/>
         <Box display="grid" justifyContent="center" m={1} p={1}>
           <Typography variant="h5">
              <b><span className='bold-text'>Thank you,</span> For joining us</b>
          </Typography>
            <Typography variant="h5">
              <b>in taking the <span className='bold-text'>pledge</span> to have</b>
          </Typography>
            <Typography variant="h4" style={{color:' #245d2b'}}>
              <b>Mental Health for All</b>
          </Typography>
         </Box>
       <Typography variant="subtitle1" align="right" gutterBottom>
          <b> A public awareness initiative by</b> &nbsp;&nbsp;<img style={{width: "7vmin"}} src={logo} alt="all-logo"/>
       </Typography>
      </span>
  </div>
}

export default withWidth()(SubmitMessage);
