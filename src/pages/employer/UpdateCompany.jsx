import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { Header, Image, Table, Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar";
import { EmployerService } from "../../services/employer/employerService";
import UpdateModal from "./employerModals/UpdateModal";
export default function UpdateCompany() {//burası da tamam id niye elle verilmiş bi bak
    const [employer, setEmployer] = useState({})

    useEffect(() => {
           let employerService = new EmployerService()
           employerService.getById(51).then((result) => setEmployer(result.data))
    }, [])
  return (
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
