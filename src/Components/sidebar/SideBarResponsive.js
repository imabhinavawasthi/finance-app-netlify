import * as React from 'react';
import PropTypes from 'prop-types';
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
import Toolbar from '@mui/material/Toolbar';
import SearchBox from '../searchbox/SearchBox';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Img from '../assests/lololo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Person3Icon from '@mui/icons-material/Person3';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <List>
        <ListItem sx={{ color: "white" }}>
          <ListItemButton>
            <DashboardIcon/>
            <Typography ml={2} variant="h6" noWrap component="div" >
              Dashboard
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ color: "white" }}>
          <ListItemButton>
            <BookmarkAddIcon/>
            <Typography ml={2} variant="h6" noWrap component="div" >
              Add Shares
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ color: "white" }}>
          <ListItemButton>
            <NewspaperIcon/>
            <Typography ml={2} variant="h6" noWrap component="div" >
              Read News
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ color: "white" }}>
          <ListItemButton>
            <Person3Icon/>
            <Typography ml={2} variant="h6" noWrap component="div" >
              Profile
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ color: "white" }}>
          <ListItemButton>
            <ExitToAppIcon/>
            <Typography ml={2} variant="h6" noWrap component="div" >
              Logout
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: "#B9FFF8" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          color: "#000000",
          backgroundColor: "#42C2FF",
          zIndex: 1500
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", zIndex: 1500 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box m={1} component="img" sx={{
            height: 140,
            width: 300,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: 1,
            display: "flex",
            mr: {
              xs: 0,
            },
            m: {
              xs: 0
,            }
          }}
            alt="image"
            src={Img}>
          </Box>
          {/* <Typography variant="h6" noWrap component="div" >

            FINANCE PEARLY GATES
          </Typography> */}
          <Typography variant="h6" noWrap component="div" width="70%">
            <SearchBox onChangeHandler={props.onChangeHandler} />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer mb={5}
          PaperProps={{
            sx: {
              backgroundColor: "#42C2FF",
            }
          }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor: "#42C2FF"
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "#42C2FF",
            }
          }}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor: "#42C2FF"
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
