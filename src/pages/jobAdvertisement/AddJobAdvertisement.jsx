import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { CityService } from "../../services/candidate/cityService";
import { WorkingHourService } from "../../services/jobAdvertisement/workingHourService";
import { MannerOfWorkService } from "../../services/jobAdvertisement/mannerOfWorkService";
import { JobTitleService } from "../../services/jobTitleService";
import axios from "axios";
import { PositionLevelService } from "../../services/jobAdvertisement/jobPositionLevelService";
import { Grid } from "semantic-ui-react";

export default function AddJobAdvertisement() {
  const url = "http://localhost:8080/api/JobAdvertisement/add";
  const [data, setData] = useState({
    employerId: 32,
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
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        employerId: 32,
        jobPositionId: data.jobPositionId,
        countOfOpenPosition: data.countOfOpenPosition,
        applicationDeadline: data.applicationDeadline,
        jobdetail: data.jobdetail,
        cityId: data.cityId,
        minWage: data.minWage,
        maxWage: data.maxWage,
        workingHourId: data.workingHourId,
        mannerOfWorkId: data.mannerOfWorkId,
        positionLevelId: data.positionLevelId,
      })
      .then((result) => {
        console.log(result.data);
      });
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

  return (
    <div>
      <div>
      
        <Formik
          initialValues={{
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
          }}
          validationSchema={Yup.object({
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
            cityId: Yup.string().required("Şehir seçiniz"),
            minWage: Yup.number().required("Minimum maaş miktarını giriniz !"),
            maxWage: Yup.number().required("Maksimum maaş miktarını giriniz !"),
            workingHourId: Yup.string().required("Çalışma zamanını seçiniz"),
            mannerOfWorkId: Yup.string().required("Çalışma Şeklini seçiniz"),
            positionLevelId: Yup.string().required(
              "Pozisyon Seviyesini seçiniz"
            ),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              resetForm();
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            touched,
            isSubmitting,
          }) => (
           
            <form onSubmit={(e) => submit(e)}>
              <h3>İş İlanı Yayınla</h3>
              
            <label> <strong>İş Pozisyonu</strong> </label>
             <select
                id="jobPositionId"
                value={data.jobPositionId}
                onChange={(e) => handle(e)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" />
                {jobPositions.map((jobPosition) => (
                  <option key={jobPosition.id} value={jobPosition.id}>
                    {jobPosition.title}
                  </option>
                ))}
              </select>  

              {errors.jobPositionId && touched.jobPositionId && (
                <div className={"input-feedback"}>{errors.jobPositionId}</div>
              )}
              <label htmlFor="countOfOpenPosition"> <strong>Açık Pozisyon Sayısı</strong> </label>
              <input
                id="countOfOpenPosition"
                type="number"
                className="input"
                value={data.countOfOpenPosition}
                onChange={(e) => handle(e)}
                style={{
                  width: "100%",
                  height:"35px"
                }}
              />
              {errors.countOfOpenPosition && touched.countOfOpenPosition && (
                <div className={"input-feedback"}>
                  {errors.countOfOpenPosition}
                </div>
              )}
              <label htmlFor="applicationDeadline"> <strong>Son Başvuru Tarihi</strong> </label>
              <input
                id="applicationDeadline"
                type="date"
                className="input"
                value={data.applicationDeadline}
                onChange={(e) => handle(e)}
                style={{
                  width: "100%",
                }}
              />
              {errors.applicationDeadline && touched.applicationDeadline && (
                <div className={"input-feedback"}>
                  {errors.applicationDeadline}
                </div>
              )}

              <label htmlFor="jobdetail">
              <strong>İş Detayı</strong>
                <textarea
                  id="jobdetail"
                  onChange={(e) => handle(e)}
                  value={data.jobdetail}
                  style={{
                    width: "100%",
                     minHeight: 100,
                     maxWidth:600
                  }}
                >
                  {" "}
                </textarea>{" "}
              </label>

              {errors.jobdetail && touched.jobdetail && (
                <div className={"input-feedback"}>{errors.jobdetail}</div>
              )}
              <label><strong>Şehir Seçiniz</strong></label>
              <select
                id="cityId"
                value={data.cityId}
                onChange={(e) => handle(e)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Şehir Seçiniz.." />
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city}
                  </option>
                ))}
              </select>

              {errors.cityId && touched.cityId && (
                <div className={"input-feedback"}>{errors.cityId}</div>
              )}
              <label htmlFor="minWage"> <strong>Minimum Maaş Miktarı</strong> </label>
              <input
                id="minWage"
                type="number"
                className="input"
                value={data.minWage}
                onChange={(e) => handle(e)}
                style={{
                  width: "100%",
                  height:"35px"
                }}
              />
              {errors.minWage && touched.minWage && (
                <div className={"input-feedback"}>{errors.minWage}</div>
              )}
              <label htmlFor="maxWage"><strong>Maksimum Maaş Miktarı</strong></label>
              <input
                id="maxWage"
                type="number"
                className="input"
                value={data.maxWage}
                onChange={(e) => handle(e)}
                style={{
                  width: "100%",
                  height:"35px"
                }}
              />
              {errors.maxWage && touched.maxWage && (
                <div className={"input-feedback"}>{errors.maxWage}</div>
              )}
              <label htmlFor="workingHourId" className="topMargin">
              <strong>Çalışma Zamanı</strong>
              </label>
              <select
                id="workingHourId"
                value={data.workingHourId}
                onChange={(e) => handle(e)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Çalışma Zamanını Seçiniz.." />
                {workingHours.map((workingHour) => (
                  <option key={workingHour.id} value={workingHour.id}>
                    {workingHour.workingHour}
                  </option>
                ))}
              </select>

              {errors.workingHourId && touched.workingHourId && (
                <div className={"input-feedback"}>{errors.workingHourId}</div>
              )}
              <label htmlFor="mannerOfWork" className="topMargin">
              <strong>Çalışma Şekli</strong> 
              </label>
              <select
                id="mannerOfWorkId"
                value={data.mannerOfWorkId}
                onChange={(e) => handle(e)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Çalışma şeklini seçiniz" />
                {mannerOfWorks.map((mannerOfWork) => (
                  <option key={mannerOfWork.id} value={mannerOfWork.id}>
                    {mannerOfWork.mannerOfWork}
                  </option>
                ))}
              </select>

              {errors.mannerOfWorkId && touched.mannerOfWorkId && (
                <div className={"input-feedback"}>{errors.mannerOfWorkId}</div>
              )}
              <label htmlFor="positionLevelId" className="topMargin">
              <strong>Pozisyon Seviyesi</strong>
              </label>
              <select
                id="positionLevelId"
                value={data.positionLevelId}
                onChange={(e) => handle(e)}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Pozisyon Seviyesini seçiniz" />
                {jobPositionLevels.map((jobPositionLevel) => (
                  <option key={jobPositionLevel.id} value={jobPositionLevel.id}>
                    {jobPositionLevel.positionLevel}
                  </option>
                ))}
              </select>

              {errors.positionLevelId && touched.positionLevelId && (
                <div className={"input-feedback"}>{errors.positionLevelId}</div>
              )}
              <button type="submit"  /* disabled={!dirty || isSubmitting} */>
                Kaydet
              </button>
            </form> 
          )}
        </Formik>
      </div>
    </div>
  );
}
