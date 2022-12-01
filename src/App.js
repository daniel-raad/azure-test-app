import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import Link from '@mui/material/Link';
// const link = 'https://mlgsapplication.azurewebsites.net/?groupId=842c1560-7174-11ed-8d50-85d682ce954a';

import LiveBox from './Components/LiveBox';
import UpcomingBox from './Components/UpcomingBox';
import NavbarExternal from './Components/NavbarExternal';

const link = 'https://mlgsapplication.azurewebsites.net/?groupId=842c1560-7174-11ed-8d50-85d682ce954a';
const link2 = 'https://mlgsapplication.azurewebsites.net/?groupId=80b57620-717d-11ed-8fde-b33ebe16bf5d';

function App() {
  const [tabNumber, setTabNumber] = React.useState(0);

  return (
    <div className="App">
    <NavbarExternal tabNumber={tabNumber} setTabNumber={setTabNumber} />
      <LiveBox eventLink={link} eventTitle="Club Lloyds" tagline="Account Types | Account Benefits" users="15" presenter="Ollie D - Personal Banker" />
      <LiveBox eventLink={link2} eventTitle="Everyday Offers" tagline="Account Types | Account Benefits" users="15" presenter="Daniel R - Account Specialist" />
      <Typography sx={{
        color: '#000',
        fontFamily: 'Open Sans',
        fontSize: '1.5rem',
        fontWeight: 'bold !important',
        textAlign: 'left',
        marginBottom: 1,
        alignSelf: 'flex-start',
        marginLeft: 4,
      }}>
        Upcoming
      </Typography>
      <UpcomingBox eventTitle="Everyday Offers" tagline="Account Features | Money Saving" eventDateTime="December 1st 4pm" />
      <BottomNavigation
        sx={{
          backgroundColor: '#0C593B',
          color: '#fff',
          width: '100%',
          display: 'flex !important',
          justifyContent: 'space-around !important',
          alignItems: 'center !important',
        }}
        showLabels
      >
        {/* <BottomNavigationAction sx={{ color: '#fff' }} label="Home" /> */}
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1rem',
          fontWeight: 'bold !important',
        }}>Home</Typography>
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1rem',
          fontWeight: 'bold !important',
        }}>Pay</Typography>
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1rem',
          fontWeight: 'bold !important',
        }}>Settings</Typography>
        {/* <BottomNavigationAction sx={{ color: '#fff' }} label="Favorites" />
        <BottomNavigationAction sx={{ color: '#fff' }} label="Nearby" /> */}
      </BottomNavigation>
    </div>
  );
}

export default App;
