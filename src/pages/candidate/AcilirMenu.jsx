import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import AddJobAdvertisement from '../jobAdvertisement/AddJobAdvertisement'

export default function AcilirMenu() {
    const [open, setOpen] = React.useState(false)
    return (
        <Modal 
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Düzenle</Button>}
    >
      <Modal.Header>İletişim Bilgilerini Düzenle</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
         
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Vazgeç
        </Button>
        {/* <Button
          content="Kaydet"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        /> */}
      </Modal.Actions>
    </Modal>
    
    )
}
