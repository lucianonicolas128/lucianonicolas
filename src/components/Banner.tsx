import {Box, Typography} from '@mui/material';
import React from 'react';

const Banner = () => {
  return (
    <div style={{}}>
      <Box sx={{width: '100%', mt: -10}}>
        <video
          style={{
            width: '100%',
            maxHeight: '97vh',
            objectFit: 'cover',
            // opacity: 0.5,
          }}
          src="/background.mp4"
          autoPlay
          loop
          muted
        />
        <Box
          sx={{
            position: 'absolute',
            top: {xs: '12%', md: '35%'},
            width: '100%',
            justifyItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            textAlign: 'center',
          }}>
          <Typography sx={{fontSize: {xs: 15, md: 25}}}>
            S S R | W E B <span> | </span> D E V E L O P E R
          </Typography>
          {/* <Divider
            sx={{width: 300, height: 2, backgroundColor: '#fff'}}></Divider> */}
          <Typography sx={{fontSize: {xs: 30, md: 60}}}>
            LUCIANO NICOLÁS
          </Typography>
          <Typography sx={{fontSize: {xs: 18, md: 25}}}>
            Frontend - Backend - Ecommerce
          </Typography>
          <Typography
            sx={{fontSize: {xs: 12, md: 15}, mt: 1, fontStyle: 'italic'}}
            component="h3">
            React · React Native · NodeJS · Express · Typescript · MongoDB ·
            Swagger
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
