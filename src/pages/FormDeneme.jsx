import React from 'react'
import * as YUP from "yup";
import { Formik, Form} from "formik";
import {Button } from "semantic-ui-react";
import HRMSTextInput from '../utilities/customFormControls/HRMSTextInput';
import { CandidateLanguageService } from '../services/candidate/candidateLanguageService';
import HRMSDropdownInput from '../utilities/customFormControls/HRMSDropdownInput';
import { CandidateJobExpService } from '../services/candidate/candidateJobExpService';
export default function FormDeneme() {
    const initialValues = {curriculumVitaeId:"2", 
    companyName: "",
    jobPositionId: "",
    startingDate: "",
    endingDate: "",};

    const options = [
        { key: 1, text: 'Choice 1', value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]

    const schema = YUP.object({
        companyName: YUP.string().required("Şirket ismi boş olamaz !"),
                jobPositionId: YUP.string().required("İş pozisyonu boş olamaz !"),
                startingDate: YUP.date().required("Başlama tarihini giriniz !"),
                endingDate: YUP.date(),
      });
    return (
        <Formik
         initialValues = {initialValues}
         validationSchema={schema}
         onSubmit={(values) => {
           /*  let candidateJobExpService = new CandidateJobExpService()
            candidateJobExpService.addJobExp(values).then(result => console.log(result.data)) */
             console.log(values)
         }}
        >
        <Form className="ui form">
        <HRMSTextInput name="companyName"/>
        <HRMSDropdownInput options={options} name="jobPositionId" id="jobPositionId"/>
        <HRMSTextInput type="date" name="startingDate"/>
        <HRMSTextInput type="date" name="endingDate"/>
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>

        </Formik>
    )
}
