
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import AddJobAdvertisement from './pages/AddJobAdvertisement';
import { Grid } from 'semantic-ui-react';
import JobAdvertisementList from './pages/JobAdvertisementList';
function App() {
  return (
     <div className="App">
       <Navi/>
       <Grid>
         <Grid.Row>
           <Grid.Column></Grid.Column>
         </Grid.Row>
       </Grid>

      <Grid>
        <Grid.Row> 
          <Grid.Column width="6"><AddJobAdvertisement/></Grid.Column>
          <Grid.Column width="6"><JobAdvertisementList/></Grid.Column>
          <Grid.Column width="4"></Grid.Column>
        </Grid.Row> 
      </Grid> 
     
    </div>  
  );
}

export default App;
