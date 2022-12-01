import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
const link = 'https://mlgsapplication.azurewebsites.net/?groupId=842c1560-7174-11ed-8d50-85d682ce954a';

const LiveBox = () => {
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
          LIVE
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
          Club Lloyds
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
          Account Types | Account Benefits
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
          15 listening
        </Typography>
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1rem',
          fontWeight: 'bold !important',
          textAlign: 'left',
          marginBottom: 1,
        }}>
          Lloyd B - Personal Banker - Host
        </Typography>
      </Box>
    )
}



      export default LiveBox;