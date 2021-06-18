import React, { useEffect, useState } from "react";
import { CandidateLanguageService } from "../../services/candidate/candidateLanguageService";
import { Header, Table, Rating,Button } from "semantic-ui-react";
import LanguageModal from "../candidateModals/LanguageModal";
export default function CandidateLanguageList() {
  const [candidateLanguages, setcandidateLanguages] = useState([]);

  useEffect(() => {
    let candidateLanguageService = new CandidateLanguageService();
    candidateLanguageService
      .getCandidateLanguageService()
      .then((result) => setcandidateLanguages(result.data.data));
  }, []);

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
            <Table.Row>
              <Table.Cell singleLine>{candidateLanguage.language}</Table.Cell>
              <Table.Cell>
                <Rating icon="star" defaultRating={candidateLanguage.languageLevel} maxRating={5} disabled />
              </Table.Cell>
              <Table.Cell><Button>Sil</Button></Table.Cell>
              <Table.Cell><Button>Güncelle</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Button><LanguageModal/></Button>
      </Table>
    </div>
  );
}
