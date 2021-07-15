import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import AddCoverLetter from '../candidate/add/AddCoverLetter';
export default function CoverLetterModal() {
    const [open, setOpen] = React.useState(false);

    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button basic color="green"> Ekle</Button>}
      >
        <Modal.Header>Sosyal Medya Ekle</Modal.Header>
        <Modal.Content>
          <Modal.Description>
           <AddCoverLetter/>
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
