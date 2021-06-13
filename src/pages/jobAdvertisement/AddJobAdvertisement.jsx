import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import {CityService} from "../../services/candidate/cityService"
import {WorkingHourService} from "../../services/jobAdvertisement/workingHourService"
import {MannerOfWorkService} from "../../services/jobAdvertisement/mannerOfWorkService"
import {JobTitleService} from "../../services/jobTitleService"
import * as moment from 'moment'
import axios from "axios";


export default function AddJobAdvertisement() {
    /* const [addJobAdverts, setAddJobAdverts] = useState([])

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.addJobAdvertisement().then((result) => setAddJobAdverts(result.data.data));
  }, [])  */
  const url="http://localhost:8080/api/JobAdvertisement/add";
  const [data, setData] = useState({
            employerId:32,
            jobPositionId: "",
            countOfOpenPosition: "",
            applicationDeadline: "",
            jobdetail: "",
            cityId: "",
            minWage: "",
            maxWage: "",
            workingHourId: "",
            mannerOfWorkId: "",
  })

  function handle(e){
    const newData={...data}
    newData[e.target.id] =e.target.value
    setData(newData)
    console.log(newData)
  }

  function submit(e){
    e.preventDefault();
    axios.post(url,{
      employerId:32,
      jobPositionId: data.jobPositionId,
      countOfOpenPosition: data.countOfOpenPosition,
      applicationDeadline: "2020-06-13",
      jobdetail: data.jobdetail,
      cityId: data.cityId,
      minWage: data.minWage,
      maxWage: data.maxWage,
      workingHourId: data.workingHourId,
      mannerOfWorkId: data.mannerOfWorkId
    }).then(result =>{
      console.log(result.data)
    })
  }

   const [cities, setcities] = useState([])

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCityService().then((result) => setcities(result.data.data));
  }, []) 

  const [workingHours, setworkingHour] = useState([])

  useEffect(() => {
    let workingHourService = new WorkingHourService();
    workingHourService.getWorkingHourService().then((result) => setworkingHour(result.data.data));
  }, []) 

  const [mannerOfWorks, setMannerOfWorks] = useState([])

  useEffect(() => {
    let mannerOfWorkService = new MannerOfWorkService();
    mannerOfWorkService.getMannerOfWorkService().then((result) => setMannerOfWorks(result.data.data));
  }, []) 

  const [jobPositions, setJobPositions] = useState([])

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService.getJobTitles().then((result) => setJobPositions(result.data.data));
  }, []) 

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
            cityId: Yup.string()
              .required("Şehir seçiniz"),
            minWage: Yup.number().required("Minimum maaş miktarını giriniz !"),
            maxWage: Yup.number().required("Maksimum maaş miktarını giriniz !"),
            workingHourId: Yup.string()
              .required("Çalışma zamanını seçiniz"),
            mannerOfWorkId: Yup.string()
              .required("Çalışma Şeklini seçiniz"),
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
            <form onSubmit={(e) => submit(e)} className="bilmemne">
              <h3>İş İlanı Yayınla</h3>
              <select
                id="jobPositionId"
                value={data.jobPositionId}
                onChange={(e)=>handle(e)}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="İş Pozisyonu" />
                {jobPositions.map((jobPosition) => (
                  <option key={jobPosition.id} value={jobPosition.id} >{jobPosition.title}</option>
                  ))}
              </select>

              {errors.jobPositionId && touched.jobPositionId && (
                <div className="input-feedback">{errors.jobPositionId}</div>
              )}

              <label htmlFor="countOfOpenPosition">Açık Pozisyon Sayısı</label>
              <input
                id="countOfOpenPosition"
                type="number"
                className="input"
                value={data.countOfOpenPosition}
                onChange={(e)=>handle(e)}
              />
              {errors.countOfOpenPosition && touched.countOfOpenPosition && (
                <div className="input-feedback">
                  {errors.countOfOpenPosition}
                </div>
              )}
              <label htmlFor="applicationDeadline">Son Başvuru Tarihi</label>
              <input
                id="applicationDeadline"
                type="date"
                className="input"
                value={data.applicationDeadline}
                onChange={(e)=>handle(e)}
                
              />
              {errors.applicationDeadline && touched.applicationDeadline && (
                <div className="input-feedback">
                  {errors.applicationDeadline}
                </div>
              )}

              <label htmlFor="jobdetail">
                İş Detayı
                <textarea
                  id="jobdetail"
                  onChange={(e)=>handle(e)}
                  value={data.jobdetail}
                >
                  {" "}
                </textarea>{" "}
              </label>

              {errors.jobdetail && touched.jobdetail && (
                <div className="input-feedback">{errors.jobdetail}</div>
              )}

              <select
                id="cityId"
                value={data.cityId}
                onChange={(e)=>handle(e)}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Şehir Seçiniz.." />
                {cities.map((city) => (
                  <option key={city.id} value={city.id} >{city.name}</option>
                  ))}
              </select>

              {errors.cityId && touched.cityId && (
                <div className="input-feedback">{errors.cityId}</div>
              )}


              <label htmlFor="minWage">Minimum Maaş Miktarı</label>
              <input
                id="minWage"
                type="number"
                className="input"
                value={data.minWage}
                onChange={(e)=>handle(e)}
              />
              {errors.minWage && touched.minWage && (
                <div className="input-feedback">{errors.minWage}</div>
              )}

              <label htmlFor="maxWage">Maksimum Maaş Miktarı</label>
              <input
                id="maxWage"
                type="number"
                className="input"
                value={data.maxWage}
                onChange={(e)=>handle(e)}
              />
              {errors.maxWage && touched.maxWage && (
                <div className="input-feedback">{errors.maxWage}</div>
              )}

              <label htmlFor="workingHourId" className="topMargin">
                Çalışma Zamanı
              </label>
              <select
                id="workingHourId"
                value={data.workingHourId}
                onChange={(e)=>handle(e)}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Çalışma Zamanını Seçiniz.." />
                {workingHours.map((workingHour) => (
                  <option key={workingHour.id} value={workingHour.id} >{workingHour.workingHour}</option>
                ))}
              </select>

              {errors.workingHourId && touched.workingHourId && (
                <div className="input-feedback">{errors.workingHourId}</div>
              )}

              <label htmlFor="mannerOfWork" className="topMargin">
                Çalışma Şekli
              </label>
              <select
                id="mannerOfWorkId"
                value={data.mannerOfWorkId}
                onChange={(e)=>handle(e)}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Çalışma şeklini seçiniz" />
                {mannerOfWorks.map((mannerOfWork) => (
                  <option key={mannerOfWork.id} value={mannerOfWork.id}>{mannerOfWork.mannerOfWork}</option>
                ))}
              </select>

              {errors.mannerOfWorkId && touched.mannerOfWorkId && (
                <div className="input-feedback">{errors.mannerOfWorkId}</div>
              )}

              <button type="submit" /*  disabled={!dirty || isSubmitting} */>
                Kaydet
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
