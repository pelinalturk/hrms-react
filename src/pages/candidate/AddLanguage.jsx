import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddLanguage() {
  const url = "";
  const [data, setData] = useState({
    curriculumVitaeId: "5",
    language: "",
    languageLevel: "",
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
        language: data.language,
        languageLevel: data.languageLevel,
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
            language: "",
            languageLevel: "",
          }}
          validationSchema={Yup.object({
            language: Yup.string().required("Dil Giriniz !"),
            languageLevel: Yup.string()
              .required("Dil Seviyenizi Giriniz !")
              .min(1)
              .max(5),
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
                <strong>Dil</strong>
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
                <strong>Dil Seviyesi</strong>
              </label>
              <input
                type="text"
                className="input"
                style={{
                  width: "100%",
                  height: "35px",
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
  );
}
