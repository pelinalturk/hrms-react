import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import CandidateCvList from "../pages/CandidateCvList";
import CandidateJobExpList from "../pages/CandidateJobExpList";
import CandidateLanguageList from "../pages/CandidateLanguageList";
import CandidateSchoolList from "../pages/CandidateSchoolList";
import CardCarousel from "../pages/CardCarousel";
import EmployeeCheckList from "../pages/EmployeeCheckList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import Navi from "./Navi";
import { Header } from "semantic-ui-react";
import { Image, List } from "semantic-ui-react";
import { Button, Card, Divider, Placeholder } from "semantic-ui-react";
import JobTitleList from "../pages/JobTitleList";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="16"></Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
        <Grid.Column width="2" />
          <Grid.Column width="12">Son Eklenen İş ilanları
          
         <Link><JobTitleList/></Link> 
          </Grid.Column>
          <Grid.Column width="2" />
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column width="16"></Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <Grid.Column width="16"></Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid>
        <Grid.Row>
          <GridColumn width="4"></GridColumn>
          <Grid.Column width="8">
            <CardCarousel />
          </Grid.Column>
          <GridColumn width="4"></GridColumn>
        </Grid.Row>
      </Grid> 
    </div>
  );
}
