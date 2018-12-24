import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import styles from "../../Styles";

class About extends Component {
   render(){
      const { classes } = this.props;
      return(
         <Grid container className={classes.root} direction="column" justify="center" alignItems="center" >
            <Grid item xs={12}>
               <img src={ logo } alt="" style={{ width: 80, marginBottom: 10, marginTop:50}}/>
            </Grid>
            <Grid item xs={12}>
               <Paper elevation={0}>
                  <Typography variant="h5">HotelCare</Typography>
               </Paper>
            </Grid>
            <Grid item xs={12}>
               <Paper elevation={4}>
                  <Typography component="p" className={classes.content}>Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio m.</Typography>
               </Paper>
            </Grid>
         </Grid>
      )
   }
}

About.propTypes = {
   classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
const logo = require('./../../assets/imgs/logo.svg');