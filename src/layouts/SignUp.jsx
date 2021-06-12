import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
export default function SignUp() {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>HRMS</h1>
        <p>Human Resources Management System</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            surname: "",
            nationalIdentity: "",
            email: "",
            birthYear: "",
            agree: false,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("İsim boş bırakılamaz !"),
            surname: Yup.string().required("Soyisim boş bırakılamaz !"),
            nationalIdentity: Yup.string().required(
              "TC kimlik numarası boş bırakılamaz !"
            ),
            email: Yup.string().email().required("Email boş bırakılamaz !"),
            birthYear: Yup.date().required("Doğum yılınızı giriniz !"),
            agree: Yup.bool().oneOf([true], "Koşulları kabul etmelisiniz"),
          })}
            onSubmit={(values, {resetForm, setSubmitting })=>{
                console.log(values)
                setTimeout(() => {
                    resetForm();
                } ,2000)
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
              <h3>Kaydol</h3>
              <label htmlFor="name">İsim</label>
              <input
                id="name"
                type="text"
                placeholder="İsminizi giriniz..."
                className="input"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name &&(
                    <div className="input-feedback">{errors.name}</div>
              )}

              <label htmlFor="surname">Soy isim</label>
              <input
                id="surname"
                type="text"
                placeholder="Soyisminizi giriniz..."
                className="input"
                value={values.surname}
                onChange={handleChange}
              />
            {errors.surname && touched.surname &&(
                    <div className="input-feedback">{errors.surname}</div>
              )}

              <label htmlFor="nationalIdentity">Tc Kimlik Numarası</label>
              <input
                id="nationalIdentity"
                type="text"
                placeholder="11 hane olacak şekilde giriniz"
                className="input"
                value={values.nationalIdentity}
                onChange={handleChange}
              />
              {errors.nationalIdentity && touched.nationalIdentity &&(
                    <div className="input-feedback">{errors.nationalIdentity}</div>
              )}
              <label htmlFor="email" className="topMargin">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="ornek@domain.com"
                className="input"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email &&(
                    <div className="input-feedback">{errors.email}</div>
              )}

              <label htmlFor="birthYear">Doğum Tarihi</label>
              <input
                id="birthYear"
                type="date"
                className="input"
                value={values.birthYear}
                onChange={handleChange}
              />
              {errors.birthYear && touched.birthYear &&(
                    <div className="input-feedback">{errors.birthYear}</div>
              )}

              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox-label">
                  Sözleşmeyi okudum kabul ediyorum.
                </label>
              </div>
              {errors.agree && touched.agree &&(
                    <div className="input-feedback">{errors.agree}</div>
              )}
              <button type="submit" disabled={!dirty || isSubmitting}>Kaydol</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
