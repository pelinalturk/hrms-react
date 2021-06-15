import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
import { Item } from 'semantic-ui-react'
import { Container, Header, Message, Segment } from "semantic-ui-react";
import axios from "axios";

export default function JobAdvertisementList() {

  const [ActivejobAdvertisements, setActivejobAdvertisements] = useState([]);
  useEffect(()=>{
      let jobAdvertisementService = new JobAdvertisementService()
      jobAdvertisementService.getJobAdvertisements().then(result=>setActivejobAdvertisements(result.data.data))
  },[])
  return (
    <div>
      <h3>Onaylanmış İş İlanları</h3>
       <Table celled className="customers">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket ismi</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Açık pozisyon sayısı</Table.HeaderCell>
            <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell>
            <Table.HeaderCell>Detay</Table.HeaderCell>
            <Table.HeaderCell>Minimum Maaş</Table.HeaderCell>
            <Table.HeaderCell>Maximum Maaş</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {ActivejobAdvertisements.map((ActivejobAdvertisement) => (
            <Table.Row key={ActivejobAdvertisement.id}>
              <Table.Cell>{ActivejobAdvertisement.jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{ActivejobAdvertisement.jobAdvertisement.jobPosition.title}</Table.Cell>
              <Table.Cell>{ActivejobAdvertisement.jobAdvertisement.countOfOpenPosition}</Table.Cell>
              <Table.Cell>{ActivejobAdvertisement.jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>{ActivejobAdvertisement.jobAdvertisement.jobDetail}</Table.Cell>
              <Table.Cell>{ActivejobAdvertisement.jobAdvertisement.minWage}</Table.Cell>
              <Table.Cell>{ActivejobAdvertisement.jobAdvertisement.maxWage}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table> 
    </div>
  );
}
