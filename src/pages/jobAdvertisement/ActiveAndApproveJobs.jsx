import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { Table, Button, Pagination, Label } from "semantic-ui-react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
import { Link } from "react-router-dom";
import Filter from "../../layouts/Filter"

export default function ActiveAndApproveJobs() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  const [filter, setFilter] = useState({})

  let jobAdvertisementService = new JobAdvertisementService();
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    jobAdvertisementService
      .getByActiveAndApproved(pageNo,10,filter)
      .then((result) => setjobAdvertisements(result.data.data));
    //pageSize = 10 pageNo=paginationdan tıklanana göre değişmeli
  }, [pageNo, filter]);
  

  const handdleChange = (e, page) => {
    setPageNo(page.activePage);
  };

  const handleFilter = (filter) =>{
    if(filter.cityId.length === 0){
      filter.cityId = null;
    }
    if(filter.workingHourId.length === 0){
      filter.workingHourId = null;
    }
    if(filter.mannerOfWorkId.length === 0){
      filter.mannerOfWorkId = null;
    }
    if(filter.positionLevelId.length ===0 ){
      filter.positionLevelId = null;
    }
    setFilter(filter);
    setPageNo(1);
  }

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Filter clickEvent={handleFilter}/>
          </Grid.Column>
          <Grid.Column width="12">
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
              { jobAdvertisements.map((jobAdvertisement) => (
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
              <Pagination
                activePage={pageNo}
                onPageChange={handdleChange}
                totalPages={10}
              />
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
