import React from "react";
import { Popup, Card, Image, Rating } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
export default function PositionLevel() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="4">
            <Popup
              trigger={
                <Card>
                  <Image src="https://res.cloudinary.com/pelin/image/upload/v1623689999/womanmanager1_zeluxk.jpg" />
                  <Card.Content>
                    <Card.Header>UZMAN</Card.Header>
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>Detay İçin Tıklayınız</Popup.Header>
            </Popup>{" "}
          </Grid.Column>
          <Grid.Column width="4">
            <Popup
              trigger={
                <Card>
                  <Image src="https://res.cloudinary.com/pelin/image/upload/v1623690000/Ekran_g%C3%B6r%C3%BCnt%C3%BCs%C3%BC_2021-06-10_222926_a1gkm3.png" />
                  <Card.Content>
                    <Card.Header>YÖNETİCİ</Card.Header>
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>Detay İçin Tıklayınız</Popup.Header>
            </Popup>{" "}
          </Grid.Column>
          <Grid.Column width="4">
            <Popup
              trigger={
                <Card>
                  <Image src="https://res.cloudinary.com/pelin/image/upload/v1623689999/md-duran-628456-unsplash_wqadsh.jpg" />
                  <Card.Content>
                    <Card.Header>YENİ</Card.Header>
                    <Card.Header>MEZUN</Card.Header>
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>Detay İçin Tıklayınız</Popup.Header>
            </Popup>{" "}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="4">
            <Popup
              trigger={
                <Card>
                  <Image src="https://res.cloudinary.com/pelin/image/upload/v1623690000/urunelemani23_doctgm.jpg" />
                  <Card.Content>
                    <Card.Header>İŞÇİ VE</Card.Header>
                    <Card.Header>MAVİ YAKA</Card.Header>
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>Detay İçin Tıklayınız</Popup.Header>
            </Popup>{" "}
          </Grid.Column>
          <Grid.Column width="4">
            <Popup
              trigger={
                <Card>
                  <Image src="https://res.cloudinary.com/pelin/image/upload/v1623689999/perth-chef-hire_rsuvy3.jpg" />
                  <Card.Content>
                    <Card.Header>HİZMET PERSONELİ</Card.Header>
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>Detay İçin Tıklayınız</Popup.Header>
            </Popup>{" "}
          </Grid.Column>
          <Grid.Column width="4">
            <Popup
              trigger={
                <Card>
                  <Image src="https://res.cloudinary.com/pelin/image/upload/v1623689999/yonetici-olmak_t8oxyc.jpg" />
                  <Card.Content>
                    <Card.Header>ENGELLİ</Card.Header>
                    <Card.Description></Card.Description>
                  </Card.Content>
                </Card>
              }
            >
              <Popup.Header>Detay İçin Tıklayınız</Popup.Header>
            </Popup>{" "}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
