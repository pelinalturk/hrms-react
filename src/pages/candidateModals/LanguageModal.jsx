import React from "react";
import { Button, Modal } from "semantic-ui-react";
import AddLanguage from "../candidate/add/AddLanguage";
export default function LanguageModal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button> Ekle</Button>}
    >
      <Modal.Header>Dil Ekle</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddLanguage />
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
