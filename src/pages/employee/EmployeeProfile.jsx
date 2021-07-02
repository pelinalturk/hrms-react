import React, { useEffect, useState } from 'react'
import { EmployeeService } from '../../services/employee/employeeService'
import { Card, Image, Icon, Grid } from 'semantic-ui-react'
import UpdateModal from './UpdateModal'

export default function EmployeeProfile() {
    const [employee, setEmployee] = useState({})

    useEffect(() => {
       let employeeService = new  EmployeeService();
       employeeService.getById(39).then((res) => setEmployee(res.data));
    }, [employee])
    return (
        <div>
            <Grid><Grid.Row>
             <Grid.Column width="12"></Grid.Column>
             <Grid.Column width="4">
             </Grid.Column></Grid.Row> </Grid>
        <Card.Group>
        <Card fluid>
          <Card.Content>
          <Image
          floated='right'
          size='mini'
          src={employee.photo === null
            ? "https://res.cloudinary.com/pelin/image/upload/v1625259339/b2a179c4-bae4-4eaa-ae2e-6a4b8b5f720a_db3mec.png"
            : employee.photo
          }
        />
            <Card.Header>{employee.firstName}{" "}{employee.lastName}</Card.Header>
            <Card.Meta>
               </Card.Meta>
            <Card.Description>
            <Icon name = "envelope"/>
                {employee.email}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <UpdateModal/>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
        </div>
    )
}
