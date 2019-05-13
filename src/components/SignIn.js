/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../redux/modules/auth';

import GridContainer from './Grid/GridContainer';

import Topbar from './Topbar';

const backgroundShape = require('../assets/img/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['100'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 200,
    paddingTop: 40,
    height: 1000,
  },
  margin: {
    margin: theme.spacing.unit * 2,
  },
  padding: {
    padding: theme.spacing.unit,
  },
});

class SignIn extends React.Component {
  state = {
    email: null,
    password: null,
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.props.history.push('/');
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Topbar noTabs />

        <div className={classes.root}>
          <GridContainer container justify="center">
            <Grid
              spacing={24}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Paper className={classes.padding}>
                <div className={classes.margin}>
                  <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                      <Face />
                    </Grid>
                    <Grid item md sm xs>
                      <TextField
                        id="username"
                        label="Username"
                        type="email"
                        fullWidth
                        autoFocus
                        required
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={8} alignItems="flex-end">
                    <Grid item>
                      <Fingerprint />
                    </Grid>
                    <Grid item md sm xs>
                      <TextField
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        required
                        value={this.state.password}
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                      />
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" justify="space-between">
                    <Grid item>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Remember me"
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        disableFocusRipple
                        disableRipple
                        style={{ textTransform: 'none' }}
                        variant="text"
                        color="primary"
                      >
                        Forgot password ?
                      </Button>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    justify="center"
                    style={{ marginTop: '10px' }}
                  >
                    <Button
                      component={Link}
                      onClick={signIn(this.state.email, this.state.password)}
                      variant="outlined"
                      color="primary"
                      style={{ textTransform: 'none' }}
                    >
                      Login
                    </Button>
                  </Grid>
                </div>
              </Paper>
            </Grid>
          </GridContainer>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default withRouter(
  connect(
    mapStateToProps,
    { signIn }
  )(withStyles(styles)(SignIn))
);
