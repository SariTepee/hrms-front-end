import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu, Container, Header, Reveal } from 'semantic-ui-react'
import SignedIn from '../SignedIn'
import SignedOut from '../SignedOut'

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut(isAuthenticated) {
        setIsAuthenticated(false)
    }

    function handleLogIn(isAuthenticated) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted pointing>
                <Container>
                    <Menu.Item color="red" position="right">
                        <Reveal animated='small fade'>
                            <Reveal.Content visible>
                                <Header as="h4" color="red" className="orbitron" icon="cube" content="HRMS" />
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Header as="h4" color="blue" className="orbitron" icon="cube" content="HRMS" />
                            </Reveal.Content>


                        </Reveal>
                    </Menu.Item>
                    <Menu.Item as={NavLink} to="/home" icon="home" content="Home" position="right"/>
                    <Menu.Item as={NavLink} to="/employers" icon="building outline" content="Employers" />
                    <Menu.Item as={NavLink} to="/candidates" icon="user outline" content="Candidates" />
                    <Menu.Item as={NavLink} to="/aboutUsLayout" icon="info" content="About Us" />
                    <Menu.Item as={NavLink} to="/jobPostings" content="JP" />




                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleLogIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
