import React from 'react'
import { Modal, Button } from 'semantic-ui-react';
import UpdateEmployerConfirm from "./UpdateEmployerConfirm"
export default function UpdateRequestModal() {
    const [open, setOpen] = React.useState(false);

    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button basic color="green"> Görüntüle</Button>}
      >
        <Modal.Header>Şirket Bilgileri</Modal.Header>
        <Modal.Content>
          <Modal.Description>
              <UpdateEmployerConfirm/>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Kapat
          </Button>
        </Modal.Actions>
      </Modal>
    )
}
