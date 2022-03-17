import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Person from './Person';
import Service from './Service';
import  Grid from '@mui/material/Grid';
import  Button  from '@mui/material/Button';
const drawerWidth = '100%';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex',justifyContent:'center' }}>
      <CssBaseline />
     
      <Button
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ ml: 2, ...(open && { display: 'none' }) }}
          >
            create person && service
          </Button>
      <Drawer
        sx={{
          width: 10,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="bottom"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ width: '100%',justifyContent:'center' ,display:'flex'}}>
      <Grid container  sx={{ justifyContent:'center',display:'flex',width: '70%'}}>
        <Grid item xs={6}>
        <Person />
        </Grid>
        <Grid item xs={6}>
        <Service />
        </Grid>
        
      </Grid>
    </Box>
       
      </Drawer>
      
     
    </Box>
  );
}