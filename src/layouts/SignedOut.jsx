import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
           <Menu.Item>
            <Button as={NavLink} to="/login" inverted color={"teal"} onClick={signIn}>Giriş yap</Button>
            <Button inverted color={"teal"} style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
            </Menu.Item>
        </div>
    )
}
