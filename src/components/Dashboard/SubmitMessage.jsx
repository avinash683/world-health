import React, {useEffect} from "react";
import thankyouLogo from '../../assets/Image Page 2.png';
import logo from '../../assets/Sun Pharma Logo.png';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
function SubmitMessage({count}) {
  return <div>
      <span className="App">
        <br/>
        <br/>
        <Typography variant="h4">
            <span className='bold-text'>Thankyou</span>
          </Typography>
        <br/>
        <Typography className="count">{count}</Typography>
        <br/>
        <Typography variant="h6">
          <img className="mainLogo" src={thankyouLogo} alt="main-logo"/>
        </Typography>
        <br/>
         <Box display="grid" justifyContent="center" m={1} p={1}>
           <Typography variant="h5">
              For joining us
          </Typography>
            <Typography variant="h5">
              I am taking the <b className='bold-text'>pledge</b> to have
          </Typography>
            <Typography variant="h4">
              Mental Health for All
          </Typography>
         </Box>
       <Typography variant="subtitle1" align="right" gutterBottom>
          <b> A public awarness initiative by</b> &nbsp;&nbsp;<img style={{width: "4.7vmin"}} src={logo} alt="all-logo"/>
       </Typography>
      </span>
  </div>
}


export default SubmitMessage
