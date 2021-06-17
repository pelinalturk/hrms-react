
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import ConfirmEmployer from './pages/employer/ConfirmEmployer';
import EmployeeCheckList from './pages/employer/EmployeeCheckList'
import JobAdvertisementList from './pages/jobAdvertisement/JobAdvertisementList'
import ConfirmJobAdvertisementList from './pages/jobAdvertisement/ConfirmJobAdvertisementList';
import AddJobAdvertisement from './pages/jobAdvertisement/AddJobAdvertisement'
import { Grid } from "semantic-ui-react";
import PositionLevel from './layouts/PositionLevel';
import JobTitleList from './pages/JobTitleList'
import JobTitle from './pages/jobTitle/JobTitle'
import SideBar from './layouts/SideBar';
import Employers from './pages/employer/Employers';
import Dashboard from './layouts/Dashboard';
import AddJobPosting from './pages/AddJobPosting'
import CandidateCvList from './pages/candidate/CandidateCvList'
import AcilirMenu from './pages/candidate/AcilirMenu';
import CandidateFullCv from './pages/candidate/CandidateFullCv';
import ContactInformationModal from './pages/candidateModals/ContactInformationModal'
function App() {
  return (
     <div className="App">
       <Navi/>
        {/* <Navi/>
         <Grid>
         <Grid.Row>
           <Grid.Column></Grid.Column>
         </Grid.Row>
       </Grid>
      <Grid>
      <Grid.Row></Grid.Row>
        <Grid.Row> 
          <Grid.Column width="6"></Grid.Column>
          <Grid.Column width="4"></Grid.Column>
          <Grid.Column width="6"></Grid.Column>
        </Grid.Row> 
        <Grid.Row></Grid.Row>
      </Grid>  
      <Grid>
        <Grid.Row>
          <Grid.Column> <JobTitle/></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="12"> <PositionLevel/></Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>  */}
      
      {/* <Grid>
        <Grid.Row>
          <Grid.Column width="2">sol</Grid.Column>
          <Grid.Column width="12">orta
          <Grid.Row>orta alt</Grid.Row>
          <Grid.Row>orta alt</Grid.Row>
          <Grid.Row>orta alt</Grid.Row>
          <Grid.Row>orta alt</Grid.Row>
          <Grid.Row>orta alt</Grid.Row>
          </Grid.Column>
          <Grid.Column width="2">sağ</Grid.Column>
        </Grid.Row>
      </Grid> */}
     
   <Dashboard/>
    
    </div>   
  );
}

export default App;
