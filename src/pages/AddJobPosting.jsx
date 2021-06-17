 import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
import { CityService } from "../services/cityService";
import { WorkingHourService } from "../services/jobAdvertisement/workingHourService";
import { MannerOfWorkService } from "../services/jobAdvertisement/mannerOfWorkService";
import { JobTitleService } from "../services/jobTitleService";
import { PositionLevelService } from "../services/jobAdvertisement/jobPositionLevelService";
import { JobAdvertisementService } from "../services/jobAdvertisementService";

export default function AddJobPosting() {

  
   let jobAdvertisementService= new  JobAdvertisementService();
 

  const JobAdvertAddSchema = Yup.object().shape({
    jobPositionId: Yup.string().required(
      "İş pozisyonu boş bırakılamaz !"
    ),
    countOfOpenPosition: Yup.number().required(
      "Açık pozisyon sayısını giriniz !"
    ),
    applicationDeadline: Yup.date().required(
      "Son başvuru tarihini seçiniz !"
    ),
    jobDetail: Yup.string().required("İş Tanıtımınızı Giriniz "),
    cityId: Yup.string()
      .required("Şehir seçiniz"),
    minWage: Yup.number().required("Minimum maaş miktarını giriniz !"),
    maxWage: Yup.number().required("Maksimum maaş miktarını giriniz !"),
    workingHourId: Yup.string()
      .required("Çalışma zamanını seçiniz"),
    mannerOfWorkId: Yup.string()
      .required("Çalışma Şeklini seçiniz"),
    positionLevelId : Yup.string()
      .required("Pozisyon Seviyesini seçiniz"),
  });
  const formik = useFormik({
    initialValues: {
      jobPositionId: "",
      countOfOpenPosition: "",
      applicationDeadline: "",
      jobdetail: "",
      cityId: "",
      minWage: "",
      maxWage: "",
      workingHourId: "",
      mannerOfWorkId: "",
      positionLevelId: "",
    },
    validationSchema: JobAdvertAddSchema,
    onSubmit: (value) => {
      value.employerId = 32;
      jobAdvertisementService.addJobAdvertisement(value).then((result) => console.log(result.data.data));
      alert("Eklendi");
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }

  const [cities, setcities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCityService().then((result) => setcities(result.data.data));
  }, []);

  const [workingHours, setworkingHour] = useState([]);

  useEffect(() => {
    let workingHourService = new WorkingHourService();
    workingHourService
      .getWorkingHourService()
      .then((result) => setworkingHour(result.data.data));
  }, []);

  const [mannerOfWorks, setMannerOfWorks] = useState([]);

  useEffect(() => {
    let mannerOfWorkService = new MannerOfWorkService();
    mannerOfWorkService
      .getMannerOfWorkService()
      .then((result) => setMannerOfWorks(result.data.data));
  }, []);

  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  const [jobPositionLevels, setjobPositionLevels] = useState([]);
  useEffect(() => {
    let jobPositionLevelService = new PositionLevelService();
    jobPositionLevelService
      .getPositionLevel()
      .then((result) => setjobPositionLevels(result.data.data));
  }, []);
  
  const citiesOption = cities.map((city, index) => ({
    key: index,
    text: city.city,
    value: city.id,
  }));

  const workingHoursOption = workingHours.map((workingHour, index) => ({
    key: index,
    text: workingHour.workingHour,
    value: workingHour.id,
  }));

  const mannerOfWorksOption = mannerOfWorks.map((mannerOfWork, index) => ({
    key: index,
    text: mannerOfWork.mannerOfWork,
    value: mannerOfWork.id,
  }));

  const jobPositionsOption = jobPositions.map((jobPosition, index) => ({
    key: index,
    text: jobPosition.title,
    value: jobPosition.id,
  }));

  const jobPositionLevelsOption = jobPositionLevels.map((jobPositionLevel, index) => ({
    key: index,
    text: jobPositionLevel.positionLevel,
    value: jobPositionLevel.id,
  }));
  return (
    <div>
          <Card fluid>
      <Card.Content header='İş ilanı Ekle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
          <label>İş Pozisyonu</label>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobPositionId")
          }
          onBlur={formik.onBlur}
          id="jobPositionId"
          value={formik.values.jobPositionId}
          options={jobPositionsOption}
          />
          {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobPositionId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
          <label>Şehir</label>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={citiesOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma yeri</label>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "mannerOfWorkId")
                  }
                  onBlur={formik.onBlur}
                  id="mannerOfWorkId"
                  value={formik.values.mannerOfWorkId}
                  options={mannerOfWorksOption}
                />
                {formik.errors.mannerOfWorkId && formik.touched.mannerOfWorkId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.mannerOfWorkId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workingHourId")
                  }
                  onBlur={formik.onBlur}
                  id="workingHourId"
                  value={formik.values.workingHourId}
                  options={workingHoursOption}
                />
                {formik.errors.workingHourId && formik.touched.workingHourId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workingHourId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minWage}
                  name="minWage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minWage && formik.touched.minWage && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minWage}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxWage}
                  name="maxWage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxWage && formik.touched.maxWage && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxWage}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Açık Posisyon sayısı</label>
                <Input
                  style={{ width: "100%" }}
                  id="countOfOpenPosition"
                  name="countOfOpenPosition"
                  error={Boolean(formik.errors.countOfOpenPosition)}
                  onChange={formik.handleChange}
                  value={formik.values.countOfOpenPosition}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Posisyon sayısı"
                />
                {formik.errors.countOfOpenPosition && formik.touched.countOfOpenPosition && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.countOfOpenPosition}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.applicationDeadline)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "applicationDeadline")
                  }
                  value={formik.values.applicationDeadline}
                  onBlur={formik.handleBlur}
                  name="applicationDeadline"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.applicationDeadline}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.jobdetail).toString()}
                  value={formik.values.jobdetail}
                  name="jobdetail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.jobdetail && formik.touched.jobdetail && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobdetail}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
          <label>Pozisyon Seviyesi</label>
            <Dropdown
              clearable
              item
              placeholder="Pozisyon Seviyesi"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "positionLevelId")
              }
              onBlur={formik.onBlur}
              id="positionLevelId"
              value={formik.values.positionLevelId}
              options={jobPositionLevelsOption}
              />
              {formik.errors.positionLevelId && formik.touched.positionLevelId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.positionLevelId}
              </div>
              )}
          </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>
    </div>
  );
}
