import React, { useEffect, useState } from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { EmployerService } from "../../services/employer/employerService";
import { Link } from 'react-router-dom'
import SideBar from '../../layouts/SideBar'
export default function Employers() {

  const [employers, setEmployers] = useState([])

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployers().then(result => setEmployers(result.data.data))
  }, [])

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4"><SideBar/></Grid.Column>
          <Grid.Column width="12">
          <Card.Group>
        {employers.map((employer) => (
          <Card fluid key={employer.id}>
          <Card.Content extra>
            <Card.Header> {employer.companyName}</Card.Header>
            <Card.Meta>{employer.email}</Card.Meta>
            <Card.Description>
              {employer.phoneNumber}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button  basic color="green">
              <Link to ={`/employers/${employer.id}`}>Detaylar</Link>  
              </Button>
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
