import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateCvList from "./CandidateCvList";
import CandidateJobExpList from "./CandidateJobExpList";
import CandidateLanguageList from "./CandidateLanguageList";
import CandidateSchoolList from "./CandidateSchoolList"
import TechnologyList from "./TechnologyList";

export default function CandidateFullCv() {
  return (
    <div>
      <Grid>
        <Grid.Column width="4"></Grid.Column>
        <Grid.Column width="12">
          <Grid.Row>
            <Grid.Column width="12">
              <CandidateCvList />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width="12">
              <CandidateJobExpList />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              <Grid.Column>
                  <CandidateLanguageList/>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              <Grid.Column>
                  <CandidateSchoolList/>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
              <Grid.Column>
                  <TechnologyList/>
              </Grid.Column>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width="4"></Grid.Column>
      </Grid>
    </div>
  );
}
