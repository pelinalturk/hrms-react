import React from 'react'
import * as YUP from "yup";
import { Formik, Form} from "formik";
import {Button } from "semantic-ui-react";
import HRMSTextInput from '../../../utilities/customFormControls/HRMSTextInput';
import { CandidateLanguageService } from '../../../services/candidate/candidateLanguageService';
export default function FormDeneme() {
    const initialValues = {curriculumVitaeId:"2", language :"", languageLevel:""};

    const schema = YUP.object({
        language: YUP.string().required("Dil giriniz"),
        languageLevel: YUP.number().required("Seviyenizi giriniz"),
      });
    return (
        <Formik
         initialValues = {initialValues}
         validationSchema={schema}
         onSubmit={(values) => {
            let candidateLanguageService= new CandidateLanguageService()
            candidateLanguageService.addLanguage(values).then(result => console.log(result.data))
             console.log(values)
         }}
        >
        <Form className="ui form">
        <HRMSTextInput name="language"/>
        <HRMSTextInput type="number" name="languageLevel"/>
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>

        </Formik>
    )
}
