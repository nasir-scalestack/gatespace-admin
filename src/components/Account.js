import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import Grid from '@material-ui/core/Grid';
import GridItem from "./Grid/GridItem";
import GridContainer from "./Grid/GridContainer";
import CustomInput from "./CustomInput/CustomInput";
import Button from "./CustomButtons/Button";
import Card from "./Card/Card";
import CardHeader from "./Card/CardHeader";
import CardAvatar from "./Card/CardAvatar";
import CardBody from "./Card/CardBody";
import CardFooter from "./Card/CardFooter";
import CssBaseline from '@material-ui/core/CssBaseline';

import avatar from "../assets/img/faces/airbnb.jpg";

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
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
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
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Application Details</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Airbnb"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                    value="Airbnb"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="airbnb-gatespace-io"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
             
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA" }}>App Description</InputLabel>
                  <CustomInput
                    labelText="Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world."
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                 API KEY: fb32e8b7-6bf7-4e9e-8d47-d98b6dbd6888
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>TRAVEL APP</h6>
              <h4 className={classes.cardTitle}>AirBnb</h4>
              <p className={classes.description}>
              Unforgettable trips start with Airbnb. Find adventures nearby or in faraway places and access unique homes, experiences, and places around the world.
              </p>
            </CardBody>
          </Card>
        </GridItem>
        </Grid>
      </GridContainer>
      </div>
  </React.Fragment>  );
}

export default withStyles(styles)(UserProfile);
