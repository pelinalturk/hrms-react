import { Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ContactInformation() {
  const url = "";
  const [data, setData] = useState({
    id: "5",
    birthYear: "",
    email: "",
    firstName: "",
    lastName: "",
    photo: "", //buna başlangıç olarak db deki url yi ver
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
        id: data.id,
        birthYear: data.birthYear,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
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
            birthYear: "",
            email: "",
            firstName: "",
            lastName: "",
            photo: "",
          }}
          validationSchema={Yup.object({
            birthYear: Yup.date(),
            email: Yup.string().email,
            firstName: Yup.string(),
            lastName: Yup.string(),
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
                <strong>İsim</strong>{" "}
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
                <strong>Soy İsim</strong>{" "}
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
                {" "}
                <strong>Doğum Tarihi</strong>{" "}
              </label>
              <input
                type="date"
                className="input"
                style={{
                  width: "100%",
                }}
              />
              <label htmlFor="">
                <strong>Email</strong>
                <input
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
