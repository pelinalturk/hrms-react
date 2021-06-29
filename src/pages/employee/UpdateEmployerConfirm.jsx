import React, { useEffect, useState } from "react";
import { Button, Card, Image, Grid, Table } from "semantic-ui-react";
import { EmployerService } from "../../services/employerService";
import { EmployeeService } from "../../services/employee/employeeService";

export default function UpdateEmployerConfirm() {
  //önce güncelleme isteği atan employerları sırala detaya tıklayınca bu sayfaya gelsin
  //eski bilgiler yanında da yeni bilgiler görünsün
  //id 40
  const [employer, setEmployer] = useState({});
  const [updateEmployer, setUpdateEmployer] = useState({});
  const [confirm, setConfirm] = useState({})

  let employerService = new EmployerService();

  useEffect(() => {
    employerService.getById(40).then((result) => setEmployer(result.data));
  }, []);

  useEffect(() => {
    employerService
      .getUpdateData(40)
      .then((result) => setUpdateEmployer(result.data));
  }, []);
 let employeeService = new EmployeeService()

 let postConfirmed = { 
  employeeId: "39", 
  employerId:"40"
}; 

  const updateEmployerConfirm = ()=> {
    employeeService.confirmUpdate(39,40).then((result) => console.log(result.data.data)); 
    console.log(postConfirmed)
  }

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="8">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">
                    Şuan ki Bilgiler
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Şirket ismi</Table.Cell>
                  <Table.Cell textAlign="right">{employer.companyName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Email</Table.Cell>
                  <Table.Cell textAlign="right">{employer.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Web Adres</Table.Cell>
                  <Table.Cell textAlign="right">{employer.webAddress}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width="8">
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">
                    Güncelleme İsteği
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Şirket ismi</Table.Cell>
                  <Table.Cell textAlign="right">{updateEmployer.employerUpdateDto?.companyName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Email</Table.Cell>
                  <Table.Cell textAlign="right">{updateEmployer.employerUpdateDto?.email}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Web Adres</Table.Cell>
                  <Table.Cell textAlign="right">{updateEmployer.employerUpdateDto?.webbAddress}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Button color="green" onClick = {() => updateEmployerConfirm()}>Onayla</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
