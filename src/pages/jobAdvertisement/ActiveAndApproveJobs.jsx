import React, { useEffect, useState } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { Table, Button, Pagination, Dropdown } from "semantic-ui-react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
import { Link } from "react-router-dom";
import CitiesFilter from "../../layouts/filtered/CitiesFilter";

export default function ActiveAndApproveJobs() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  let jobAdvertisementService = new JobAdvertisementService();
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  let page=10
 /*  useEffect(() => {
    jobAdvertisementService
      .getByActiveAndApproved(1, 10)
      .then((result) => setjobAdvertisements(result.data.data));
    //pageSize = 10 pageNo=paginationdan tıklanana göre değişmeli
    //İlanlar listelendiğinde default onarlı sayfalama olmalıdır. Kullanıcılar sayfa adedini
    //10-20-50-100 şeklinde değiştirebilmelidir. SAYFA ADEDİ ???????
  }, []); */
   useEffect(() => {
    jobAdvertisementService
      .getByActiveAndApproved(pageNo)
      .then((result) => setjobAdvertisements(result.data.data));
    //pageSize = 10 pageNo=paginationdan tıklanana göre değişmeli
  }, [pageNo]); 

  const handdleChange = (e, page) => {
    setPageNo(page.activePage);
  };

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

  const options = [
    { key: 10, text: 10, value: 10 },
    { key: 20, text: 20, value: 20 },
    { key: 50, text: 50, value: 50 },
    { key: 100, text: 100, value: 100 },
  ];
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
              <Grid.Row>
                <GridColumn width="10">
                  <Pagination
                    activePage={pageNo}
                    onPageChange={handdleChange}
                    totalPages={10}
                  />
                </GridColumn>
                <GridColumn width="3">
                  <Dropdown selection options={options}></Dropdown>
                </GridColumn>
              </Grid.Row>
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
