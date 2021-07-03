import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Card, Image, Icon } from 'semantic-ui-react'
import { EmployeeCheckService } from '../../services/employer/employeeCheckService'
import { EmployerService } from '../../services/employer/employerService'

export default function UnapprovedEmployers() {
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getByIsActiveTrueIsConfirmFalse().then((res) => setEmployers(res.data.data))
    }, [employers])

    let postConfirmed = { 
        confirmed: "",
        employee: "39", 
        employer: {
          id: ""
        } 
      };

      const handleConfirm = (id) => {
          postConfirmed.employer.id=id
          postConfirmed.confirmed=true
          let employeeCheckService= new EmployeeCheckService()
          employeeCheckService.getEmployeeCheckFalse(postConfirmed).then((result) => console.log(result.data)); 
      }
    return (
        <div>
            <Card.Group>
                {employers.map((employer) =>(
                    <Card fluid key={employer.id}>
                    <Card.Content>
                      <Image
                        floated='right'
                        size='mini'
                        src={
                            employer.photo === null
                  ? "https://res.cloudinary.com/pelin/image/upload/v1625155753/66.jpg6706_pae9ox.jpg"
                  : employer?.photo
                        }
                      />
                      <Card.Header>{employer.companyName}</Card.Header>
                      <Card.Meta> <Icon name="envelope outline" />{employer.email}</Card.Meta>
                      <Card.Meta><Icon name="phone" />{employer.phoneNumber}</Card.Meta>
                      <Card.Description>
                        {employer.webAddress}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button color="green" onClick={() =>handleConfirm(employer.id)}>Onayla</Button>
                      </div>
                    </Card.Content>
                  </Card>
    ))}
    </Card.Group>
        </div>
    )
}
