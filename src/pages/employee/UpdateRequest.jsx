import React, { useEffect, useState } from 'react'
import { EmployeeService } from '../../services/employee/employeeService'
import { Card, Image, Icon } from 'semantic-ui-react'
import UpdateRequestModal from './UpdateRequestModal'
import {Link} from "react-router-dom"
import anonEmployer from "../../images/anonEmployer.jpg"

export default function UpdateRequest() {//güncelleme isteği bekleyen employer lar
    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.updateRequest().then((res) => setEmployers(res.data.data))
    }, [])
    
    return (
        <div>
             <Card.Group>
                 {employers.map((employer) =>(
                     <Card fluid>
                     <Card.Content>
                       <Image
                         floated='right'
                         size='mini'
                         src={employer.employer?.photo === null
                            ? anonEmployer
                            : employer.employer?.photo
                        }
                       />
                       <Card.Header>{employer.employer?.companyName}</Card.Header>
                       <Card.Meta><Icon name ="envelope outline" />
                           {employer.employer?.email}</Card.Meta>
                       <Card.Description>
                           <Icon name ="building outline" />
                         {employer.employer?.webAddress}
                       </Card.Description>
                     </Card.Content>
                     <Card.Content extra>
                       <div className='ui two buttons'>
                        <Link to ={`/employee/updateRequest/${employer.employer?.id}`}><UpdateRequestModal/></Link> 
                       </div>
                     </Card.Content>
                   </Card>
                 ))}
    </Card.Group>
        </div>
    )
}
