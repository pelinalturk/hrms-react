import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import { CandidateCvService } from "../../services/candidate/candidateCvService";

export default function ContactInformation() {
  return (//foto 
    <div> 
      <div>
        <Formik
          initialValues={{
            id:"5",
            birthYear: "",
            email: "",
            firstName: "",
            lastName: "",
            photo: "",
          }}
          validationSchema={Yup.object({
            birthYear: Yup.date(),
            email: Yup.string().email(),
            firstName: Yup.string(),
            lastName: Yup.string(),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
           let candidateCvService = new CandidateCvService()
           candidateCvService.updateContactInformation(values).then(result => console.log(result.data))
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
              <label htmlFor="firstName">
                <strong>İsim</strong>
              </label>
              <input
            
              id="firstName"
              value={values.firstName}
              onChange={handleChange}
              name ="firstName"
                type="text"
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "10px 15px",
                  outline: "none",
                }}
              ></input>
              <label htmlFor="lastName">
                <strong>Soy İsim</strong>
              </label>
              <input
              id="lastName"
           
              value={values.lastName}
              onChange={handleChange}
              name="lastName"
                type="text"
                className="input"
                style={{
                  width: "100%",
                  height: "35px",
                }}
              />
              <label htmlFor="birthYear">
                
                <strong>Doğum Tarihi</strong>
              </label>
              <input
              id="birthYear"
                type="date"
                value={values.birthYear}
                onChange={handleChange}
                className="input"
                style={{
                  width: "100%",
                }}
              />
              <label htmlFor="email">
                <strong>Email</strong>
                <input
                id="email"
                value={values.email}
                onChange={handleChange}
                  type="email"
                  className="input"
                  style={{
                    width: "100%",
                  }}
                />
              </label>
              <button type="submit" /* disabled={!dirty || isSubmitting} */>
                Güncelle
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
