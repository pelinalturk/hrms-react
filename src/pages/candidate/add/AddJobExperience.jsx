import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { JobTitleService } from "../../../services/jobAdvertisement/jobTitleService";
import { CandidateJobExpService } from "../../../services/candidate/candidateJobExpService";
import { toast } from "react-toastify";

export default function AddJobExperience() {
  const [jobPositions, setJobPositions] = useState([]);


  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobPositions(result.data.data));
  }, []);

    return (
        <div>
        <div>
          <Formik
            initialValues={{
              candidateId:"5",
                companyName: "",
                jobPositionId: "",
                startingDate: "",
                endingDate: "",
            }}
            validationSchema={Yup.object({
                companyName: Yup.string().required("Şirket ismi boş olamaz !"),
                jobPositionId: Yup.string().required("İş pozisyonu boş olamaz !"),
                startingDate: Yup.date().required("Başlama tarihini giriniz !"),
                endingDate: Yup.date(),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              console.log(values);
              let candidateJobExpService = new CandidateJobExpService()
              candidateJobExpService.addJobExp(values).then(result => console.log(result.data))
              toast.success("İş tecrübesi eklendi.")
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
              <form onSubmit={handleSubmit}>
                <label htmlFor="companyName">
                  <strong>Şirket İsmi</strong>
                </label>
                <input
                id="companyName"
                value={values.companyName}
                onChange={handleChange}
                  type="text"
                  style={{
                    marginTop: 10,
                    width: "100%",
                    padding: "10px 15px",
                    outline: "none",
                  }}
                ></input>
                {errors.companyName && touched.companyName && (
                <div className={"input-feedback"}>{errors.companyName}</div>
              )}
                <label htmlFor="jobPositionId">
                 
                  <strong>Pozisyon</strong>
                </label>
                <select
                id="jobPositionId"
                value={values.jobPositionId}
                onChange={handleChange}
                
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
                <label htmlFor="startingDate">
                  <strong>Başlama Tarihi</strong>{" "}
                </label>
                <input
                id="startingDate"
                value={values.startingDate}
                onChange={handleChange}
                  type="date"
                  className="input"
                  style={{
                    width: "100%",
                  }}
                />
                {errors.startingDate && touched.startingDate && (
                <div className={"input-feedback"}>
                  {errors.startingDate}
                </div>
              )}
                 <label htmlFor="">
                  <strong>Bitiş Tarihi</strong>
                </label>
                <input
                id="endingDate"
                value={values.endingDate}
                onChange={handleChange}
                  type="date"
                  className="input"
                  style={{
                    width: "100%",
                  }}
                />
                {errors.endingDate && touched.endingDate && (
                <div className={"input-feedback"}>
                  {errors.endingDate}
                </div>
              )}
                <button type="submit"  disabled={!dirty || isSubmitting}>
                  Kaydet
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    )
}
