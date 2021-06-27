import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from "./layouts/Dashboard.jsx"
function App() {
  return (
     <div className="App">
       <Navi/>
      <Dashboard/>   
    </div>   
  );
}

export default App;
