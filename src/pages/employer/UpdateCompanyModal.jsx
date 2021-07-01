import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import HRMSTextInput from "../../utilities/customFormControls/HRMSTextInput";
import { EmployerService } from "../../services/employer/employerService";
export default function UpdateCompanyModal() {

  const initialValues = { companyName: "", email: "", webbAddress: "" };

  const schema = Yup.object({
    companyName: Yup.string().required("Şirket İsmi Giriniz !"),
    email: Yup.string().email().required("Email Giriniz !"),
    webbAddress: Yup.string().required(" Web Adresinizi Giriniz !"),
  });
  return (
    //onay isteği gönder
    //update kısmından let ile id getir

    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        let employerService = new EmployerService();
        employerService.updateEmployer(40, values).then((result) => console.log(result.data)); 
      }}
    >
      <Form className="ui form">
        <label>
          <strong>Şirket İsmi</strong>
        </label>
        <HRMSTextInput name="companyName" />
        <label>
          <strong>Email</strong>
        </label>
        <HRMSTextInput type="email" name="email" />
        <label>
          <strong> Web Adress</strong>
        </label>
        <HRMSTextInput name="webbAddress" />
        <Button color="green" type="submit">
          Güncelle
        </Button>
      </Form>
    </Formik>
  );
}
