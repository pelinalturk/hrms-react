import React, { useEffect, useState } from "react";
import { Popup, Card, Image} from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { PositionLevelService } from "../services/jobAdvertisement/jobPositionLevelService";
import { Link } from "react-router-dom";

export default function PositionLevel() {

  const [positionLevels, setPositionLevels] = useState([])

  useEffect(() => {
    let jobPositionLevelService = new PositionLevelService();
    jobPositionLevelService.getPositionLevel().then(result => setPositionLevels(result.data.data))
  }, [])
  return (
    <div>
      <Grid>
        <Grid.Row>
          {/* <Grid.Column width="3"></Grid.Column> */}
          {positionLevels.map((positionLevel) =>(
          <Grid.Column width="5" key={positionLevel.id}>
              <Popup trigger={
                <Card> <Link to = {`/positionDetail/${positionLevel.id}`}>
                  <Image src={positionLevel.photo} /></Link>
                  <Card.Content>
                    <Card.Header>{positionLevel.positionLevel}</Card.Header>
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              }>
              <Popup.Header>Detay İçin Tıklayınız</Popup.Header>
            </Popup> {/* <Grid.Row><Grid.Column width="4"></Grid.Column></Grid.Row>  */}
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
