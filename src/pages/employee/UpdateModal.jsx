import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import EmployeeProfileUpdate from './EmployeeProfileUpdate';

export default function UpdateModal() {
    const [open, setOpen] = React.useState(false);

    return (
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button basic color="green"> Düzenle</Button>}
      >
        <Modal.Header>Profil</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <EmployeeProfileUpdate/>
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
