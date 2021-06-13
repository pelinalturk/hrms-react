import React, { useEffect, useState } from "react";
import { CandidateCvService } from "../../services/candidate/candidateCvService";
import { Grid, Table } from "semantic-ui-react";
import { Header, Image } from 'semantic-ui-react'

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
      
          <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><h3>İletişim Bilgileri</h3></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
          {candidateCvs.map((candidateCv) => (
             <Image src={candidateCv.photo} rounded size='mini' />
          ))}
           
            <Header.Content>
              Pelin Altürk
            </Header.Content>
          </Header>
        </Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
          <Image src="https://res.cloudinary.com/pelin/image/upload/v1623170064/github_oz2p8t.png" rounded  />
            <Header.Content>
              Github Link
            </Header.Content>
          </Header>
        </Table.Cell>
        {candidateCvs.map((candidateCv) => (
             <Table.Cell>{candidateCv.githublink}</Table.Cell>
            ))}
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h5' image>
          <Image src='https://res.cloudinary.com/pelin/image/upload/v1623170078/LinkedIn-Icon-Squircle-Dark_slfavv.png' rounded size='mini' />
            <Header.Content>
              Linkedin Link
            </Header.Content>
          </Header>
        </Table.Cell>
        {candidateCvs.map((candidateCv) => (
            <Table.Cell>{candidateCv.linkedinlink}</Table.Cell>
            ))}
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as='h4' image>
            <Header.Content>
              Açıklama
            
            </Header.Content>
          </Header>
        </Table.Cell>
        {candidateCvs.map((candidateCv) => (
           <Table.Cell>{candidateCv.description}</Table.Cell>
        ))}
       
      </Table.Row>
    </Table.Body>
  </Table>
          
    </div>
    
  );
}
