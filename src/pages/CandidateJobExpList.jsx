import React, { useEffect, useState } from "react";
import { Grid, Table } from "semantic-ui-react";
import { CandidateJobExpService } from "../services/candidateJobExpService";

export default function CandidateJobExpList() {
  const [candidateJobExps, setcandidateJobExps] = useState([]);

  useEffect(() => {
    let candidateJobExpService = new CandidateJobExpService();
    candidateJobExpService
      .getCandidateJobExpService()
      .then((result) => setcandidateJobExps(result.data.data));
  }, []);
  return (
    <div>
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidateJobExps.map((candidateJobExp) => (
            <Table.Row>
              <Table.Cell>{candidateJobExp.companyName}</Table.Cell>
              <Table.Cell>{candidateJobExp.jobPosition.title}</Table.Cell>
              <Table.Cell>{candidateJobExp.startingDate}</Table.Cell>
              <Table.Cell>{candidateJobExp.endingDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
