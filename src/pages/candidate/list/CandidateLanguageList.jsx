import React, { useEffect, useState } from "react";
import {CandidateLanguageService} from "../../../services/candidate/candidateLanguageService"
import { Table, Rating,Button } from "semantic-ui-react";
import LanguageModal from "../../candidateModals/LanguageModal";
import LanguageUpdateModal from "../../candidateModals/LanguageUpdateModal";
import {Link} from "react-router-dom"

export default function CandidateLanguageList() {
  const [candidateLanguages, setcandidateLanguages] = useState([]);
  let candidateLanguageService = new CandidateLanguageService();
  useEffect(() => {
    
    candidateLanguageService
      .getByCandidateId(5)
      .then((result) => setcandidateLanguages(result.data));
  }, [candidateLanguages]);

  const deleteLanguage = (id) => {
    candidateLanguageService.deleteLanguage(id).then((result) => console.log(result.data));
  }


  return (
    <div>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Dil</Table.HeaderCell>
            <Table.HeaderCell>Seviye</Table.HeaderCell>
            <Table.HeaderCell>Sil</Table.HeaderCell>
            <Table.HeaderCell>Güncelle</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidateLanguages.map((candidateLanguage) => (
            <Table.Row key={candidateLanguage.id}>
              <Table.Cell singleLine>{candidateLanguage.language}</Table.Cell>
              <Table.Cell>
                <Rating icon="star" defaultRating={candidateLanguage.languageLevel} maxRating={5} disabled />
              </Table.Cell>
              <Table.Cell><Button onClick={() =>deleteLanguage(candidateLanguage.id)}>Sil</Button></Table.Cell>
              <Table.Cell><Link to= {`/cv/${candidateLanguage.id}`}><LanguageUpdateModal/></Link></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <LanguageModal/>
      </Table>
    </div>
  );
}
