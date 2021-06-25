import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { Table, Button, Label } from "semantic-ui-react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
import { Link } from "react-router-dom";
import CitiesFilter from "../../layouts/filtered/CitiesFilter";

export default function ActiveAndApproveJobs() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByActiveAndApproved()
      .then((result) => setjobAdvertisements(result.data.data));
  }, []);

  useEffect(() => {
    let filteredJobByJobAdverts;
    if (selectedCity) {
      filteredJobByJobAdverts = jobAdvertisements.filter(
        (jobAdvert) => jobAdvert.city.id === selectedCity
      );
    } else {
      filteredJobByJobAdverts = null;
    }
    setFilteredJobAdverts(filteredJobByJobAdverts);
  }, [selectedCity]);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3">
            <h3>
              <strong>Filtrele</strong>
            </h3>
            <CitiesFilter onSelect={handleSelectCity} />
          </Grid.Column>
          <Grid.Column width="13">
            <Table celled fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Pozisyon Seviyesi</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                  <Table.HeaderCell>Konum</Table.HeaderCell>
                  <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {filteredJobAdverts
                  ? filteredJobAdverts.map((jobAdvertisement) => (
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
                        <Table.Cell>{jobAdvertisement.city?.city}</Table.Cell>
                        <Table.Cell>
                          {jobAdvertisement.workingHour?.workingHour}
                        </Table.Cell>
                        <Table.Cell>
                          {jobAdvertisement.countOfOpenPosition}
                        </Table.Cell>
                        <Table.Cell>
                          <Button>
                            <Link to={`/active/${jobAdvertisement.id}`}>
                              Detay
                            </Link>
                          </Button>
                        </Table.Cell>
                      </Table.Row>
                    ))
                  : jobAdvertisements?.map((jobAdvertisement) => (
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
                        <Table.Cell>{jobAdvertisement.city?.city}</Table.Cell>
                        <Table.Cell>
                          {jobAdvertisement.workingHour?.workingHour}
                        </Table.Cell>
                        <Table.Cell>
                          {jobAdvertisement.countOfOpenPosition}
                        </Table.Cell>
                        <Table.Cell>
                          <Button>
                            <Link to={`/active/${jobAdvertisement.id}`}>
                              Detay
                            </Link>
                          </Button>
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
  function handleSelectCity(cityId) {
    setSelectedCity(cityId);
  }
}
