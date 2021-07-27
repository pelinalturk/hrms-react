import React, { useEffect, useState } from "react";
import { Button, Comment, Header } from "semantic-ui-react";
import { FavoritiesService } from "../../../services/candidate/candidateFavoritiesService";
import JobTitleModal from "../../jobTitle/JobTitleModal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function CandidateFavoritiesList() {
  const [favorities, setFavorities] = useState([]);
  let candidateFavoritiesService = new FavoritiesService();
  useEffect(() => {
    let candidateFavoritiesService = new FavoritiesService();
    candidateFavoritiesService
      .getById(5)
      .then((res) => setFavorities(res.data.data));
  }, [favorities]);

  const deleteFavorities = (id) => {
    candidateFavoritiesService.deleteFavority(id).then((result) => console.log(result.data));
    toast.success("Favorilerden Kaldırıldı !")
  }
  return (
    <div>
      <Comment.Group threaded>
        <Header as="h3" dividing>
          Favori İş İlanları
        </Header>
        {favorities.map((favorite) => (
          <Comment key={favorite.id}>
            <Comment.Avatar
              as="a"
              src={
                favorite.jobAdvertisement?.employer.photo === null
                  ? "https://res.cloudinary.com/pelin/image/upload/v1625259339/b2a179c4-bae4-4eaa-ae2e-6a4b8b5f720a_db3mec.png"
                  : favorite.jobAdvertisement?.employer.photo
              }
            />
            <Comment.Content>
              <Comment.Author>
                {favorite.jobAdvertisement?.jobPosition.title}
              </Comment.Author>
              <Comment.Metadata>
                <span>
                  Son Başvuru Tarihi:{" "}
                  {favorite.jobAdvertisement?.applicationDeadline}
                </span>
              </Comment.Metadata>
              <Comment.Text>
                {favorite.jobAdvertisement?.employer.companyName}
              </Comment.Text><Button size="mini" color="pink"  onClick={() => deleteFavorities(favorite.id)}>Favorilerden Kaldır</Button>
             <Link to={`/candidatePage/${favorite.jobAdvertisement?.id}`}><JobTitleModal/></Link>
            </Comment.Content>
          </Comment>
        ))}
      </Comment.Group>
    </div>
  );
}
