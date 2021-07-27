import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Image, Grid } from "semantic-ui-react";
import { PositionLevelService } from "../services/jobAdvertisement/jobPositionLevelService";
import SideBar from "../layouts/SideBar"
import { Link } from 'react-router-dom'
import JobTitleModal from "./jobTitle/JobTitleModal";

export default function PositionLevelDetail() {
  let { id } = useParams();
  const [positionLevels, setPositionLevels] = useState([]);
let jobPositionLevelService = new PositionLevelService();

  useEffect(() => {
    jobPositionLevelService
      .getByPosition(id)
      .then((result) => setPositionLevels(result.data.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="5"><SideBar/></Grid.Column>
          <Grid.Column width="11">
            <Card.Group>
              {positionLevels.map((positionLevel) => (
                <Card fluid key={positionLevel.id}>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src={positionLevel.positionLevel?.photo}
                    />
                    <Card.Header>
                      {positionLevel.employer?.companyName}
                    </Card.Header>
                    <Card.Meta>{positionLevel.jobPosition?.title}</Card.Meta>
                    <Card.Meta>
                      {positionLevel.positionLevel?.positionLevel}
                    </Card.Meta>
                    <Card.Description>
                      {positionLevel.jobDetail}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                    <Link to ={`/positionDetail/${positionLevel.id}`}><JobTitleModal/></Link>  
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
