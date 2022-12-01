import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const NavbarExternal = ({ tabNumber, setTabNumber }) => {
//   const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabNumber(newValue);
  };

  return (
    <Box sx={{
      width: '100%',
      bgcolor: '#0C593B',
      display: 'flex',
      justifyContent: 'center',
      // height: 70,
      alignItems: 'center'
    }}>
      <Tabs value={tabNumber} onChange={handleChange} aria-label="basic tabs example">
        <Tab sx={{ color: tabNumber === 1 ? '#fff' : '#fff' }} label="For You" {...a11yProps(0)} />
        <Tab sx={{ color: tabNumber === 2 ? '#fff' : '#fff' }} label="Live" {...a11yProps(1)} />
        <Tab sx={{ color: tabNumber === 3 ? '#fff' : '#fff' }} label="Upcoming" {...a11yProps(2)} />
      </Tabs>
    </Box>
  );
}

export default NavbarExternal;