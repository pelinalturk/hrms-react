import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { Image, Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar";
import { EmployerService } from "../../services/employer/employerService";
import UpdateModal from "./employerModals/UpdateModal";
export default function UpdateCompany() {
  const [employer, setEmployer] = useState({});

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getById(32).then((result) => setEmployer(result.data));
  }, []);
  return (
    <div>
     
            <Card.Group>
              <Card fluid>
                <Card.Content>
                  <Image
                    floated="right"
                    size="mini"
                    src={
                      employer.photo === null
                        ? "https://res.cloudinary.com/pelin/image/upload/v1625155753/66.jpg6706_pae9ox.jpg"
                        : employer.photo
                    }
                  />
                  <Card.Header>{employer.companyName}</Card.Header>
                  <Card.Meta>{employer.email}</Card.Meta>
                  <Card.Meta>{employer.phoneNumber}</Card.Meta>
                  <Card.Description>{employer.webAddress}</Card.Description>
                  <Card.Description>Adres</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <UpdateModal />
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
        
    </div>
  );
}
