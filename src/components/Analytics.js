import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import Grid from '@material-ui/core/Grid';
// core components
import CssBaseline from '@material-ui/core/CssBaseline';
import firebase from '../firebase';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';

import GridItem from './Grid/GridItem';
import GridContainer from './Grid/GridContainer';

import Table from './Table/Table';

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
  },
  cardCategoryWhite: {
    '&,& a,& a:hover,& a:focus': {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
    },
    '& a,& a:hover,& a:focus': {
      color: '#FFFFFF',
    },
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
    '& small': {
      color: '#777',
      fontSize: '65%',
      fontWeight: '400',
      lineHeight: '1',
    },
  },
  grid: {
    width: 1550,
    margin: `0 ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
});

class UserProfile extends React.Component {
  state = {
    events: [],
  };

  componentDidMount() {
    firebase
      .database()
      .ref('events')
      .on('child_added', snapshot => {
        console.log(snapshot.val());
        const space =
          snapshot.val().uuid === 'E2C56DB5-DFFB-48D2-B060-D0F5A71096E0'
            ? 'Toronto Airport'
            : 'Denver Airport';

        let gate = '';

        if (snapshot.val().major === 1) {
          gate = 'Gate 1';
        }
        if (snapshot.val().major === 2) {
          gate = 'Gate 2';
        }
        if (snapshot.val().major === 3) {
          gate = 'Gate 3';
        }
        if (snapshot.val().major === 4) {
          gate = 'Gate 4';
        }
        if (snapshot.val().major === 5) {
          gate = 'Gate 5';
        }
        const action =
          snapshot.val().time === 'immediate' ? 'IN_APP_NOTIFICATION' : '';
        const newEvent = [
          'Nasir Dowlatkhahi',
          'Email',
          snapshot.val().proximity,
          gate,
          space,
          'No Flight',
          'No Desintation',
          snapshot.val().time,
          snapshot.val().time,
          action,
        ];

        this.setState(prevState => ({
          events: [...prevState.events, newEvent],
        }));
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <GridContainer container justify="center">
            <Grid
              spacing={24}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <GridItem xs={12} sm={12} md={12}>
                <Card>
                  <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Gate Traffic</h4>
                    <p className={classes.cardCategoryWhite}>
                      All airline data is grabbed from
                      https://aviation-edge.com/
                    </p>
                  </CardHeader>
                  <CardBody>
                    <Table
                      tableHeaderColor="primary"
                      tableHead={[
                        'Name',
                        'User Source',
                        'Proximity',
                        'Gate',
                        'Airport',
                        'Flight #',
                        'Flight Destination',
                        'Gate Enter',
                        'Gate Exit',
                        'Action',
                      ]}
                      tableData={[...this.state.events]}
                    />
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </GridContainer>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(UserProfile);
