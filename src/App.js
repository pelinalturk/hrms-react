
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import ConfirmEmployer from './pages/employer/ConfirmEmployer';
function App() {
  return (
     <div className="App">
        <Navi/>
      {/*  <Grid>
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
      </Grid>  */}
     <ConfirmEmployer/>
    </div>   
  );
}

export default App;
