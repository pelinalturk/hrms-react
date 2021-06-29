import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { Header, Image, Table, Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar";
import { EmployerService } from "../../services/employerService";
import UpdateModal from "./employerModals/UpdateModal";
import { Link } from 'react-router-dom'

export default function UpdateCompany() {
    const [employer, setEmployer] = useState({})

    useEffect(() => {
           let employerService = new EmployerService()
           employerService.getById(40).then((result) => setEmployer(result.data))
    }, [])
  return (
    //solda sidebar ortada card sağda table
    //rastgele bir employer koy giriş yapmış gibi
    //id 41 
    //bir tane employer gelecek map yapma
   
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <SideBar />
          </Grid.Column>
          <Grid.Column width="8">
            <Card.Group>
              <Card fluid>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src="/images/avatar/large/steve.jpg"
                  />
                  <Card.Header>{employer.companyName}</Card.Header>
                  <Card.Meta>{employer.email}</Card.Meta>
                  <Card.Description>
                    {employer.webAddress}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                   <UpdateModal/>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
          <Grid.Column width="4">
            <Table basic="very" celled collapsing>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İletişim Bilgileri</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        Telefon Numarası
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{employer.phoneNumber}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        Adres
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>15</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
