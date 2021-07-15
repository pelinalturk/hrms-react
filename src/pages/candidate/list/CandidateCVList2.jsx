import React, { useEffect, useState } from "react";
import { CandidateCvService } from "../../../services/candidate/candidateCvService";
import { Image, Table, Header, Grid, Button } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import ContactInformationModal from "../../candidateModals/ContactInformationModal";
import { CandidateSchoolService } from "../../../services/candidate/candidateSchoolService";
import SchoolModal from "../../candidateModals/SchoolModal";
import { Link } from "react-router-dom";

export default function CandidateCvList2() {
  const [candidateCv, setcandidateCvs] = useState([]);
  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService
      .getByCandidateId(5)
      .then((result) => setcandidateCvs(result.data));
  }, []);

  const [candidateSchools, setcandidateSchools] = useState([]);
  let candidateSchoolService = new CandidateSchoolService();

  const deleteSchool = (id) => {
    candidateSchoolService.deleteSchool(id).then((result) => console.log(result.data));
  } 
  let okulid=candidateCv.id

  useEffect(() => {
    candidateSchoolService.getByCvId(okulid).then(res => setcandidateSchools(res.data.data))
  }, [candidateSchools])
  return (
    <div>
      <Card.Group>
        
           <Card fluid>
           <Card.Content>
             <Image floated="right" size="mini" src={candidateCv.photo} />
             <Card.Header>
               {candidateCv.candidate?.firstName}{" "}
               {candidateCv.candidate?.lastName}
             </Card.Header>
             <Card.Meta>{candidateCv.id}</Card.Meta>
             <Card.Meta>{candidateCv.candidate?.email}</Card.Meta>
             <Card.Description>
               {candidateCv.candidate?.birthYear}
             </Card.Description>
           </Card.Content>
           <ContactInformationModal />
         </Card>
      </Card.Group>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Okul ismi</Table.HeaderCell>
            <Table.HeaderCell>Bölüm</Table.HeaderCell>
            <Table.HeaderCell>Derece</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {candidateSchools.map((candidateSchool) => (
            <Table.Row key={candidateSchool.id}>
              <Table.Cell>{candidateSchool.schoolName}</Table.Cell>
              <Table.Cell>{candidateSchool.schoolDepartment}</Table.Cell>
              <Table.Cell>{candidateSchool.degree?.description}</Table.Cell>
              <Table.Cell>{candidateSchool.startingDate}</Table.Cell>
              <Table.Cell>{candidateSchool.endingDate === null ? <font color = "purple"> Devam Ediyor </font> : candidateSchool.endingDate}</Table.Cell>
              <Table.Cell><Button  onClick={() =>deleteSchool(candidateSchool.id)} >Sil</Button></Table.Cell> 
            </Table.Row>
          ))} {/* <Link to={`/favoritiesDetail/${favoritie.jobAdvertisement?.id}`} */}
     <Link to={`${candidateCv.id}`}><SchoolModal/></Link>  
        </Table.Body>
      </Table>
    </div>
  );
}
