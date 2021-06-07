import React, { useEffect, useState } from "react";
import { CandidateSchoolService } from "../services/candidateSchoolService";
import { Table } from "semantic-ui-react";

export default function CandidateSchoolList() {
  const [candidateSchools, setcandidateSchools] = useState([]);
  
  useEffect(() => {
    let candidateSchoolService = new CandidateSchoolService();
    candidateSchoolService.getCandidateSchoolService().then(result => setcandidateSchools(result.data.data))
  }, []);

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
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {candidateSchools.map((candidateSchool) => (
            <Table.Row>
              <Table.Cell>{candidateSchool.schoolName}</Table.Cell>
              <Table.Cell>{candidateSchool.schoolDepartment}</Table.Cell>
              <Table.Cell>{candidateSchool.degreeDescription}</Table.Cell>
              <Table.Cell>{candidateSchool.startingDate}</Table.Cell>
              <Table.Cell>{candidateSchool.endingDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
