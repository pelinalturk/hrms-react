import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import AddJobExperience from '../candidate/AddJobExperience';
export default function JobExperienceModal() {

    const [open, setOpen] = React.useState(false)
    return (
        <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Ekle</Button>}
    >
      <Modal.Header>İş Tecrübesi Ekle</Modal.Header>
      <Modal.Content>
        <Modal.Description> <AddJobExperience/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Vazgeç
        </Button>
      </Modal.Actions>
    </Modal>
    )
}
