import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import MenuRoutes from './Menu';

import { removeActiveApp } from '../redux/modules/user';

const styles = theme => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white',

  },
  inline: {
    display: 'inline'
  },
  flex: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center'
    }
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  productLogo: {
    display: 'inline-block',
    borderLeft: `1px solid ${theme.palette.grey['A100']}`,
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up('md')]: {
      paddingTop: '1.5em'
    }
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
    [theme.breakpoints.up('md')]: {
      paddingTop: '0.8em'
    }
  },
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  iconButton: {
    float: 'right'
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto'
  }
})

class Topbar extends Component {

  state = {
    value: 0,
    menuDrawer: false,
    anchorEl: null,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  mobileMenuOpen = (event) => {
    this.setState({ menuDrawer: true });
  }

  mobileMenuClose = (event) => {
    this.setState({ menuDrawer: false });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  current = () => {
    const location = this.props.location.pathname;
    if(location === '/') {
      return 0
    }
    if(location === '/analytics') {
      return 1
    }
    if(location === '/manage-gates') {
      return 2
    }
    if(location === '/manage-account') {
      return 3
    }
    if(location === '/docs') {
      return 4
    }
  }
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSwitchProject = () => {
    this.handleClose();
    this.props.removeActiveApp();
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {

    const { classes, user} = this.props;
    const { anchorEl } = this.state;

    const open = Boolean(anchorEl);

    return (
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
                {
                  user.active_app && (
                    <>
                    <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleSwitchProject}>Switch Project</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
                    </>
                  )
                }
            <Grid container spacing={24} alignItems="baseline">
              <Grid item xs={12} className={classes.flex}>
                  <div className={classes.inline}>
                    <Typography variant="h6" color="inherit" noWrap>
                      <Link to='/' className={classes.link}>
                        <span className={classes.tagline}>Gatespace</span>
                      </Link>
                    </Typography>
                  </div>
                  { !this.props.noTabs && (
                    <React.Fragment>
                      <div className={classes.productLogo}>
                        <Typography>
                          { user.app_name }
                        </Typography>
                      </div>
                      <div className={classes.iconContainer}>
                        <IconButton onClick={this.mobileMenuOpen} className={classes.iconButton} color="inherit" aria-label="Menu">
                          <MenuIcon />
                        </IconButton>
                      </div>
                      <div className={classes.tabContainer}>
                        <SwipeableDrawer anchor="right" open={this.state.menuDrawer} onClose={this.mobileMenuClose} onOpen={this.mobileMenuOpen}>
                          <AppBar title="Menu" />
                          <List>
                            {MenuRoutes.map((item, index) => (
                              <ListItem component={Link} to={{pathname: item.pathname, search: this.props.location.search}} button key={item.label}>
                                <ListItemText primary={item.label} />
                              </ListItem>
                            ))}
                          </List>
                        </SwipeableDrawer>
                        <Tabs
                          value={this.current() || this.state.value}
                          indicatorColor="primary"
                          textColor="primary"
                          onChange={this.handleChange}
                        >
                          {MenuRoutes.map((item, index) => (
                            <Tab key={index} component={Link} to={{pathname: item.pathname, search: this.props.location.search}} classes={{root: classes.tabItem}} label={item.label} />
                          ))}
                        </Tabs>
                      </div>
                    </React.Fragment>
                  )}
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  removeActiveApp: () => dispatch(removeActiveApp()),
  goToPage: (path) => dispatch(push(path))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Topbar)))
