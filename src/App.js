
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import ConfirmJobAdvertisementList from './pages/jobAdvertisement/ConfirmJobAdvertisementList';
import Dashboard from "./layouts/Dashboard.jsx"
import CitiesFilter from './layouts/filtered/CitiesFilter';
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
     
   
   {/* <Grid>
     <Grid.Row>
       <Grid.Column width="4"></Grid.Column>
       <Grid.Column width="8"> <AddJobAdvertisement/> </Grid.Column>
       <Grid.Column width="4"></Grid.Column>
     </Grid.Row>
   </Grid> */}
     <Dashboard/>   
    
    
    
    </div>   
  );
}

export default App;
