// import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* </header> */}
      <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
      <a href='https://mlgsapplication.azurewebsites.net/?groupId=842c1560-7174-11ed-8d50-85d682ce954a'>go to call</a>
    </div>
  );
}

export default App;
