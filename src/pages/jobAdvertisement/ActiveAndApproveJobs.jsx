import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { Table, Button, Pagination, Label } from "semantic-ui-react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
import { Link } from "react-router-dom";
import CitiesFilter from "../../layouts/filtered/CitiesFilter";
import MannerOfWorkFilter from "../../layouts/filtered/MannerOfWorkFilter";
import WorkingHourFilter from "../../layouts/filtered/WorkingHoursFilter";
import PositionLevelFilter from "../../layouts/filtered/PositionLevelFilter";

export default function ActiveAndApproveJobs() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);
  const [filteredJobAdverts, setFilteredJobAdverts] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedWorkingHour, setSelectedWorkingHour] = useState(null);
  const [selectedMannerOfWork, setSelectedMannerOfWork] = useState(null);
  let jobAdvertisementService = new JobAdvertisementService();
  const [pageNo, setPageNo] = useState(1);

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
       if (selectedMannerOfWork && selectedCity) {
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity
        );
      }
      else if (selectedPosition && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.city.id === selectedCity &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedWorkingHour && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedWorkingHour && selectedMannerOfWork && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedPosition && selectedMannerOfWork && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedPosition && selectedWorkingHour && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
          jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedWorkingHour && selectedMannerOfWork && selectedCity && selectedPosition){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }  

    } 
    else if (selectedMannerOfWork) {
      filteredJobByJobAdverts = jobAdvertisements.filter(
        (jobAdvert) => jobAdvert.mannerOfWork.id === selectedMannerOfWork
      );


      if (selectedMannerOfWork && selectedCity) {
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity
        );
      }
      else if (selectedMannerOfWork && selectedPosition){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.positionLevel.id === selectedPosition &&
            jobAdvert.mannerOfWork.id === selectedMannerOfWork
        );
      }
      else if (selectedWorkingHour && selectedMannerOfWork){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedWorkingHour && selectedMannerOfWork && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedPosition && selectedMannerOfWork && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedPosition && selectedWorkingHour && selectedMannerOfWork){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
          jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedWorkingHour && selectedMannerOfWork && selectedCity && selectedPosition){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }  

    } else if (selectedWorkingHour) {
      filteredJobByJobAdverts = jobAdvertisements.filter(
        (jobAdvert) => jobAdvert.workingHour.id === selectedWorkingHour
      );

      if (selectedMannerOfWork && selectedWorkingHour) {
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedWorkingHour && selectedPosition){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.positionLevel.id === selectedPosition &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedWorkingHour && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedWorkingHour && selectedMannerOfWork && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedPosition && selectedWorkingHour && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedPosition && selectedWorkingHour && selectedMannerOfWork){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
          jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedWorkingHour && selectedMannerOfWork && selectedCity && selectedPosition){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }  

    } else if (selectedPosition) {
      filteredJobByJobAdverts = jobAdvertisements.filter(
        (jobAdvert) => jobAdvert.positionLevel.id === selectedPosition
      );


      if (selectedMannerOfWork && selectedPosition) {
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.selectedPosition.id === selectedPosition
        );
      }
      else if (selectedWorkingHour && selectedPosition){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.positionLevel.id === selectedPosition &&
            jobAdvert.workingHour.id === selectedWorkingHour
        );
      }
      else if (selectedPosition && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.city.id === selectedCity &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedPosition && selectedMannerOfWork && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedPosition && selectedWorkingHour && selectedCity){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedPosition && selectedWorkingHour && selectedMannerOfWork){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
          jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }
      else if (selectedWorkingHour && selectedMannerOfWork && selectedCity && selectedPosition){
        filteredJobByJobAdverts = jobAdvertisements.filter(
          (jobAdvert) =>
            jobAdvert.mannerOfWork.id === selectedMannerOfWork &&
            jobAdvert.city.id === selectedCity &&
            jobAdvert.workingHour.id === selectedWorkingHour &&
            jobAdvert.positionLevel.id === selectedPosition
        );
      }  
    }
    else {
      filteredJobByJobAdverts = null;
    }
    setFilteredJobAdverts(filteredJobByJobAdverts);
  }, [
    selectedCity,
    selectedMannerOfWork,
    selectedWorkingHour,
    selectedPosition,
  ]);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <h3>
              <strong>Filtrele</strong>
            </h3>
            <Label color="pink">Şehir Seçiniz</Label>
            <CitiesFilter onSelect={handleSelectCity} />
            <br />
            <Label color="pink">Çalışma Şekli Seçiniz</Label>
            <MannerOfWorkFilter onSelect={handleSelectMannerOfWork} />
            <br />
            <Label color="pink">Çalışma Zamanı Seçiniz</Label>
            <WorkingHourFilter onSelect={handleSelectWorkingHour} />
            <br />
            <Label color="pink">Pozisyon Seviyesi Seçiniz</Label>
            <PositionLevelFilter onSelect={handleSelectedPositionLevel} />
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
  function handleSelectCity(cityId) {
    setSelectedCity(cityId);
  }
  function handleSelectMannerOfWork(mannerOfWorkId) {
    setSelectedMannerOfWork(mannerOfWorkId);
  }
  function handleSelectWorkingHour(workingHourId) {
    setSelectedWorkingHour(workingHourId);
  }
  function handleSelectedPositionLevel(positionLevelId) {
    setSelectedPosition(positionLevelId);
  }
}
