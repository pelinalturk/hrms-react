import React, { useEffect, useState } from "react";
import { MannerOfWorkService } from "../services/jobAdvertisement/mannerOfWorkService";
import { WorkingHourService } from "../services/jobAdvertisement/workingHourService";
import { PositionLevelService } from "../services/jobAdvertisement/jobPositionLevelService";
import { CityService } from "../services/candidate/cityService"

import { Dropdown, Grid, Button } from "semantic-ui-react";
export default function Filter({ clickEvent }) {
  const [mannerOfWorks, setMannerOfWorks] = useState([]);
 
  const [workingHours, setWorkingHours] = useState([]);
  
  const [positionLevels, setPositionLevels] = useState([]);
 
  const [cities, setCities] = useState([]);
  

  useEffect(() => {
    let mannerOfWorkService = new MannerOfWorkService();
    mannerOfWorkService
      .getMannerOfWorkService()
      .then((res) => setMannerOfWorks(res.data.data));

      let cityService = new CityService();
      cityService.getCityService().then((result) => setCities(result.data.data));

      let workingHourService = new WorkingHourService();
      workingHourService
        .getWorkingHourService()
        .then((res) => setWorkingHours(res.data.data));

        let jobPositionLevelService = new PositionLevelService();
    jobPositionLevelService
      .getPositionLevel()
      .then((res) => setPositionLevels(res.data.data));

  }, [])


  const mannerOfWorkOption = mannerOfWorks.map((mannerOfWork, index) => ({
    key: mannerOfWork.index,
    text: mannerOfWork.mannerOfWork,
    value: mannerOfWork.id,
  }));
  

  const cityOption = cities.map((city, index) => ({
    key: city.index,
    text: city.city,
    value: city.id,
  }));

  
  const workinHourOption = workingHours.map((workingHour, index) => ({
    key: workingHour.index,
    text: workingHour.workingHour,
    value: workingHour.id,
  }));

  const positionLevelOption = positionLevels.map((positionLevel, index) => ({
    key: positionLevel.index,
    text: positionLevel.positionLevel,
    value: positionLevel.id,
  }));

  const [cityIndexs, setCityIndexs] = useState([]);
  const handleChangeCity = (e, { value }) => {
    setCityIndexs(value);
  };

  const [mannerOfWorksIndex, setMannerOfWorksIndex] = useState([]);
  const handleChangeMannerOfWork = (e, { value }) => {
    setMannerOfWorksIndex(value);
  };

  const [positionLevelIndex, setPositionLevelIndex] = useState([]);
  const handleChangePositionLevel = (e, { value }) => {
    setPositionLevelIndex(value);
  };

  const [workingHourIndex, setWorkingHourIndex] = useState([]);
  const handleChangeWorkingHour = (e, { value }) => {
    setWorkingHourIndex(value);
  };
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Dropdown
            multiple
              placeholder="Uzaktan/ İş Yerinde"
              selection
              search
              clearable
              options={mannerOfWorkOption}
              onChange={handleChangeMannerOfWork}
              value={mannerOfWorksIndex}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Dropdown
            multiple
              placeholder="Uzman, Yönetici..."
              selection
              search
              clearable
              options={positionLevelOption}
              onChange={handleChangePositionLevel}
              value={positionLevelIndex}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Dropdown
            multiple
              placeholder="Tam Zamanlı,Yarı Zamanlı..."
              selection
              search
              clearable
              options={workinHourOption}
              onChange={handleChangeWorkingHour}
              value={workingHourIndex}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Dropdown
            multiple
              placeholder="şehir seçiniz"
              selection
              search
              clearable
              options={cityOption}
              onChange={handleChangeCity}
              value={cityIndexs}
            />
          </Grid.Column>
        </Grid.Row>
        <Button 
         onClick={() =>
            clickEvent({
              cityId: cityIndexs,
              positionLevelId: positionLevelIndex,
              workingHourId: workingHourIndex,
              mannerOfWorkId: mannerOfWorksIndex,
            })
          }
        >Filtrele</Button>
      </Grid>
    </div>
  );
}
