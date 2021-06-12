import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import SignIn from './SignIn'
import SignUp from './SignUp'
export default function SignedIn({signOut}) {
    return (
        <div>
             <Menu.Item>
                <Image avatar spaced = "right" src=""/>
                <Dropdown pointing="top right" text="Pelin">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim " icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap " icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
            <SignUp/>
        </div>
    )
}
