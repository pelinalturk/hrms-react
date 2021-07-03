import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { CandidateTechsService } from '../../../services/candidate/candidateTechsService';

export default function AddTechs() {
    return (
        <div>
      <div>
        <Formik
          initialValues={{
            curriculumVitaeId: "2",
            description: "",
          }}
          validationSchema={Yup.object({
            description: Yup.string().required("Boş bırakılamaz !"),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
          let candidateTechsService = new  CandidateTechsService()
          candidateTechsService.addTechs(values).then(result => console.log(result.data))
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
              <label htmlFor="description">
                <strong>Açıklama</strong>
              </label>
              <input
              id="description"
                type="text"
                value={values.description}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              ></input>
               {errors.description && touched.description && (
                <div className={"input-feedback"}>
                  {errors.description}
                </div>
              )}
              <button type="submit" onClick={() => console.log(errors)}  disabled={!dirty || isSubmitting} >
                Kaydet
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
    )
}