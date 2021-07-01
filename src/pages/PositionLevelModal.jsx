import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import PositionModalDetail from './PositionModalDetail';

export default function PositionLevelModal() {
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
          <PositionModalDetail/>
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
