import React, { useEffect, useState } from "react";
import { CandidateSchoolService } from "../../../services/candidate/candidateSchoolService";
import { Table, Button } from "semantic-ui-react";
import SchoolModal from "../../candidateModals/SchoolModal";
export default function CandidateSchoolList() {
  const [candidateSchools, setcandidateSchools] = useState([]);
  let candidateSchoolService = new CandidateSchoolService();
  
  useEffect(() => {
    candidateSchoolService.getCandidateSchoolService().then(result => setcandidateSchools(result.data.data))
  }, []);

  const deleteSchool = (id) => {
    candidateSchoolService.deleteSchool(id).then((result) => console.log(result.data));
  }

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
              <Table.Cell>{candidateSchool.degreeDescription}</Table.Cell>
              <Table.Cell>{candidateSchool.startingDate}</Table.Cell>
              <Table.Cell>{candidateSchool.endingDate}</Table.Cell>
              <Table.Cell><Button onClick={() =>deleteSchool(candidateSchool.id)}>Sil</Button></Table.Cell> 
            </Table.Row>
          ))}
          <SchoolModal/>
        </Table.Body>
      </Table>
    </div>
  );
}
