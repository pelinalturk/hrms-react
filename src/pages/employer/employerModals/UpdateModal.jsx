import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import UpdateCompanyModal from '../UpdateCompanyModal';

export default function UpdateModal() {
    const [open, setOpen] = React.useState(false);
    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button> Güncelle</Button>}
      >
        <Modal.Header>Şirket Bilgilerini Güncelle</Modal.Header>
        <Modal.Content>
          <Modal.Description>
          <UpdateCompanyModal/>
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
