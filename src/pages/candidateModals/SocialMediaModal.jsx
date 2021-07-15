import React from 'react'
import { Button, Modal } from "semantic-ui-react";
import AddSocialMedia from "../candidate/add/AddSocialMedia"

export default function SocialMediaModal() {
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
            <AddSocialMedia/>
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
