import React, { useEffect, useState } from "react";
import { CandidateCvService } from "../../../services/candidate/candidateCvService";
import { Image, Table, Header, Grid } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import ContactInformationModal from "../../candidateModals/ContactInformationModal";

export default function CandidateCvList() {
  const [candidate, setcandidate] = useState([]);
  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService
      .getByCandidateId(5)
      .then((result) => setcandidate(result.data));
  }, []);
  return (
    <div>
      <Card.Group>
       {/*  {candidateCvs.map((candidateCv) =>( */}
           <Card fluid>
           <Card.Content>
             <Image floated="right" size="mini" src={candidate.photo} />
             <Card.Header>
               {candidate.firstName}{" "}
               {candidate.lastName}
             </Card.Header>
             <Card.Meta>{candidate.email}</Card.Meta>
             <Card.Description>
               {candidate?.birthYear}
             </Card.Description>
           </Card.Content>
           <ContactInformationModal />
         </Card>
       {/*  ))} */}
       
      </Card.Group>
    </div>
  );
}
