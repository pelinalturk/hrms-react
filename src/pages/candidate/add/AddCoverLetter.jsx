import React from 'react'
import * as YUP from "yup";
import { Formik, Form} from "formik";
import {Button } from "semantic-ui-react";
import HRMSTextInput from '../../../utilities/customFormControls/HRMSTextInput';
import { CoverLetterService } from '../../../services/candidate/candidateCoverLetterService';
import { toast } from 'react-toastify';

export default function AddCoverLetter() {
    const initialValues = {candidateId:"5", coverLetter :""};

    const schema = YUP.object({
        coverLetter: YUP.string(),
      });
    return (
        <Formik
         initialValues = {initialValues}
         validationSchema={schema}
         onSubmit={(values) => {
           let candidateCoverLetterService = new CoverLetterService()
           candidateCoverLetterService.add(values).then(result => console.log(result.data))
             console.log(values)
             toast.success("Ön yazı eklendi.")
         }}
        >
        <Form className="ui form">
        <HRMSTextInput name="coverLetter"/>
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>

        </Formik>
    )
}
