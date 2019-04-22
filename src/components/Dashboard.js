import React,  { Component } from 'react';
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import DateRange from "@material-ui/icons/DateRange";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

// core components
import GridItem from "./Grid/GridItem";
import GridContainer from "./Grid/GridContainer";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader";
import CardIcon from "./Card/CardIcon";
import CardBody from "./Card/CardBody";
import CardFooter from "./Card/CardFooter";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "../constants/charts";

import dashboardStyle from "../assets/jss/material-dashboard-react/views/dashboardStyle";

import Topbar from './Topbar';

class Dashboard extends Component {

  state = {
    value: 0

  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>

        <GridContainer container justify="center">
        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
          <GridItem xs={12} sm={6} md={3}>
          
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Downloaded Data</p>
                <h3 className={classes.cardTitle}>
                  0/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 7 Days
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Daily Budget</p>
                <h3 className={classes.cardTitle}>$10.00</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Update daily limit
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="danger" stats icon>
                <CardIcon color="danger">
                  <Icon>info_outline</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Active Gates</p>
                <h3 className={classes.cardTitle}>0</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  Manage Gates
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Active Audience</p>
                <h3 className={classes.cardTitle}>0</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          </Grid>
        </GridContainer>
        <GridContainer container justify="center">
        <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>

          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Gate Events</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 5%
                  </span>{" "}
                  increase in traffic today.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>API Usage</h4>
                <p className={classes.cardCategory}>
                  iOS & Android are combined
                </p>
              </CardBody>
              <CardFooter chart>
              <div className={classes.stats}>
                  <AccessTime /> updated 10 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Audience Engagement</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 10 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          </Grid>
        </GridContainer>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(dashboardStyle)(Dashboard);
