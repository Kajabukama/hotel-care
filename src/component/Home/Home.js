import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from '../../Styles';

const electron = window.require("electron");
const ipcRenderer = electron.ipcRenderer;


class Home extends React.Component {
   state = {
      mobileOpen: false,
   };

   handleDrawerToggle = () => {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
   };

   showAboutWindow = (eve) => {
      ipcRenderer.send('show-about');
   }

   render() {
      const { classes, theme } = this.props;

      const drawer = (
         <div>
            <div className={classes.toolbar}>
               <img src={logo} alt="Logo" className={ classes.logo} />
            </div>
            <Divider />
            <List>
               <ListItem button>
                  <ListItemIcon> <InboxIcon /> </ListItemIcon>
                  <ListItemText>Dashboard</ListItemText>
               </ListItem>
            </List>
            <Divider />
            <List>
               <ListItem button>
                  <ListItemIcon> <InboxIcon /> </ListItemIcon>
                  <ListItemText>Manage Customer</ListItemText>
               </ListItem>
            </List>
            <Divider />
            <List>
               <ListItem button>
                  <ListItemIcon> <InboxIcon /> </ListItemIcon>
                  <ListItemText>Add Customer</ListItemText>
               </ListItem>
               <ListItem button>
                  <ListItemIcon> <InboxIcon /> </ListItemIcon>
                  <ListItemText>View Customers</ListItemText>
               </ListItem>
               <ListItem button onClick={this.showAboutWindow}>
                  <ListItemIcon> <InboxIcon /> </ListItemIcon>
                  <ListItemText>About</ListItemText>
               </ListItem>
            </List>
         </div>
      );

      return (
         <div className={classes.root}>
            
            <AppBar position="fixed" className={classes.appBar}  color="primary">
               <Toolbar>
                  <IconButton
                     color="inherit"
                     aria-label="Open drawer"
                     onClick={this.handleDrawerToggle}
                     className={classes.menuButton}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" color="inherit" noWrap> Customer Managment </Typography>
               </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
               {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
               <Hidden smUp implementation="css">
                  <Drawer
                     container={this.props.container}
                     variant="temporary"
                     anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                     open={this.state.mobileOpen}
                     onClose={this.handleDrawerToggle}
                     classes={{
                        paper: classes.drawerPaper,
                     }}
                  >
                     {drawer}
                  </Drawer>
               </Hidden>
               <Hidden xsDown implementation="css">
                  <Drawer
                     classes={{
                        paper: classes.drawerPaper,
                     }}
                     variant="permanent"
                     open
                  >
                     {drawer}
                  </Drawer>
               </Hidden>
            </nav>
            <main className={classes.content}>
               <div className={classes.toolbar} />
               <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                  elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                  velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                  Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                  viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                  Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                  at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                  ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
               <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                  facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                  tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                  consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
                  sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                  In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                  et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
                  sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
                  viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
                  ultrices sagittis orci a.
          </Typography>
            </main>
         </div>
      );
   }
}

Home.propTypes = {
   classes: PropTypes.object.isRequired,
   // Injected by the documentation to work in an iframe.
   // You won't need it on your project.
   container: PropTypes.object,
   theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
const logo = require("../../assets/imgs/logo.svg");