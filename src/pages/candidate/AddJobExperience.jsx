import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AddJobExperience() {

    const url = "";
    const [data, setData] = useState({
    curriculumVitaeId: "5",
    companyName: "",
    jobPositionId: "",
    startingDate: "",
    endingDate: "",
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
        curriculumVitaeId: data.curriculumVitaeId,
        companyName: data.companyName,
        email: data.email,
        jobPositionId: data.jobPositionId,
        startingDate: data.startingDate,
        endingDate: data.endingDate,
      })
      .then((result) => {
        console.log(result.data);
      });
  }

    return (
        <div>
        <div>
          <Formik
            initialValues={{
                companyName: "",
                jobPositionId: "",
                startingDate: "",
                endingDate: "",
            }}
            validationSchema={Yup.object({
                companyName: Yup.string().required("Şirket İsmi Boş Olamaz !"),
                jobPositionId: Yup.string().required(""),
                startingDate: Yup.date().required("Başlama Tarihini Giriniz !"),
                endingDate: Yup.date(),
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
                <label>
                  {" "}
                  <strong>Şirket İsmi</strong>{" "}
                </label>
                <input
                  type="text"
                  style={{
                    marginTop: 10,
                    width: "100%",
                    padding: "10px 15px",
                    outline: "none",
                  }}
                ></input>
                <label htmlFor="">
                  {" "}
                  <strong>Pozisyon</strong>{" "}
                </label>
                <input
                  type="text"
                  className="input"
                  style={{
                    width: "100%",
                    height: "35px",
                  }}
                />
                <label htmlFor="">
                  <strong>Başlama Tarihi</strong>{" "}
                </label>
                <input
                  type="date"
                  className="input"
                  style={{
                    width: "100%",
                  }}
                />
                 <label htmlFor="">
                  <strong>Bitiş Tarihi</strong>
                </label>
                <input
                  type="date"
                  className="input"
                  style={{
                    width: "100%",
                  }}
                />
                <button type="submit" /* disabled={!dirty || isSubmitting} */>
                  Kaydet
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    )
}
