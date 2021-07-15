import React from "react";
import { Grid } from "semantic-ui-react";
import JobTitle from "../pages/jobTitle/JobTitle";
import Footer from "./footer/Footer";
import PositionLevel from "./PositionLevel";
import SideBar from "./SideBar"
export default function HomePage() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="16">
            <JobTitle />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="4"> <SideBar/> </Grid.Column>
          <Grid.Column width="10">
            <PositionLevel />
          </Grid.Column>
         
        </Grid.Row>
        <Grid.Row>
          
        {/*     <Footer/> */}
          
        </Grid.Row>
      </Grid>
    </div>
  );
}
