import { createMuiTheme } from "@material-ui/core/styles";
const Theme = createMuiTheme({
   typography: {
      useNextVariants: true,
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
      ].join(','),
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
   },
   background: {
      paper: "#fff",
      default: "#fafafa",
   },
   action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(0, 0, 0, 0.14)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
   },
   shape:{
      borderRadius: 4,
   },
   spacing:{
      unit: 8,
   },
   mixins:{
      toolbar:{
         minHeight: 66,
      }
   }
   ,
   palette: {
      common: {
         black: "#000",
         white: "#fff"
      },
      type: "dark",
      primary: {
         light: "#7986cb",
         main: "#01a3a4",
         dark: "#303f9f",
         contrastText: "#fff",
      },
      secondary: {
         light: "#ff4081",
         main: "#f50057",
         dark: "#c51162",
         contrastText: "#fff",
      },
      error: {
         light: "#e57373",
         main: "#f44336",
         dark: "#d32f2f",
         contrastText: "#fff",
      },
      text: {
         primary: "rgba(0, 0, 0, 0.87)",
         secondary: "rgba(0, 0, 0, 0.54)",
         disabled: "rgba(0, 0, 0, 0.38)",
         hint: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)"
   },

});

export default Theme;