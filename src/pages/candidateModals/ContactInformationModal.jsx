import React from "react";
import { Button, Modal } from "semantic-ui-react";
import ContactInformation from "../candidate/ContactInformation";
export default function ContactInformationModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Düzenle</Button>}
    >
      <Modal.Header>İletişim Bilgilerini Düzenle</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <ContactInformation />
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
