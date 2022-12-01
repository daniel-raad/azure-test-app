import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BoxSx({ eventTitle, eventDateTime, tagline }) {
  // const { eventTitle } = props;
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 200,
          backgroundColor: '#006A4D',
          borderRadius: 5,
          margin: 4,
          marginTop: 2,
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
          {eventDateTime}
        </Typography>
        <Typography sx={{
          color: '#fff',
          fontFamily: 'Open Sans',
          fontSize: '1.5rem',
          fontWeight: 'bold !important',
          textAlign: 'left',
          marginBottom: 1,
        }}>
          {eventTitle}
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
        <Button sx={{
          backgroundColor: '#fff',
          color: '#0C593B',
          marginTop: 4,
          padding: '16px 75px !important',
          borderRadius: '0 !important',
          fontSize: 16,
          fontFamily: 'Open Sans',
        }} variant="contained">
          Set Reminder
        </Button>
      </Box>
    </>
  );
}