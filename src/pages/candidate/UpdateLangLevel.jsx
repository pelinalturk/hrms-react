import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { CandidateLanguageService } from "../../services/candidate/candidateLanguageService";

export default function UpdateLangLevel() {
  let candidateLanguageService= new CandidateLanguageService();
  const [languages, setlanguages] = useState([]);
  const updateLanguage = (level) => {
    candidateLanguageService.updateLanguage(level).then((result) => console.log(result.data))
  }
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            level: "",
           // id:"5",
           
          }}
          validationSchema={Yup.object({
            level: Yup.number()
              .required("1-5 Arası dil seviyesi giriniz")
              .min(1)
              .max(5),
          })}
          onSubmit={(values, { resetForm }) => {
           console.log(values);
            updateLanguage(values).then((result) => console.log(result.data)) 
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
            dirty,
            touched,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="level">
                <strong>Seviye</strong>
              </label>
              <input
                id="level"
                type="number"
                onChange={handleChange}
                value={values.level}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              ></input>
               {errors.level && touched.level && (
                <div className={"input-feedback"}>
                  {errors.level}
                </div>
              )}
              <button type="submit"  disabled={!dirty || isSubmitting}>
                Güncelle
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
