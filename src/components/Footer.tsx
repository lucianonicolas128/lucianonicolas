import {Box, Container} from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const contact: any = [
    {
      icon: <LinkedInIcon sx={{fontSize: 40}} />,
      url: 'https://www.linkedin.com/in/lucianoprina/',
    },
    {
      icon: <GitHubIcon sx={{fontSize: 40}} />,
      url: 'https://github.com/lucianonicolas128',
    },
    {
      icon: <WhatsAppIcon sx={{fontSize: 40}} />,
      url: 'https://wa.me/5493435165717',
    },
  ];
  return (
    <Box sx={{backgroundColor: '#111', color: '#fff', p: 3}}>
      <Container
        sx={{
          textAlign: 'center',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}>
        {contact.map((c: any) => (
          <Box
            key={Math.random()}
            onClick={() => window.open(c.url, '_blank')}
            sx={{cursor: 'pointer', mx: 1}}>
            {c.icon}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Footer;
