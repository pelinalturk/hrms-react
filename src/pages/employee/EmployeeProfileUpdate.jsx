import React from 'react'
import { EmployeeService } from '../../services/employee/employeeService'
import { Button, Card, Image, Icon, Grid } from 'semantic-ui-react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import HRMSTextInput from "../../utilities/customFormControls/HRMSTextInput"

export default function EmployeeProfileUpdate() {
    const initialValues = {id:"39", firstName: "", LastName: "", email: "" , photo:""};

    const schema = Yup.object({
        firstName: Yup.string(),
        email: Yup.string().email(),
        LastName: Yup.string(),
        photo:Yup.string(),
      });

     return (
        <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          let employeeService = new EmployeeService()
          employeeService.updateProfil(values).then((result) => console.log(result.data)); 
        }}
      >
        <Form className="ui form">
          <label>
            <strong>İsim</strong>
          </label>
          <HRMSTextInput name="firstName" />
          <label>
            <strong>Soy isim</strong>
          </label>
          <HRMSTextInput name="lastName" />
          <label>
            <strong>Email</strong>
          </label>
          <HRMSTextInput type="email" name="email" />
          <label>
            <strong>Fotoğraf</strong>
          </label>
          <HRMSTextInput type="file" name="photo" />
          <Button color="green" type="submit">
            Güncelle
          </Button>
        </Form>
      </Formik>
      )
}
