import React, { Component } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from './Routes';
import Theme from "./Theme";

import "./common.css";


class App extends Component {
	render() {
		return (
			<React.Fragment>
				<MuiThemeProvider theme={ Theme }>
					<CssBaseline />
					<Routes />
				</MuiThemeProvider>;
			</React.Fragment>
		)
	}
}

export default App;
