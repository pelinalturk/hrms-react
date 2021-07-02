import React, { useEffect, useState } from 'react'
import { Card, Icon, Image, Grid } from "semantic-ui-react";
import { useParams } from "react-router";
import {JobAdvertisementService} from "../../services/jobAdvertisement/jobAdvertisementService"
export default function FavoritiesModalDetail() {
    let { id } = useParams();
    let jobAdvertisementService = new JobAdvertisementService();
    const [jobAdvertisement, setjobAdvertisement] = useState({});
     useEffect(() => {
      jobAdvertisementService
        .getById(id)
        .then((res) => setjobAdvertisement(res.data));
    }, []);
    return (
        <Grid>
        <Grid.Row>
          <Grid.Column width="5">
            <Card>
              <Image
                src={
                  jobAdvertisement.employer?.photo === null
                    ? "https://res.cloudinary.com/pelin/image/upload/v1625155753/66.jpg6706_pae9ox.jpg"
                    : jobAdvertisement.employer?.photo
                }
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>
                  {jobAdvertisement.employer?.companyName}
                </Card.Header>
                <Card.Meta>
                  <Icon name="envelope outline" />
                  <span>{jobAdvertisement.employer?.email}</span>
                </Card.Meta>
                <Card.Description>
                  <Icon name="phone" />
                  {jobAdvertisement.employer?.phoneNumber}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="building outline" />
                  {jobAdvertisement.employer?.webAddress}
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width="5">
            <Card>
              <Card.Header>
                <strong>
                  <Icon name="user" />
                  Pozisyon:
                </strong>{" "}
                {jobAdvertisement.jobPosition?.title}
              </Card.Header>
              <Card.Header>
                <strong>
                  <Icon name="plus" />
                  Açık Pozisyon Sayısı:
                </strong>{" "}
                {jobAdvertisement.countOfOpenPosition}
              </Card.Header>
              <Card.Header>
                <strong>
                  <Icon name="calendar alternate" />
                  Son Başvuru Tarihi:
                </strong>{" "}
                {jobAdvertisement.applicationDeadline}
              </Card.Header>
              <Card.Header>
                <Icon name="pin" />
                {jobAdvertisement.mannerOfWork?.mannerOfWork}
                {"/"}
                {jobAdvertisement.workingHour?.workingHour}
              </Card.Header>
              <Card.Header>
                <strong>
                  <Icon name="map marker alternate" />
                  Konum:
                </strong>{" "}
                {jobAdvertisement.city?.city}
              </Card.Header>
              <Card.Header>
                <strong>
                  <Icon name="money bill alternate" />
                  Maaş Skalası:
                </strong>{" "}
                {jobAdvertisement.minWage}
                {"-"}
                {jobAdvertisement.maxWage}
              </Card.Header>
            </Card>
          </Grid.Column>
          <Grid.Column>
            {" "}
            <textarea
              disabled
              defaultValue={jobAdvertisement.jobDetail}
              style={{
                width: "300px",
                minHeight: 100,
                maxWidth: 300,
              }}
            ></textarea>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}
