import React, { useState, useEffect } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { JobAdvertisementService } from "../services/jobAdvertisementService";
import { Item } from 'semantic-ui-react'
import { Container, Header, Message, Segment } from "semantic-ui-react";


export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(()=>{
      let jobAdvertisementService = new JobAdvertisementService()
      jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
  },[])
  return (
    <div>
       <Table celled inverted>
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
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row>
              <Table.Cell>{jobAdvertisement.employerCompanyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPositionTitle}</Table.Cell>
              <Table.Cell>{jobAdvertisement.countOfOpenPosition}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobDetail}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minWage}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxWage}</Table.Cell>
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

{/* <Item.Group>
<a>


{jobAdvertisements.map((jobAdvertisement) => (
 <Item>
      <Item.Image size='small' src='/images/wireframe/image.png' />
      <Item.Content>
        <Item.Header as='a'>{jobAdvertisement.employerCompanyName}</Item.Header>
        <Item.Description>
          <p>{jobAdvertisement.jobPositionTitle}</p>
          <p>
            Many people also have their own barometers for what makes a cute
            dog.
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
))}
   </a>
  </Item.Group> */}
    </div>
  );
}
