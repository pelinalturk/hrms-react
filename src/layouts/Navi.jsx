import React, { useState } from "react";
import {  Menu} from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useHistory } from "react-router";
import {useSelector} from "react-redux"
import FavoriteJobAdvertisement from "./FavoriteJobAdvertisement";

export default function Navi() {
 const {favoriteItems} = useSelector(state => state.favorite)
  
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
        <FavoriteJobAdvertisement/>
        {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
          <Menu.Item>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
