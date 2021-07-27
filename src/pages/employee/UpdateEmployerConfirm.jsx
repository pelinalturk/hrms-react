import React, { useEffect, useState } from "react";
import { Button, Card, Image, Grid, Table } from "semantic-ui-react";
import { EmployerService } from "../../services/employer/employerService";
import { EmployeeService } from "../../services/employee/employeeService";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export default function UpdateEmployerConfirm() {//burası tamam
  let { id } = useParams();
  const [employer, setEmployer] = useState({});
  const [updateEmployer, setUpdateEmployer] = useState({});
  let employerService = new EmployerService();

  useEffect(() => {
    employerService.getById(id).then((result) => setEmployer(result.data));
  }, []);

  useEffect(() => {
    employerService
      .getUpdateData(id)
      .then((result) => setUpdateEmployer(result.data));
  }, []);
 let employeeService = new EmployeeService()

  const updateEmployerConfirm = ()=> {
    employeeService.confirmUpdate(39, id).then((result) => console.log(result.data)); 
    toast.success("Şirketin güncelleme isteği onaylandı.")
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
