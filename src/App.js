// import logo from './logo.svg';
import './App.css';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// const link = 'https://mlgsapplication.azurewebsites.net/?groupId=842c1560-7174-11ed-8d50-85d682ce954a';

import LiveBox from './Components/LiveBox';
import UpcomingBox from './Components/UpcomingBox';
import NavbarExternal from './Components/NavbarExternal';

function App() {
  return (
    <div className="App">
    <NavbarExternal />
      <LiveBox eventTitle="Club Lloyds" tagline="Account Types | Account Benefits" users="15" presenter="Ollie D - Personal Banker" />
      <LiveBox eventTitle="Everyday Offers" tagline="Account Types | Account Benefits" users="15" presenter="Daniel R - Account Specialist" />
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
    </div>
  );
}

export default App;
