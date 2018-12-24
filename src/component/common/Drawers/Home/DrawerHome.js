import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";

import styles from './../../../../theme';

class  DrawerHome extends React.Component {
   render(){
      const { classes, theme } = this.props;

      return (
         <div>
            <div className={classes.toolbar}>
               <div className={classes.logo}>
                  <img src={require('../../../../assets/imgs/logo.svg')} alt="Logo" />
               </div>
            </div>
            <Divider />
            <List>
               {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItem>
               ))}
            </List>
            <Divider />
            <List>
               {['All mail', 'Trash', 'About'].map((text, index) => (
                  <ListItem button key={text}>
                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                     <ListItemText primary={text} />
                  </ListItem>
               ))}
            </List>
         </div>
      )
   }
};

// export default DrawerHome;
DrawerHome.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object,
  theme: PropTypes.object.isRequired
};
export default withStyles(styles, { withTheme: true })(DrawerHome);