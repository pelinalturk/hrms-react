import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import JobTitleModalDetail from './JobTitleModalDetail';

export default function JobTitleModal() {
    const [open, setOpen] = React.useState(false);

    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button basic color="green"> Detay</Button>}
      >
        <Modal.Header>İş Detayı</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <JobTitleModalDetail/>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Kapat
          </Button>
        </Modal.Actions>
      </Modal>
    );
}
