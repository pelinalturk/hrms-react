
import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import JobAdvertisementList from './pages/JobAdvertisementList';
import EmployeeCheckList from './pages/EmployeeCheckList';
import CandidateCvList from './pages/CandidateCvList';
import CandidateSchoolList from './pages/CandidateSchoolList';
import CandidateLanguageList from './pages/CandidateLanguageList';
import CandidateJobExpList from './pages/CandidateJobExpList';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <JobAdvertisementList/>
      <EmployeeCheckList/>
      <CandidateCvList/>
      <CandidateSchoolList/>
      <CandidateLanguageList/>
      <CandidateJobExpList/>
    </div>
  );
}

export default App;
