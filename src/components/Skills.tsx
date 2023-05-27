import {Box, Container, Divider, Grid, Typography} from '@mui/material';
import React from 'react';

const Skills = () => {
  const frontend: any = [
    {
      icon: '/images/icons/react.png',
      name: 'React',
    },
    {
      icon: '/images/icons/react.png',
      name: 'React Native',
    },
    {
      icon: '/images/icons/nextjs.png',
      name: 'NextJS',
    },
  ];

  const backend: any = [
    {
      icon: '/images/icons/node.png',
      name: 'NodeJS',
    },
    {
      icon: '/images/icons/express.png',
      name: 'Express',
    },
    {
      icon: '/images/icons/swagger.png',
      name: 'Swagger',
    },
    {
      icon: '/images/icons/mongodb.png',
      name: 'MongoDB',
    },
  ];

  const other: any = [
    {
      icon: '/images/icons/git.png',
      name: 'Git',
    },
    {
      icon: '/images/icons/js.png',
      name: 'Javascript',
    },
    {
      icon: '/images/icons/ts.png',
      name: 'Typescript',
    },
  ];

  return (
    <Box sx={{backgroundColor: '#eee', mt: -1, pt: 3, pb: 5}}>
      <Container>
        <Typography
          component="h2"
          variant="h4"
          sx={{textAlign: 'center', mb: 2}}>
          Skills
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{display: 'flex', justifyContent: 'center'}}>
          {frontend?.map((skill: any) => (
            <Grid
              key={Math.random()}
              item
              xs={4}
              md={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <img
                src={skill.icon}
                alt=""
                style={{width: 40, height: 'auto'}}></img>
              <Typography sx={{ml: 1}}>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
          {backend?.map((skill: any) => (
            <Grid
              key={Math.random()}
              item
              xs={6}
              md={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <img
                src={skill.icon}
                alt=""
                style={{width: 40, height: 'auto'}}></img>
              <Typography sx={{ml: 1}}>{skill.name}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
          {other?.map((skill: any) => (
            <Grid
              key={Math.random()}
              item
              xs={4}
              md={2}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <img
                src={skill.icon}
                alt=""
                style={{width: 40, height: 'auto'}}></img>
              <Typography sx={{ml: 1, fontSize: {xs: 12, md: 16}}}>
                {skill.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
