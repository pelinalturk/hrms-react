import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { JobApplication } from '../../services/candidate/candidateJobApplicationService';
import JobApplicantsCVModal from './employerModals/JobApplicantsCvModal';

export default function JobApplicants() {
    let { id } = useParams();

    const [jobApplications, setJobApplications] = useState([])

    useEffect(() => {
      let candidateJobApplicationService = new  JobApplication()
      candidateJobApplicationService.getByJobAdvertisementId(id).then((res) => setJobApplications(res.data.data))
    }, [])
    return (//jobapplicationsa gçre jobAdvertin id si gelecek ama listelemeyi jobApp dan yap
        //CV görüntüle butonu koy oraya da candidateId gidecek
        <div>
             <Card.Group>
                 {jobApplications.map((jobApplication) => (
                    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{jobApplication.candidate?.id}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
          <Link to={`/jobApplications/${jobApplication.candidate?.id}`}><JobApplicantsCVModal/></Link>  
          </Button>
         
        </div>
      </Card.Content>
    </Card>
                 ))}
    
  </Card.Group>
        </div>
    )
}
