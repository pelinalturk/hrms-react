import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from "./layouts/Dashboard.jsx"
import CandidatePage from './pages/candidate/CandidatePage';
import CandidateFavoritiesList from './pages/candidate/list/CandidateFavoritiesList';

function App() {
  return (
     <div className="App">
       <Navi/>
          {/*  <CandidatePage/>  */}
          <Dashboard/>
    </div>   
  );
}

export default App;
