import React from 'react'
import { Button, Icon, Menu } from 'semantic-ui-react'
import LogIn from './LogIn'

export default function SignedOut({ signIn }) {
    return (
        <div>
            <Menu.Item>
                <LogIn />
                <Button animated="fade" color='green' style={{ marginLeft: "0.3em" }} onClick={signIn}>
                    <Button.Content visible>Sign In</Button.Content>
                    <Button.Content hidden>
                        <Icon name="sign-in" />
                    </Button.Content>
                </Button>
            </Menu.Item>
        </div>
    )
}
