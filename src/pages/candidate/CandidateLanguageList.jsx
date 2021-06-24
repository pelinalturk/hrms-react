import React, { useEffect, useState } from "react";
import { CandidateLanguageService } from "../../services/candidate/candidateLanguageService";
import { Table, Rating,Button } from "semantic-ui-react";
import LanguageModal from "../candidateModals/LanguageModal";
import LanguageUpdateModal from "../candidateModals/LanguageUpdateModal";

export default function CandidateLanguageList() {
  const [candidateLanguages, setcandidateLanguages] = useState([]);
  let candidateLanguageService = new CandidateLanguageService();
  useEffect(() => {
    
    candidateLanguageService
      .getCandidateLanguageService()
      .then((result) => setcandidateLanguages(result.data.data));
  }, []);

  const deleteLanguage = (id) => {
    candidateLanguageService.deleteLanguage(id).then((result) => console.log(result.data));
  }

  const updateLanguage = (id, level) => {
    candidateLanguageService.updateLanguage(id, level).then((result) => console.log(result.data))
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
              <Table.Cell><LanguageUpdateModal/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Button><LanguageModal/></Button>
      </Table>
    </div>
  );
}
