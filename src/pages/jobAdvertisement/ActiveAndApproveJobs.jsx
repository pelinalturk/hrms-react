import React, { useEffect, useState } from "react";
import { Dropdown, Grid } from "semantic-ui-react";
import { Table, Button, Pagination, Label } from "semantic-ui-react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
import { Link } from "react-router-dom";
import Filter from "../../layouts/Filter"
import JobTitleModal from "../jobTitle/JobTitleModal"

export default function ActiveAndApproveJobs() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  const [filter, setFilter] = useState({})

  let jobAdvertisementService = new JobAdvertisementService();
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    jobAdvertisementService
      .getByActiveAndApproved(pageNo,pageSize,filter)
      .then((result) => setjobAdvertisements(result.data.data));
  }, [pageNo,pageSize, filter]);
  
  const pageSizeOptions=[
    {key:10,text:"10", value:10},
    {key:20,text:"20", value:20},
    {key:50,text:"50", value:50},
    {key:100,text:"100", value:100}
  ]
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
                            <Link to={`/active/${jobAdvertisement.id}`}>
                             <JobTitleModal/>
                            </Link>
                        </Table.Cell>
                      </Table.Row>
                    ))}
              </Table.Body>
              <Pagination
                activePage={pageNo}
                onPageChange={handdleChange}
                totalPages={10}
              />
               <Button onClick={() =>setPageSize(10)}>10</Button>
               <Button onClick={() =>setPageSize(20)}>20</Button>
               <Button onClick={() =>setPageSize(50)}>50</Button>
               <Button onClick={() =>setPageSize(100)}>100</Button>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
