import React, { useEffect, useState } from "react";
import SideBar from "../../layouts/SideBar";
import { Link } from "react-router-dom";
import { Button, Card, Grid, Image } from "semantic-ui-react";
import { FavoritiesService } from "../../services/candidate/candidateFavoritiesService";
import FavoritiesModal from "../candidateModals/FavoritiesModal";
import { toast } from "react-toastify";

export default function FavoriteJobDetail() {
  //candidate id sine göre
  //silme işi favori id ye göre
  const [favorities, setfavorities] = useState([]);
    let candidateFavoritiesService = new FavoritiesService();
  
    useEffect(() => {
    candidateFavoritiesService
      .getById(5)
      .then((res) => setfavorities(res.data.data));
  }, []);

  const deleteFavorities = (id) => {
    candidateFavoritiesService.deleteFavority(id).then((result) => console.log(result.data));
    toast.success("Favorilerden Kaldırıldı !")
  }

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column></Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="5">
            <SideBar />
          </Grid.Column>
          <Grid.Column width="11">
            <Card.Group>
              {favorities.map((favoritie) => (
                <Card fluid key={favoritie.id}>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src={
                        favoritie.jobAdvertisement.employer?.photo === null
                          ? "https://res.cloudinary.com/pelin/image/upload/v1625155753/66.jpg6706_pae9ox.jpg"
                          : favoritie.jobAdvertisement.employer?.photo
                      }
                    />
                    <Card.Header>
                      {favoritie.jobAdvertisement.employer?.companyName}
                    </Card.Header>
                    <Card.Meta>
                      {favoritie.jobAdvertisement.jobPosition?.title}
                    </Card.Meta>
                    <Card.Meta>
                      {favoritie.jobAdvertisement.positionLevel?.positionLevel}
                    </Card.Meta>
                    <Card.Description>
                      {favoritie.jobAdvertisement?.jobDetail}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Link to={`/favoritiesDetail/${favoritie.jobAdvertisement?.id}`}><FavoritiesModal/></Link>
                      <Button basic color="red" onClick={() => deleteFavorities(favoritie.id)}>
                        Kaldır
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
