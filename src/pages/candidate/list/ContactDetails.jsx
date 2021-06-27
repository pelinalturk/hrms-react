import React from "react";
import { CandidateCvService } from "../../../services/candidate/candidateCvService";
import { Image, Table, Header, Grid } from "semantic-ui-react";
import { useEffect } from "react";
import { useState } from "react";

export default function ContactDetails() {
  const [candidateCvs, setcandidateCvs] = useState({});
  useEffect(() => {
    let candidateCvService = new CandidateCvService();
    candidateCvService
      .getCandidateCvService()
      .then((result) => setcandidateCvs(result.data.data));
  }, []);

  return (
    <div>
      <Table basic="very" celled collapsing>
        <Table.Body>
          
          <Table.Row>
          
            <Table.Cell>
              <Header as="h4" image>
                <Image
                  src="https://res.cloudinary.com/pelin/image/upload/v1623170064/github_oz2p8t.png"
                  rounded
                />
                <Header.Content>Github Link</Header.Content>
              </Header>
            </Table.Cell>
              <Table.Cell>{candidateCvs.githublink}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h5" image>
                <Image
                  src="https://res.cloudinary.com/pelin/image/upload/v1623170078/LinkedIn-Icon-Squircle-Dark_slfavv.png"
                  rounded
                  size="mini"
                />
                <Header.Content>Linkedin Link</Header.Content>
              </Header>
            </Table.Cell>
            
              <Table.Cell>{candidateCvs.linkedinlink}</Table.Cell>
            
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as="h4" image>
                <Header.Content>Açıklama</Header.Content>
              </Header>
            </Table.Cell>
           
              <Table.Cell>{candidateCvs.description}</Table.Cell></Table.Row>
           
          
        </Table.Body>
      </Table>
    </div>
  );
}
