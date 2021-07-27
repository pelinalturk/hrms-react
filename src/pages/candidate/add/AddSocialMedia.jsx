import React from 'react'
import * as YUP from "yup";
import { Formik, Form} from "formik";
import {Button } from "semantic-ui-react";
import HRMSTextInput from '../../../utilities/customFormControls/HRMSTextInput';
import { SocialMediaService } from '../../../services/candidate/candidateSocialMediaService';
import { toast } from 'react-toastify';

export default function AddSocialMedia() {
    const initialValues = {candidateId:"5", githubLink :"", linkedinLink:""};

    const schema = YUP.object({
        githubLink: YUP.string(),
        linkedinLink: YUP.string(),
      });
    return (
        <Formik
         initialValues = {initialValues}
         validationSchema={schema}
         onSubmit={(values) => {
           let candidateSocialMediaService = new SocialMediaService()
           candidateSocialMediaService.add(values).then(result => console.log(result.data))
             console.log(values)
             toast.success("Sosyal Medya eklendi")
         }}
        >
        <Form className="ui form">
        <HRMSTextInput name="githubLink"/>
        <HRMSTextInput name="linkedinLink"/>
        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>

        </Formik>
    )
}
