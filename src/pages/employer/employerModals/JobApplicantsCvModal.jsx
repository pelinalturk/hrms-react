import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import JobApplicantsCVdetail from '../JobApplicantsCVdetail';

export default function JobApplicantsCVModal() {
    const [open, setOpen] = React.useState(false);
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button> </Button>}
      >
        <Modal.Header>Cv Bilgisi</Modal.Header>
        <Modal.Content>
          <Modal.Description>
          <JobApplicantsCVdetail/>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Vazgeç
          </Button>
        </Modal.Actions>
      </Modal>
    );
}
