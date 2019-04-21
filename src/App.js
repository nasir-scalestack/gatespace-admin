import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ConnectedRouter } from 'connected-react-router'

import './App.css';
import Routes from './routes'
import store, { history }from './redux/store'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#21252e'
    },
    primary: {
      main: '#fa573a'
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme}>
              <Routes />
            </MuiThemeProvider>
          </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;