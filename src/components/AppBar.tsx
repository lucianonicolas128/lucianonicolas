import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Head from 'next/head';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {ListItemIcon} from '@mui/material';
import {useRouter} from 'next/router';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems: any = [
  {
    icon: <GitHubIcon sx={{mr: {xs: 0, md: 1}}} />,
    name: 'Github',
    url: 'https://github.com/lucianonicolas128',
  },
  {
    icon: <LinkedInIcon sx={{mr: {xs: 0, md: 1}}} />,
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/lucianoprina/',
  },
];

export default function DrawerAppBar(props: Props) {
  const router = useRouter();
  const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'center'}}>
      <Typography variant="h6" sx={{my: 2}}>
        Luciano Nicolás
      </Typography>
      <Divider />
      <List>
        {navItems.map((item: any) => (
          <ListItem
            key={Math.random()}
            disablePadding
            onClick={() => navigate(item.url)}>
            <ListItemButton sx={{textAlign: 'center'}}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navigate = (url: any) => {
    router.push(url, '_blank');
  };

  return (
    <Box sx={{display: 'flex'}}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Luciano Nicolas Prina - Programador especializado en React, React Native, Node.js, Express, MongoDB, microservicios, Next.js y Swagger. Explora mi web portfolio para ver mis proyectos y habilidades."
        />
        <meta
          name="keywords"
          content="Luciano Nicolas Prina, programador, desarrollo web, React, React Native, Node.js, Express, MongoDB, microservicios, Next.js, Swagger"
        />
        <meta name="author" content="Luciano Nicolas Prina" />
        <title>Luciano Nicolas Prina - Portfolio</title>

        <meta property="og:title" content="Luciano Nicolas Prina - Portfolio" />
        <meta
          property="og:description"
          content="Programador especializado en React, React Native, Node.js, Express, MongoDB, microservicios, Next.js y Swagger. Explora mi web portfolio para ver mis proyectos y habilidades."
        />
        <meta property="og:image" content="ruta_a_la_imagen.png" />
        <meta property="og:url" content="https://www.tu-web-portfolio.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Luciano Nicolas Prina - Portfolio"
        />
        <meta
          name="twitter:description"
          content="Programador especializado en React, React Native, Node.js, Express, MongoDB, microservicios, Next.js y Swagger. Explora mi web portfolio para ver mis proyectos y habilidades."
        />
        <meta name="twitter:image" content="ruta_a_la_imagen.png" />
      </Head>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{backgroundColor: '#222'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: 'none'}}}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}>
            Luciano Nicolás | Full Stack web Developer
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            {navItems.map((item: any) => (
              <Button
                key={Math.random()}
                sx={{color: '#fff'}}
                onClick={() => navigate(item.url)}>
                {item.icon} {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{p: 3}}>
        <Toolbar />
      </Box>
    </Box>
  );
}
