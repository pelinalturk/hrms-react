import React, { useEffect, useState } from 'react'
import {Table,Button } from "semantic-ui-react";
import { CandidateTechsService } from '../../../services/candidate/candidateTechsService';
import TechsModal from '../../candidateModals/TechsModal';

export default function TechnologyList() {
    const [techs, setTechs] = useState([])
    let candidateTechsService = new  CandidateTechsService()
    useEffect(() => {
      
      candidateTechsService.getByCandidateId(5).then((result) => setTechs(result.data))
    }, [techs])

    const deleteTech = (id) => {
        candidateTechsService.deleteTechs(id).then((result) => console.log(result.data))
    }

    return (
        <div>
            <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Sil</Table.HeaderCell> 
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {techs.map((tech) => (
                <Table.Row>
              <Table.Cell>{tech.description}</Table.Cell>
              <Table.Cell><Button onClick = {() => deleteTech(tech.id)}>Sil</Button></Table.Cell>
            </Table.Row>
            ))}
        </Table.Body>
        <TechsModal/>
      </Table>
        </div>
    )
}
