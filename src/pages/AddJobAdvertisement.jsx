import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

export default function AddJobAdvertisement() {
/*   const url = "";
  const [data, setdata] = useState({
    companyName: "",
    jobPositionTitle: "",
    countOfOpenPosition: "",
    applicationDeadline: "",
    jobDetail: "",
    minWage: "",
    maxWage: "",
    workingHour: "",
    mannerOfWork: ""
  })
  function handle(e){

  } */
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            companyName: "",
            jobPositionTitle: "",
            countOfOpenPosition: "",
            applicationDeadline: "",
            jobDetail: "",
            minWage: "",
            maxWage: "",
            workingHour: "",
            mannerOfWork: "",
          }}
          validationSchema={Yup.object({
            companyName: Yup.string().required(
              " Şirket ismi boş bırakılamaz !"
            ),
            jobPositionTitle: Yup.string().required(
              "İş pozisyonu boş bırakılamaz !"
            ),
            countOfOpenPosition: Yup.number().required(
              "Açık pozisyon sayısını giriniz !"
            ),
            applicationDeadline: Yup.date().required(
              "Son başvuru tarihini seçiniz !"
            ),
            jobDetail: Yup.string().required("İş Tanıtımınızı Giriniz "),
            minWage: Yup.number().required("Minimum maaş miktarını giriniz !"),
            maxWage: Yup.number().required("Maksimum maaş miktarını giriniz !"),
            workingHour: Yup.string()
              .required("Çalışma zamanını seçiniz")
              .oneOf([
                "Yarı Zamanlı",
                "Tam Zamanlı",
                "Dönemsel/Proje bazlı",
                "Serbest Zamanlı",
              ]),
            mannerOfWork: Yup.string()
              .required("Çalışma Şeklini seçiniz")
              .oneOf(["İş Yerinde"], "Uzaktan"),
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
            <form onSubmit={handleSubmit} className="bilmemne">
              <h3>İş İlanı Yayınla</h3>
              <label htmlFor="companyName">Şirket İsmi</label>
              <input
                id="companyName"
                type="text"
                className="input"
                value={values.companyName}
                onChange={handleChange}
              />
              {errors.name && touched.companyName && (
                <div className="input-feedback">{errors.companyName}</div>
              )}

              <label htmlFor="jobPositionTitle">İş Pozisyonu</label>
              <input
                id="jobPositionTitle"
                type="text"
                className="input"
                value={values.jobPositionTitle}
                onChange={handleChange}
              />
              {errors.jobPositionTitle && touched.jobPositionTitle && (
                <div className="input-feedback">{errors.jobPositionTitle}</div>
              )}

              <label htmlFor="countOfOpenPosition">Açık Pozisyon Sayısı</label>
              <input
                id="countOfOpenPosition"
                type="number"
                className="input"
                value={values.countOfOpenPosition}
                onChange={handleChange}
              />
              {errors.countOfOpenPosition && touched.countOfOpenPosition && (
                <div className="input-feedback">
                  {errors.countOfOpenPosition}
                </div>
              )}
              <label htmlFor="applicationDeadline">Son Başvuru Tarihi</label>
              <input
                id="applicationDeadline"
                type="date"
                className="input"
                value={values.applicationDeadline}
                onChange={handleChange}
              />
              {errors.applicationDeadline && touched.applicationDeadline && (
                <div className="input-feedback">
                  {errors.applicationDeadline}
                </div>
              )}

              <label htmlFor="jobDetail">
                İş Detayı
                <textarea
                  id="jobDetail"
                  onChange={handleChange}
                  value={values.jobDetail}
                >
                  {" "}
                </textarea>{" "}
              </label>

              {errors.jobDetail && touched.jobDetail && (
                <div className="input-feedback">{errors.jobDetail}</div>
              )}

              <label htmlFor="minWage">Minimum Maaş Miktarı</label>
              <input
                id="minWage"
                type="number"
                className="input"
                value={values.minWage}
                onChange={handleChange}
              />
              {errors.minWage && touched.minWage && (
                <div className="input-feedback">{errors.minWage}</div>
              )}

              <label htmlFor="maxWage">Maksimum Maaş Miktarı</label>
              <input
                id="maxWage"
                type="number"
                className="input"
                value={values.maxWage}
                onChange={handleChange}
              />
              {errors.maxWage && touched.maxWage && (
                <div className="input-feedback">{errors.maxWage}</div>
              )}

              <label htmlFor="workingHour" className="topMargin">
                Çalışma Zamanı
              </label>
              <select
                id="workingHour"
                value={values.workingHour}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Çalışma Zamanını Seçiniz.." />
                <option value="Yarı Zamanlı" label="Yarı Zamanlı" />
                <option value="Tam Zamanlı" label="Tam Zamanlı" />
                <option value="Dönemsel/Proje bazlı" label="Dönemsel/Proje bazlı"/>
                <option value="Serbest Zamanlı" label="Serbest Zamanlı" />
              </select>

              {errors.workingHour && touched.workingHour && (
                <div className="input-feedback">{errors.workingHour}</div>
              )}

              <label htmlFor="mannerOfWork" className="topMargin">
                Çalışma Şekli
              </label>
              <select
                id="mannerOfWork"
                value={values.mannerOfWork}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Çalışma şeklini seçiniz" />
                <option value="İş Yerinde" label="İş Yerinde" />
                <option value="Uzaktan" label="Uzaktan" />
              </select>

              {errors.mannerOfWork && touched.mannerOfWork && (
                <div className="input-feedback">{errors.mannerOfWork}</div>
              )}

              <button type="submit" disabled={!dirty || isSubmitting}>
                Kaydet
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
