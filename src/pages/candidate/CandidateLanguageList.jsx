import React, { useEffect, useState } from "react";
import { CandidateLanguageService } from "../../services/candidate/candidateLanguageService";
import { Header, Table, Rating } from "semantic-ui-react";

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
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidateLanguages.map((candidateLanguage) => (
            <Table.Row>
              <Table.Cell singleLine>{candidateLanguage.language}</Table.Cell>
              <Table.Cell>
                <Rating icon="star" defaultRating={candidateLanguage.languageLevel} maxRating={5} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
