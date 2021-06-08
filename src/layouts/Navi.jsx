import React, { Component } from "react";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import { Divider, Input, Segment } from "semantic-ui-react";

export default function Navi() {
  return (
    <div>
      <Menu inverted>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Menu position="right">
          <Dropdown item text="İş Veren">
            <Dropdown.Menu>
              <Dropdown.Item>Giriş Yap</Dropdown.Item>
              <Dropdown.Item>Kayıt Ol</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Button primary>Giriş Yap</Button>
            <Button primary>Kayıt Ol</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Segment basic textAlign="center">
        <Input
          action={{ color: "blue", content: "Search" }}
          icon="search"
          iconPosition="left"
          placeholder="Pozisyon, Firma Adı"
        />
      </Segment>
    </div>
  );
}
