import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import UpdateLangLevel from '../candidate/UpdateLangLevel';

export default function LanguageUpdateModal() {
    const [open, setOpen] = React.useState(false);

  return (
    <Modal style={{width:"400px"}}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button> Güncelle</Button>}
    >
      <Modal.Header>Dil Seviyesini Güncelle</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateLangLevel/>
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
