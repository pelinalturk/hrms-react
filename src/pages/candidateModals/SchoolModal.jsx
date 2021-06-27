import React from 'react'
import { Modal, Button } from 'semantic-ui-react';
import AddEducation from '../candidate/add/AddEducation';
export default function SchoolModal() {
    const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button> Ekle</Button>}
    >
      <Modal.Header>Okul Ekle</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddEducation/>
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
