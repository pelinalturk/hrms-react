import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateCvList from "../pages/CandidateCvList";
import CandidateJobExpList from "../pages/CandidateJobExpList";
import CandidateLanguageList from "../pages/CandidateLanguageList";
import CandidateSchoolList from "../pages/CandidateSchoolList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import Navi from "./Navi";


export default function Dashboard() {
  return (
    <div>
        <Grid>
                <Grid.Row>
                    <Grid.Column width={6}>
                      <JobAdvertisementList/>
                        <CandidateCvList/> <h4>Yabancı Dil</h4> 
                        <CandidateLanguageList/>
                    </Grid.Column>

                    <Grid.Column width={10}>
                      <h4>İş Tecrübeleri</h4>
                      <CandidateJobExpList/>
                      <h4>Okuduğu Okullar</h4>
                      <CandidateSchoolList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
    </div>
  );
}
