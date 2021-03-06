import React, { useEffect, useState } from "react";
import { CandidateSchoolService } from "../../../services/candidate/candidateSchoolService";
import { Table, Button } from "semantic-ui-react";
import SchoolModal from "../../candidateModals/SchoolModal";
import { CandidateCvService } from "../../../services/candidate/candidateCvService";
export default function CandidateSchoolList() {
  const [candidateSchools, setcandidateSchools] = useState([]);
  let candidateSchoolService = new CandidateSchoolService();
  
  /* const [candidateCvs, setcandidateCvs] = useState([]);
  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService
      .getByCandidateId(5)
      .then((result) => setcandidateCvs(result.data));
  }, []); */

  /* useEffect(() => {
    candidateSchoolService.getCandidateSchoolService().then(result => setcandidateSchools(result.data.data))
  }, [candidateSchools]);*/

  const deleteSchool = (id) => {
    candidateSchoolService.deleteSchool(id).then((result) => console.log(result.data));
  } 

  useEffect(() => {
    candidateSchoolService.getByCandidateId(5).then(res => setcandidateSchools(res.data.data))
  }, [candidateSchools])

  return (
    <div>
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
          ))}
          <SchoolModal/>
        </Table.Body>
      </Table>
    </div>
  );
}
