import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { CandidateLanguageService } from "../../services/candidate/candidateLanguageService";

export default function AddLanguage() {

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            curriculumVitaeId: "2",
            language: "",
            languageLevel: "",
          }}
          validationSchema={Yup.object({
            language: Yup.string().required("Dil Giriniz !"),
            languageLevel: Yup.number()
              .required("Dil Seviyenizi Giriniz ! (1 - 5 Arası) ")
              .min(1)
              .max(5),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            let candidateLanguageService= new CandidateLanguageService()
            candidateLanguageService.addLanguage(values).then(result => console.log(result.data))
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
              <label htmlFor="language">
                <strong>Dil</strong>
              </label>
              <input
              id="language"
                type="text"
                value={values.language}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              ></input>
               {errors.language && touched.language && (
                <div className={"input-feedback"}>
                  {errors.language}
                </div>
              )}
              <label htmlFor="languageLevel">
                <strong>Dil Seviyesi</strong>
              </label>
              <input
              id="languageLevel"
              className="input"
                type="number"
                value={values.languageLevel}
                onChange={handleChange}
                name="languageLevel"
                style={{
                  width: "100%",
                  height: "35px",
                }}
              />
               {errors.languageLevel && touched.languageLevel && (
                <div className={"input-feedback"}>
                  {errors.languageLevel}
                </div>
              )}
              <button type="submit" onClick={() => console.log(errors)} /* disabled={!dirty || isSubmitting} */ >
                Kaydet
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
