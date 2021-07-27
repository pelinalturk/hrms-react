import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { Button, Card, Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar"
import { Link } from 'react-router-dom'
import { JobAdvertisementService } from '../../services/jobAdvertisement/jobAdvertisementService';
import JobTitleModal from "./JobTitleModal"
import { toast } from "react-toastify";

export default function JobTitleDetail() {
    let { id } = useParams();
    const [jobTitles, setJobTitles] = useState([])
let jobAdvertisementService = new  JobAdvertisementService()
    useEffect(() => {
       jobAdvertisementService.getByJobTitle(id).then((res) => setJobTitles(res.data.data))
    }, [])
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
              {jobTitles.map((jobTitle) => (
                <Card fluid key={jobTitle.id}>
                  <Card.Content>
                    <Card.Header>
                      {jobTitle.employer?.companyName}
                    </Card.Header>
                    <Card.Meta>{jobTitle.jobPosition?.title}</Card.Meta>
                    <Card.Meta>
                      {jobTitle.positionLevel?.positionLevel}
                    </Card.Meta>
                    <Card.Description>
                      {jobTitle.jobDetail}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                    <Link to ={`/jobTitle/${jobTitle.id}`}><JobTitleModal/></Link>  
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
