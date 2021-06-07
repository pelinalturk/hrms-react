import React, { useEffect, useState } from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";
import { EmployeeCheckService } from "../services/employeeCheckService";

export default function EmployeeCheckList() {
  const [employeeChecks, setEmployeeChecks] = useState([]);

  useEffect(() => {
    let employeeCheckService = new EmployeeCheckService();
    employeeCheckService.getEmployeeCheckService().then(result=>setEmployeeChecks(result.data.data))
  }, []);

  return (
    <div>
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell />
            <Table.HeaderCell>Sistem kullanıcısı id</Table.HeaderCell>
            <Table.HeaderCell>Şirket ismi</Table.HeaderCell>
            <Table.HeaderCell>Şirket Web Adresi</Table.HeaderCell>
            <Table.HeaderCell>Şirket Maili</Table.HeaderCell>
            <Table.HeaderCell>Şirket Telefon Numarası</Table.HeaderCell>
            <Table.HeaderCell>Onay Durumu</Table.HeaderCell>
            <Table.HeaderCell>Onay Tarihi</Table.HeaderCell>
           
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employeeChecks.map((employeeCheck) => (
            <Table.Row  key={employeeCheck.id}>
              <Table.Cell collapsing>
                <Checkbox slider />
              </Table.Cell>
              <Table.Cell>{employeeCheck.employee}</Table.Cell>
              <Table.Cell>{employeeCheck.employerCompanyName}</Table.Cell>
              <Table.Cell>{employeeCheck.employerWebAddress}</Table.Cell>
              <Table.Cell>{employeeCheck.employerEmail}</Table.Cell>
              <Table.Cell>{employeeCheck.employerPhoneNumber}</Table.Cell>
              <Table.Cell>{employeeCheck.isConfirmed}</Table.Cell>
              <Table.Cell>{employeeCheck.confirmDate}</Table.Cell>
           
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Add User
              </Button>
              <Button size="small">Approve</Button>
              <Button disabled size="small">
                Approve All
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
