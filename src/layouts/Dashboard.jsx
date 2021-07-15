import React from "react";
import { Grid} from "semantic-ui-react";
import { Switch } from "react-router-dom";
import { Route } from "react-router";
import Employers from "../pages/employer/Employers";
import EmployerDetail from "../pages/employer/EmployerDetail";
import LogIn from "./LogIn";
import CandidateFullCv from "../pages/candidate/list/CandidateFullCv"
import AddJobAdvertisement from "../pages/jobAdvertisement/AddJobAdvertisement";
import HomePage from "./HomePage";
import ActiveAndApproveJobs from "../pages/jobAdvertisement/ActiveAndApproveJobs";
import ConfirmJobAdvertisementList from "../pages/jobAdvertisement/ConfirmJobAdvertisementList";
import ActiveAndApproveJobsDetail from "../pages/jobAdvertisement/ActiveAndApproveJobsDetail";
import FavoriteJobDetail from "../pages/candidate/FavoriteJobDetail";
import PositionLevelDetail from "../pages/PositionLevelDetail";
import JobTitleDetail from "../pages/jobTitle/JobTitleDetail";
import EmployeeProfile from "../pages/employee/EmployeeProfile"
import UpdateRequest from "../pages/employee/UpdateRequest";
import UnapprovedEmployers from "../pages/employer/UnapprovedEmployers" 
import AddEducation from "../pages/candidate/add/AddEducation";
import CandidateCvList2 from "../pages/candidate/list/CandidateCVList2";
import UpdateLangLevel from "../pages/candidate/UpdateLangLevel";
import Footer from "./footer/Footer";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="14">
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/jobTitle/:id" component={JobTitleDetail} />
            <Route exact path="/employers" component={Employers} />
            <Route exact path="/employers/confirm" component={UnapprovedEmployers} />
            <Route exact path="/employers/:id" component={EmployerDetail} />
            <Route exact path="/login" component={LogIn} />
             <Route exact path="/cv" component={CandidateFullCv} />
            <Route path="/cv/:id" component={CandidateFullCv} />
            <Route exact path="/active" component={ActiveAndApproveJobs} />
            <Route exact path="/active/:id" component={ActiveAndApproveJobsDetail} />
            <Route exact path="/confirmJob" component={ConfirmJobAdvertisementList} />
            <Route exact path="/favorite" component={FavoriteJobDetail} />  
            <Route exact path="/positionDetail/:id" component={PositionLevelDetail} />
            <Route exact path="/favoritiesDetail/:id" component={FavoriteJobDetail} />
            <Route exact path="/employee" component={EmployeeProfile}/>  
            <Route exact path="/employee/updateRequest" component={UpdateRequest}/>
            <Route exact path="/employee/updateRequest/:id" component={UpdateRequest}/>
       </Switch>   
       </Grid.Column>
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
