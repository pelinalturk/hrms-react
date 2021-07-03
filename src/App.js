import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from "./layouts/Dashboard.jsx"
import EmployeeProfile from './pages/employee/EmployeeProfile';
import UpdateCompany from './pages/employer/UpdateCompany';
import { Grid } from 'semantic-ui-react';
import UnapprovedEmployers from './pages/employer/UnapprovedEmployers';
import EmployeeSideBar from "./layouts/EmployeeSideBar"

function App() {
  return (
     <div className="App">
       <Navi/>
         {/*  <Dashboard/>  */}
      {/*  <EmployeeProfile/>  */}
      <Grid>
        <Grid.Row>
          <Grid.Column width="2"><EmployeeSideBar/> </Grid.Column>
          <Grid.Column width="12"> <UnapprovedEmployers/></Grid.Column>
        </Grid.Row>
      </Grid>
     
      
    </div>   
  );
}

export default App;
