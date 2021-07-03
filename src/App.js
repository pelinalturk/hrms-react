import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from "./layouts/Dashboard.jsx"
import EmployeeProfile from './pages/employee/EmployeeProfile';
import UpdateCompany from './pages/employer/UpdateCompany';


function App() {
  return (
     <div className="App">
       <Navi/>
          <Dashboard/> 
      {/*  <EmployeeProfile/>  */}
      
    </div>   
  );
}

export default App;
