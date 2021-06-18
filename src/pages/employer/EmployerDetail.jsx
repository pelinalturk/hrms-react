import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Image } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar";
import { Table, Button } from "semantic-ui-react";
import { EmployerService } from "../../services/employerService";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";

export default function EmployerDetail() {
  let { id } = useParams();

  const [employers, setEmployers] = useState({});

  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByEmployerId(id)
      .then((result) => setjobAdvertisements(result.data));
  }, [id]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getById(id).then((result) => setEmployers(result.data));
  }, []);

  return (
    <div>
      <h3>Firma Bilgileri</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2">
            <SideBar />
          </Grid.Column>
          <Grid.Column width="14">
            <Table celled fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                  <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row key={employers.id}>
                  <Table.Cell>{employers.companyName}</Table.Cell>
                  <Table.Cell>{employers.email}</Table.Cell>
                  <Table.Cell>{employers.phoneNumber}</Table.Cell>
                  <Table.Cell>{employers.webAddress}</Table.Cell>
                  <Table.Cell> 
                  </Table.Cell>
                </Table.Row>
                <Grid.Column></Grid.Column>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <h3>Firmanın Yayınladığı İş İlanları</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="14">
            <Table celled fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Pozisyon Seviyesi</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                  <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {jobAdvertisements?.map((jobAdvertisement) => (
                  <Table.Row key={jobAdvertisement.id}>
                    <Table.Cell>
                      {jobAdvertisement.jobPosition?.title}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.positionLevel?.positionLevel}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.mannerOfWork?.mannerOfWork}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.workingHour?.workingHour}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.countOfOpenPosition}
                    </Table.Cell>
                    <Table.Cell>
                      {" "}
                      <Button>Detay</Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
