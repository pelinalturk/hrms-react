import React from "react";
import {
  Button,
  Dropdown,
  Input,
  TextArea,
  Card,
  Form,
  Grid,
} from "semantic-ui-react";
export default function ContactInformation() {
  return (
    <div>
      <Card fluid>    
        <Card.Content>
          <Form>
            <Form.Field style={{ marginBottom: "1rem" }}>
                <Grid>
                    <Grid.Column width="8"><label>Ad</label>
              <input
              type="text">
              </input></Grid.Column>
                    <Grid.Column width="8">
                    <label>Soyad</label>
              <input
              type="text">
              </input>
                    </Grid.Column>
                </Grid>
            </Form.Field>
            <Form.Field>
                <Grid>
                    <Grid.Column width="8"> <label>Email</label>
              <input
              type="Email">
              </input></Grid.Column>
                    <Grid.Column width="8"><label>Telefon Numarası</label>
              <input
              type="phone"
              style={{ width: "100%",height: "60%"}}>
              </input></Grid.Column>
                </Grid>
             
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Doğum Tarihi
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                  ></Input>
                </Grid.Column>
                <Grid.Column width="8"><label>Açıklama</label>
              <TextArea placeholder="Açıklama" style={{ minHeight: 50 }} /></Grid.Column>
              </Grid>
            </Form.Field>
           
            <Button
              content="Ekle"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
