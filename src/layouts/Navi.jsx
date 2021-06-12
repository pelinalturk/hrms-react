import React, { Component, useState, useEffect } from "react";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import {Input, Segment } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";
import SignIn from "./SignIn";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
     history.push("/") 
  }
  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <div>
      <Menu inverted color={"violet"}>
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Menu position="right">
        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
           {/* <Dropdown item text="İş Veren">
            <Dropdown.Menu>
              <Dropdown.Item>Giriş Yap</Dropdown.Item>
              <Dropdown.Item>Kayıt Ol</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>  */}
          <Menu.Item>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      {/* <Segment basic textAlign="center">
        <Input
          action={{ color: "teal", content: "Search" }}
          icon="search"
          iconPosition="left"
          placeholder="Pozisyon, Firma Adı"
        />
      </Segment> */}
    </div>
  );
}
