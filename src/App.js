import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from "./layouts/Dashboard.jsx"
import FormDeneme from './pages/FormDeneme';
import UpdateCompany from './pages/employer/UpdateCompany';
import UpdateEmployerConfirm from './pages/employee/UpdateEmployerConfirm';

function App() {
  return (
     <div className="App">
       <Navi/>
      {/*  <Dashboard/> */}
       <UpdateEmployerConfirm/> 
    </div>   
  );
}

export default App;
