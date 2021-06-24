import React, { useEffect, useState } from 'react'
import { Grid } from "semantic-ui-react";
import { Table, Button } from "semantic-ui-react";
import { JobAdvertisementService } from '../../services/jobAdvertisement/jobAdvertisementService';
import { Link } from 'react-router-dom'

export default function ActiveAndApproveJobs() {

const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByActiveAndApproved()
      .then((result) => setjobAdvertisements(result.data.data));
  }, []);

    return (
        <div>
             <h3>Aktif İş İlanları</h3>
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
                      <Button> <Link to ={`/active/${jobAdvertisement.id}`}> Detay</Link></Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
