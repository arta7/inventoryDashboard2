import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500',justifyContent:'center',alignItems:'center' }} >
      <CircularProgress color="success" />
      <label for="input-id" style={{color:'black',fontSize:20,marginTop:20}}>در حال دریافت داده  </label>
    </Stack>
  );
}