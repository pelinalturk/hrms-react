import React from 'react'
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HRMSTextInput from '../../utilities/customFormControls/HRMSTextInput'
import { EmployerService } from '../../services/employerService';
export default function UpdateCompanyModal() {
     const initialValues = { companyName: "", email :"", webbAddress :""};
    
    const deneme = {
        employerUpdateDto:{
            companyName:"",
            email :"",
            webbAddress :""
        }
    }

    const schema = Yup.object({
        companyName: Yup.string().required("Şirket İsmi Giriniz !"),
        email:Yup.string().email().required("Email Giriniz !"),
        webbAddress: Yup.string().required(" Web Adresinizi Giriniz !"),
    }); 
    return (//onay isteği gönder
        //update kısmından let ile id getir

        <Formik
        initialValues = {initialValues}
        validationSchema = {schema}
        onSubmit = {(values)=>{
             deneme.employerUpdateDto.companyName=values.companyName
            deneme.employerUpdateDto.webbAddress=values.webbAddress
            deneme.employerUpdateDto.email=values.email 
            console.log(values)
             let employerService= new EmployerService()
            employerService.updateEmployer(40,values).then(result => console.log(result.data.data)) 
        }}
        >
            <Form className="ui form">
                <label><strong>Şirket İsmi</strong> </label>
            <HRMSTextInput name ="companyName"/>
            <label><strong>Email</strong> </label>
            <HRMSTextInput type="email" name = "email"/>
            <label><strong> Web Adress</strong></label>
            <HRMSTextInput name = "webbAddress"/>
            <Button color="green" type="submit">Güncelle</Button>
            </Form>
        </Formik> 
       /*  <div>
        <div>
          <Formik
            initialValues={{
                companyName: "", 
                email :"", 
                webbAddress :""
            }}
            validationSchema={Yup.object({
                companyName: Yup.string().required("Şirket ismi boş olamaz !"),
                email: Yup.string().email().required(""),
                webbAddress: Yup.string().required(""),
            })}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              console.log(values);
              let employerService= new EmployerService()
            employerService.updateEmployer(values).then(result => console.log(result.data.data))
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
                <label htmlFor="companyName">
                  <strong>Şirket İsmi</strong>
                </label>
                <input
                id="companyName"
                value={values.companyName}
                onChange={handleChange}
                  type="text"
                  style={{
                    marginTop: 10,
                    width: "100%",
                    padding: "10px 15px",
                    outline: "none",
                  }}
                ></input>
                {errors.companyName && touched.companyName && (
                <div className={"input-feedback"}>{errors.companyName}</div>
              )}
               
                <label htmlFor="email">
                  <strong>Email</strong>{" "}
                </label>
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
                {errors.email && touched.email && (
                <div className={"input-feedback"}>
                  {errors.email}
                </div>
              )}
                 <label htmlFor="webbAddress">
                  <strong>Web</strong>
                </label>
                <input
                id="webbAddress"
                value={values.webbAddress}
                onChange={handleChange}
                  type="text"
                  className="input"
                  style={{
                    width: "100%",
                  }}
                />
                {errors.webbAddress && touched.webbAddress && (
                <div className={"input-feedback"}>
                  {errors.webbAddress}
                </div>
              )}
                <button type="submit"  disabled={!dirty || isSubmitting}>
                  Kaydet
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div> */
    )
}
