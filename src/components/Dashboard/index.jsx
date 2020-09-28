import React from "react";
import Grid from "@material-ui/core/Grid";
import firstIcon from "../../assets/Icon 1.png";
import secondIcon from "../../assets/Icon 2.png";
import thirdIcon from "../../assets/Icon 3.png";
import fourthIcon from "../../assets/Icon 4.png";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Dashboard() {
  const information = [{
    logo: firstIcon,
    description: <Typography variant="h6">
      <span className='bold-text'>1 in 4</span> suffers from mental illness accross the globe today
    </Typography>
  }, {
    logo: secondIcon,
    description: <Typography variant="h6">
      Due to mental illness every <span className='bold-text'>40 seconds</span> a person suicides
    </Typography>
  }, {
    logo: thirdIcon,
    description: <Typography variant="h6">
      <span className='bold-text'>COVID-19</span> pandemic has a further impact on people's mental health
    </Typography>
  }, {
    logo: fourthIcon,
    description:
      <Typography variant="h6">
        <span className='bold-text'>75%</span> of people with mental, neurological and substance use disorders receive
        no treatment for their condition at all
      </Typography>
  }]

  return <div>
    <div style={{width: '100%'}}>
      {information.map((data, index) => {
        return <Box display="flex" p={1}>
          <Box p={1}>
            <img src={data.logo} alt="logo" className='image-description'/>
          </Box>
          <Box p={1} flexGrow={1} style={{margin:'auto'}}>
            <Typography variant="h6">{data.description}</Typography>
          </Box>
        </Box>
      })}
    </div>
  </div>
}


export default Dashboard