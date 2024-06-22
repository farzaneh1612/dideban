import React from 'react'
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

export default function page() {
  return (
    <Container>
    <Grid container mt={0} spacing={2}>       
    <Typography py={4} variant='h3' color="text.gray" >به هیرکانیکو خوش آمدیدلطفا صفحه مورد نظر خود را از  منو انتخاب کنید </Typography>
 </Grid>
 </Container>
  )
}
