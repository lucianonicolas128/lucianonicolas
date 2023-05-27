import {projects} from '@/bd/projects';
import {t} from '@/translate/translate.service';
import {Box, Card, Container, Divider, Grid, Typography} from '@mui/material';
import React, {useEffect, useState} from 'react';

const Projects = () => {
  const proj = projects;
  const [lang, setLang] = useState<any>('es');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', navigator.language.slice(0, 2));
      setLang(navigator.language.slice(0, 2));
    }
  }, []);

  return (
    <Box sx={{mt: 0, display: 'flex', py: 4}}>
      <Container>
        <Divider sx={{mb: 2}}>
          <Typography component="h2" variant="h4">
            {t('projects')}
          </Typography>
        </Divider>
        <Grid container spacing={2}>
          {proj?.map((project: any) => (
            <Grid
              key={Math.random()}
              item
              xs={12}
              md={6}
              sx={{backgroundColor: 'white'}}>
              <Card
                elevation={0}
                variant="outlined"
                onClick={() =>
                  project?.url ? window.open(project.url, '_blank') : ''
                }
                sx={{
                  p: 0,
                  mt: 1,
                  borderRadius: 3,
                  transition: '300ms',
                  cursor: project?.url ? 'pointer' : 'default',
                  ':hover': {
                    transition: '300ms',
                    border: '1px solid #999',
                  },
                }}>
                <Card
                  elevation={0}
                  sx={{
                    p: 0,
                    maxHeight: 300,
                    opacity: 0.5,
                    transition: '300ms',
                    backgroundColor: '#000',
                    ':hover': {
                      transition: '300ms',
                      shadow: `0px 10px 31px -13px rgba(0,0,0,0.22);
-moz-box-shadow: 0px 17px 31px -13px rgba(0,0,0,0.22);
box-shadow: 0px 17px 31px -13px rgba(0,0,0,0.22);`,
                      opacity: 1,
                      backgroundColor: '#000',
                    },
                  }}>
                  <img
                    src={project.banner}
                    alt=""
                    style={{width: '100%'}}></img>
                </Card>
                <Typography
                  sx={{mt: 2, textAlign: 'center'}}
                  component="h3"
                  variant="h5">
                  {project.name}
                </Typography>

                <Typography sx={{mt: 0, textAlign: 'center'}}>
                  {typeof window !== 'undefined'
                    ? project.subtitle[lang]
                    : project.subtitle['es']}
                </Typography>
                <Box sx={{p: 2, pt: 0}}>
                  <Typography sx={{fontSize: 12, opacity: 0.6, mt: 0.5}}>
                    {t('scope')}
                  </Typography>
                  <Typography sx={{mt: 0, textAlign: 'start'}} component="p">
                    {project.scopes.map((p: any) => ' ' + p + '.')}
                  </Typography>
                  <Typography sx={{fontSize: 12, opacity: 0.6, mt: 0.5}}>
                    {t('technologies')}
                  </Typography>
                  <Typography sx={{mt: 0, textAlign: 'start'}} component="p">
                    {project.technologies.map((p: any) => ' ' + p + '.')}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      textAlign: 'start',
                      fontStyle: 'italic',
                      fontSize: 14,
                      opacity: 0.6,
                    }}>
                    {typeof window !== 'undefined'
                      ? project.description[lang]
                      : project.description['es']}
                  </Typography>
                  <Typography
                    sx={{
                      mt: 1,
                      textAlign: 'end',
                      fontSize: 14,
                      opacity: 0.9,
                    }}>
                    {project.time[0]} - {project.time[1]}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
