import React, { useEffect, useState } from "react";
import { Button, Card, Image, Label } from "semantic-ui-react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
export default function PublishedByTheEmployer() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();
  useEffect(() => {
    jobAdvertisementService
      .getByEmployerId(32)
      .then((res) => setJobAdvertisements(res.data));
  }, [jobAdvertisements]);

  const handleActive = (id) => {
    jobAdvertisementService
      .changeIsActive(id)
      .then((result) => console.log(result.data));
  };
  let yil = new Date().getFullYear()
  let ay = new Date().getMonth()
  let gun = new Date().getDate()
  var year=new Date(yil,ay,gun)

  return (
      
    <div>
      <Label color="purple">
        <h3>Yayınladığım İş İlanları</h3>
      </Label>
      <Card.Group>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Card key={jobAdvertisement.id}>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src={
                  jobAdvertisement.employer?.photo === null
                    ? "https://res.cloudinary.com/pelin/image/upload/v1625155753/66.jpg6706_pae9ox.jpg"
                    : jobAdvertisement.employer?.photo
                }
              />
              <Card.Header>{jobAdvertisement.jobPosition?.title}</Card.Header>
              <Card.Meta>
                {jobAdvertisement.mannerOfWork?.mannerOfWork}
                {"/"}
                {jobAdvertisement.workingHour?.workingHour}
              </Card.Meta>
              <Card.Meta>
                {jobAdvertisement.positionLevel?.positionLevel}
              </Card.Meta>
              <Card.Meta></Card.Meta>
              <Card.Meta>
                <font color="purple">
                  Son Başvuru Tarihi: {jobAdvertisement.applicationDeadline}
                </font>
              </Card.Meta>
              <Card.Description>
                {jobAdvertisement.confirm === true ? (
                  <font color="green">
                    Sistem personeli tarafından onaylandı
                  </font>
                ) : (
                  <font color="red">
                    Sistem personeli iş ilanını onaylamadı
                  </font>
                )}
              </Card.Description>
              <Card.Description>
                -------------------------------------
              </Card.Description>
              <Card.Description>{jobAdvertisement.jobDetail}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  onClick={() => handleActive(jobAdvertisement.id)}
                  basic
                  color="purple"
                >
                  Yayından Kaldır
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}
