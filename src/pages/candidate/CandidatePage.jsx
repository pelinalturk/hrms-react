import React from "react";
import { Link } from "react-router-dom";
import { Grid, Icon, Image } from "semantic-ui-react";
import CandidateFavoritiesList from "./list/CandidateFavoritiesList";
import CandidateJobApplicationsList from "./list/CandidateJobApplicationsList";
import ContactInformation from "./list/ContactInformation";
import CV from "../../images/CV.jpg"
export default function CandidatePage() {
  let id=5
  return (
    <div>
      <Grid>
        <Grid.Row><Grid.Column width="4"/>
          <Grid.Column width="8">
            <Grid.Row><ContactInformation /></Grid.Row>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width="4">
            <CandidateFavoritiesList />
          </Grid.Column>
          <Grid.Column width="8"><h3><Link to={`/cv/${id}`}><Image src={CV} size='big' /></Link></h3> </Grid.Column>
          <Grid.Column width="4"><CandidateJobApplicationsList/></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
