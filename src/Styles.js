const drawerWidth = 280;


const styles = theme => ({
   root: {
      display: 'flex',
   },
   drawer: {
      [theme.breakpoints.up('sm')]: {
         width: drawerWidth,
         flexShrink: 0,
      },
   },
   appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
         width: `calc(100% - ${drawerWidth}px)`,
      },
   },
   menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
         display: 'none',
      },
   },
   toolbar: theme.mixins.toolbar,
   logo: {
      padding: 20,
      width: 250,
      height:250,
   },
   drawerPaper: {
      width: drawerWidth,
      background: theme.palette.primary
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
   },

   // buttons
   button: {
      margin: theme.spacing.unit,
   },
   input: {
      display: 'none',
   },
});


export default styles;