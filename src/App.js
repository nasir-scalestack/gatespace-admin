import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Routes from './routes'
import store from './redux/store'

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
      <div>
        <Provider store={store}>
          <MuiThemeProvider theme={theme}>
            <Routes />
        </MuiThemeProvider>
        </Provider>
      </div>
    );
  }
}

export default App;