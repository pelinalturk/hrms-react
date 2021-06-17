import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobTitleList from "../pages/JobTitleList";
import { Link } from "react-router-dom";
import SideBar from "../layouts/SideBar"
import { Route } from "react-router";
import Employers from "../pages/employer/Employers";
import EmployerDetail from "../pages/employer/EmployerDetail";
import LogIn from './LogIn'
import JobTitle from '../pages/jobTitle/JobTitle'
import PositionLevel from "./PositionLevel";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          {/* <Grid.Column width="4"> </Grid.Column> */}
          <Grid.Column width="12">
            
            <Route exact path ="/" component={JobTitle}></Route>
            <Route exact path ="/" component={PositionLevel}></Route>
            <Route exact path ="/employers" component={Employers}></Route>
            <Route exact path ="/employers/:id" component={EmployerDetail}></Route>
            <Route exact path ="/login" component={LogIn}></Route> 
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
