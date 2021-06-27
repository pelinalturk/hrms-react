import React, { useEffect, useState } from "react";
import { CandidateCvService } from "../../../services/candidate/candidateCvService";
import { Image, Table, Header, Grid } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import ContactInformationModal from '../../candidateModals/ContactInformationModal'

export default function CandidateCvList() {
  const [candidateCvs, setcandidateCvs] = useState([]);
  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService
      .getCandidateCvService()
      .then((result) => setcandidateCvs(result.data.data));
  }, []);
  return (
    <div>
      
        <Card.Group>
      {candidateCvs.map((candidateCv) => (
    <Card fluid>
      <Card.Content>
             <Image
          floated='right'
          size='mini'
         src={candidateCv.photo}
        />
        <Card.Header>{candidateCv.candidateFirstName}{" "}{candidateCv.candidateLastName}</Card.Header>
        <Card.Meta>{candidateCv.candidateEmail}</Card.Meta>
        <Card.Description>
         {candidateCv.candidateBirthYear}
        </Card.Description>
      </Card.Content>
      <ContactInformationModal/>
    </Card>
    ))}
    </Card.Group>
       
     
    
           
          
    </div>
    
  );
}
