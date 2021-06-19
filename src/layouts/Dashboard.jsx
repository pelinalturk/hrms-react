import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobTitleList from "../pages/JobTitleList";
import { Link, Switch } from "react-router-dom";
import SideBar from "../layouts/SideBar";
import { Route } from "react-router";
import Employers from "../pages/employer/Employers";
import EmployerDetail from "../pages/employer/EmployerDetail";
import LogIn from "./LogIn";
import JobTitle from "../pages/jobTitle/JobTitle";
import PositionLevel from "./PositionLevel";
import CandidateFullCv from "../pages/candidate/CandidateFullCv";
import AddJobAdvertisement from "../pages/jobAdvertisement/AddJobAdvertisement";
import HomePage from "./HomePage";
import ActiveAndApproveJobs from "../pages/jobAdvertisement/ActiveAndApproveJobs";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="14">
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/employers" component={Employers} />
            <Route exact path="/employers/:id" component={EmployerDetail} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/cv" component={CandidateFullCv} />
            <Route exact path="/active" component={ActiveAndApproveJobs} />
       </Switch>   </Grid.Column>
        </Grid.Row>
        <Grid>
          <Grid.Row>
            <Grid.Column width="4"></Grid.Column>
            <Grid.Column width="8">
              <Switch>
              <Route exact path="/add" component={AddJobAdvertisement} /></Switch>
            </Grid.Column>
            <Grid.Column width="4"></Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    </div>
  );
}
