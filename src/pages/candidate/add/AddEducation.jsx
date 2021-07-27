import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { CandidateSchoolService } from '../../../services/candidate/candidateSchoolService';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddEducation() {
    let candidateSchoolService = new CandidateSchoolService()
    const [degrees, setDegrees] = useState([])
    useEffect(() => {
        candidateSchoolService.getDegree().then((result) => setDegrees(result.data.data))
    }, [])

    return (
        <div>
        <div>
          <Formik
            initialValues={{
              candidateId:"5",
                degreeId: "",
                schoolDepartment: "",
                schoolName:"",
                startingDate: "",
                endingDate: "",
            }}
            validationSchema={Yup.object({
                degreeId: Yup.string().required("Boş bırakılamaz !"),
                schoolDepartment: Yup.string().required("Boş bırakılamaz !"),
                schoolName:Yup.string().required("Okul ismi yazınız !"),
                startingDate: Yup.date().required("Başlama tarihini giriniz !"),
                endingDate: Yup.date(),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              console.log(values);
               candidateSchoolService.addEducation(values).then(result => console.log(result.data))
               toast.success("Okul eklendi.")
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
                <label htmlFor="degreeId">
                  <strong>Derece</strong>
                </label>
                <select 
                    id = "degreeId"
                    value = {values.degreeId}
                    onChange={handleChange}
                    style={{
                        marginTop: 10,
                        width: "100%",
                        padding: "10px 15px",
                        outline: "none",
                      }}
                >
                <option value="" />
                {degrees.map((degree) => (
                  <option key={degree.id} value={degree.id}>
                    {degree.description}
                  </option>
                ))}
                </select>

                <label htmlFor="schoolName">
                <strong>Okul</strong>
              </label>
              <input
              id="schoolName"
                type="text"
                value={values.schoolName}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              ></input>
               {errors.schoolName && touched.schoolName && (
                <div className={"input-feedback"}>
                  {errors.schoolName}
                </div>
              )}

<label htmlFor="schoolDepartment">
                <strong>Bölüm</strong>
              </label>
              <input
              id="schoolDepartment"
                type="text"
                value={values.schoolDepartment}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              ></input>
               {errors.schoolDepartment && touched.schoolDepartment && (
                <div className={"input-feedback"}>
                  {errors.schoolDepartment}
                </div>
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
