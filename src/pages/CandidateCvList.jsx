import React, { useEffect, useState } from "react";
import { CandidateCvService } from "../services/candidateCvService";
import { Table } from "semantic-ui-react";

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
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>Github Link</Table.HeaderCell>
            <Table.HeaderCell>Linkedin Link</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {candidateCvs.map((candidateCv) => (
            <Table.Row key={candidateCv.id}>
              <Table.Cell>{candidateCv.candidateId}</Table.Cell>
              <Table.Cell>{candidateCv.githublink}</Table.Cell>
              <Table.Cell>{candidateCv.linkedinlink}</Table.Cell>
              <Table.Cell>{candidateCv.description}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>    
      </Table>
    </div>
  );
}
