import React, { useEffect, useState } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import {JobApplication} from "../../../services/candidate/candidateJobApplicationService"
import anonEmployer from "../../../images/anonEmployer.jpg"
export default function CandidateJobApplicationsList() {
  const [jobApplications, setJobApplications] = useState([])

  useEffect(() => {
    let candidateJobApplicationService = new JobApplication()
    candidateJobApplicationService.getByCandidateId(5).then((res) => setJobApplications(res.data.data))
  }, [])
    return (
        <div>
            <Comment.Group>
    <Header as='h3' dividing>
      Başvurularım
    </Header>
    {jobApplications.map((jobApplication) =>(
       <Comment>
      <Comment.Avatar src={
        jobApplication.jobAdvertisement?.employer.photo === null 
        ? anonEmployer
        :  jobApplication.jobAdvertisement?.employer.photo
      } />
      <Comment.Content>
        <Comment.Author>{jobApplication.jobAdvertisement?.jobDetail}</Comment.Author>
        <Comment.Metadata>
          <div>Başvurma Tarihi: {jobApplication.applicationDate}</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    ))}
  </Comment.Group>
        </div>
    )
}
