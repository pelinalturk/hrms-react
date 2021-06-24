import React, { useEffect, useState } from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { CandidateLanguageService } from '../../services/candidate/candidateLanguageService';

export default function UpdateLangLevel() {
    const [languages, setlanguages] = useState([])
    return (
        <div>
            <div>
            <Formik
          initialValues={{
            level :""
          }}
          validationSchema={Yup.object({
            level: Yup.number().required("1-5 Arası dil seviyesi giriniz").min(1).max(5)
          })}
          onSubmit={(values, { resetForm}) => {
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
            <form onSubmit={handleSubmit}>
              <label>
                <strong>Seviye</strong>{" "}
              </label>
              <input
                type="number"
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              ></input>
              <button type="submit" /* disabled={!dirty || isSubmitting} */>
                Güncelle
              </button>
            </form>
          )}
        </Formik>
            </div>
        </div>
    )
}
