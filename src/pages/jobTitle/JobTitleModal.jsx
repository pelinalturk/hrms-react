import React from "react";
import { Button, Modal } from "semantic-ui-react";
import JobTitleModalDetail from "./JobTitleModalDetail";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { FavoritiesService } from "../../services/candidate/candidateFavoritiesService";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";

export default function JobTitleModal() {
  let { id } = useParams();
  const [open, setOpen] = React.useState(false);
  let candidateFavoritiesService = new FavoritiesService();
  let jobAdvertisementService = new JobAdvertisementService();

  let favoriteJob = {
    candidate: {
      id: "",
    },
    jobAdvertisement: {
      id,
    },
  };

  const addFavoriteJob = (id) => {
    favoriteJob.candidate.id = 5;
    favoriteJob.jobAdvertisement.id = id;
    if (
      candidateFavoritiesService
        .getByJobId(id)
        .then((result) => console.log(result.data)) === true
    ) {
      toast.error("Daha önce favorilere eklendi.");
    } else {
      jobAdvertisementService
        .addFavoriteJob(favoriteJob)
        .then((result) => console.log(result.data));
      toast.success("Favorilere Eklendi.");
    }
    jobAdvertisementService
      .addFavoriteJob(favoriteJob)
      .then((result) => console.log(result.data));
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size="mini" color="purple">
          Detay
        </Button>
      }
    >
      <Modal.Header>İş Detayı</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <JobTitleModalDetail />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Kapat
        </Button>
        <Button basic color="red" onClick={() => addFavoriteJob(id)}>
          Favorilere Ekle
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
