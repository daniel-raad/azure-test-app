import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const link = 'https://mlgsapplication.azurewebsites.net/?groupId=842c1560-7174-11ed-8d50-85d682ce954a';
const link2 = 'https://mlgsapplication.azurewebsites.net/?groupId=80b57620-717d-11ed-8fde-b33ebe16bf5d';

const LiveBox = ({ eventTitle, tagline, users, presenter, eventLink }) => {
    return (
        <Box
        sx={{
          width: 300,
          height: 200,
          backgroundColor: '#006A4D',
          borderRadius: 5,
          margin: 4,
          marginBottom: 2,
          padding: '28px'
        }}
      >
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1rem',
          fontWeight: 'bold !important',
          textAlign: 'left',
          marginBottom: 1,
        }}>
          {/* <FontAwesomeIcon style={{ marginRight: 10 }} icon={faVolumeHigh} /> */}
          LIVE NOW
        </Typography>
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1.5rem',
          fontWeight: 'bold !important',
          textAlign: 'left',
          marginBottom: 1,
        }}>
        <Link sx={{
            color: '#fff',
            fontFamily: 'Open Sans',
            fontSize: '1.5rem',
            fontWeight: 'bold !important',
            textAlign: 'left',
            marginBottom: 1,
          }}
          href={link}
        >
          {eventTitle}
        </Link>
        </Typography>
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1rem',
          fontWeight: 'bold !important',
          textAlign: 'left',
          marginBottom: 1,
        }}>
          {tagline}
        </Typography>
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1rem',
          fontWeight: 'bold !important',
          textAlign: 'left',
          marginBottom: 4,
        }}>
          {/* <FontAwesomeIcon style={{ marginRight: 10 }} icon={faUser} /> */}
          {users} listening
        </Typography>
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1rem',
          fontWeight: 'bold !important',
          textAlign: 'left',
          marginBottom: 1,
        }}>
          {presenter}
        </Typography>
      </Box>
    )
}



      export default LiveBox;