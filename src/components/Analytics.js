import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Grid from '@material-ui/core/Grid';
// core components
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';

import GridItem from "./Grid/GridItem";
import GridContainer from "./Grid/GridContainer";
import CssBaseline from '@material-ui/core/CssBaseline';

import Table from "./Table/Table";

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
        paddingTop: 40
      },
   cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  grid: {
    width: 1550,
    margin: `0 ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)'
    }
  }
});

function UserProfile(props) {
  const { classes } = props;
  return (
        <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
      <GridContainer container justify="center">
       <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
       <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Gate Traffic</h4>
            <p className={classes.cardCategoryWhite}>
              Events table for gate traffic
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "User Source", "Provider", "Gate", "Flight #", "Flight Destination", "Gate Enter", "Gate Exit", "Action"]}
              tableData={[
                ["Bobby Bobby", "Facebook", "Denver Airport", "Gate 5", "JPN-123", "Japan", "April 22 @ 2:51 pm", "April 22 @ 4:51 pm", "PUSH_NOTIFICATION"],
                ["Nasir Dowlatkhahi", "Email", "Denver Airport", "Gate 3", "AUS-45F", "Australia", "April 19 @ 1:00 pm", "April 19 @ 4:51 pm", "SMS"],
                ["Armin Khan", "Google Plus", "Denver Airport", "Gate 1", "IRN-445", "Iran", "April 15 @ 5:00 am", "April 15 @ 12:09 pm", "PUSH_NOTIFICATION"],

              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
        </Grid>
      </GridContainer>
      </div>
  </React.Fragment>  );
}

export default withStyles(styles)(UserProfile);
