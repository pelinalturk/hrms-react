import React from 'react'
import { Modal, Button } from 'semantic-ui-react';
import AddTechs from '../candidate/add/AddTechs';

export default function TechsModal() {
    const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button> Ekle</Button>}
    >
      <Modal.Header>Teknoloji Ekle</Modal.Header>
      <Modal.Content>
        <Modal.Description>
         <AddTechs/>
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
