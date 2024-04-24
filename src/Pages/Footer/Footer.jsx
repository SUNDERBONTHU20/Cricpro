import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Drawer, List, ListItem, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import MenuIcon from '@mui/icons-material/Menu';

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#F3F2F1',
    zIndex: 1000,
  },
  drawer: {
    width: 250,
    height:600,
  },
};

function Footer() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <BottomNavigation showLabels style={styles.footer}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Matches" icon={<SportsCricketIcon />} />
        <BottomNavigationAction label="Videos" icon={<VideoLibraryIcon />} />
        <BottomNavigationAction label="News" icon={<AnnouncementIcon />} />
        <BottomNavigationAction label="Menu" icon={<MenuIcon />} onClick={toggleDrawer} />
      </BottomNavigation>

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <List style={styles.drawer}>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Menu Item 1" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Menu Item 2" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Menu Item 3" />
          </ListItem>
          {/* Add more menu items as needed */}
        </List>
      </Drawer>
    </>
  );
}

export default Footer;
