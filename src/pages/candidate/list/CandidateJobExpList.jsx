import React, { useEffect, useState } from "react";
import {Table,Button } from "semantic-ui-react";
import JobExperienceModal from "../../candidateModals/JobExperienceModal";
import {CandidateJobExpService} from "../../../services/candidate/candidateJobExpService"
export default function CandidateJobExpList() {
  const [candidateJobExps, setcandidateJobExps] = useState([]);
  let candidateJobExpService = new CandidateJobExpService();

  useEffect(() => {
    candidateJobExpService
      .getCandidateJobExpService()
      .then((result) => setcandidateJobExps(result.data.data));
  }, [candidateJobExps]);

  const deleteJobExperience = (id) => {
    candidateJobExpService.deleteJobExperience(id).then((result) => console.log(result.data));
  }

  return (
    <div>
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Bitiş Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Sil</Table.HeaderCell> 
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidateJobExps.map((candidateJobExp) => (
            <Table.Row>
              <Table.Cell>{candidateJobExp.companyName}</Table.Cell>
              <Table.Cell>{candidateJobExp.jobPosition.title}</Table.Cell>
              <Table.Cell>{candidateJobExp.startingDate}</Table.Cell>
              <Table.Cell>{candidateJobExp.endingDate}</Table.Cell>
              <Table.Cell><Button onClick= {() => deleteJobExperience(candidateJobExp.id)}>Sil</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
       <JobExperienceModal/>
      </Table>
    </div>
  );
}
