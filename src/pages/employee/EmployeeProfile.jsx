import React, { useEffect, useState } from "react";
import { EmployeeService } from "../../services/employee/employeeService";
import { Card, Image, Icon, Grid } from "semantic-ui-react";
import UpdateModal from "./UpdateModal";
import EmployeeSideBar from "../../layouts/EmployeeSideBar"
import anonUser from "../../images/anonUser.png"

export default function EmployeeProfile() {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService.getById(39).then((res) => setEmployee(res.data));
  }, [employee]);
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="3"><EmployeeSideBar/></Grid.Column>
          <Grid.Column width="10">
          <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src={
                employee.photo === null
                  ? anonUser
                  : employee.photo
              }
            />
            <Card.Header>
              {employee.firstName} {employee.lastName}
            </Card.Header>
            <Card.Meta></Card.Meta>
            <Card.Description>
              <Icon name="envelope" />
              {employee.email}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <UpdateModal />
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
          </Grid.Column>
          <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
