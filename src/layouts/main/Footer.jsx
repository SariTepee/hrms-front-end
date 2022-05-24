import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Divider, Grid, Header, Icon, List, Segment } from 'semantic-ui-react'

export default function Footer() {
    return (
        <Segment secondary >
            <Container>
                <Grid columns='equal'>
                    <Grid.Column width={5}>
                        <Header as='h5' icon>
                            <Icon name='info circle' color='red' />
                            <Header.Content>About Us</Header.Content>
                            <Divider />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco consectetur laboris.
                            </p>
                            <List link horizontal >
                                <List.Item href="https://github.com/SariTepee" target="blank">
                                    <Icon name='github' />
                                </List.Item>
                                <List.Item href="https://www.linkedin.com/in/%C3%B6mer-faruk-sar%C4%B1tepe-b3a027222/?originalSubdomain=tr" target="blank">
                                    <Icon name='linkedin' />
                                </List.Item>
                            </List>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h5' icon>
                            <Icon name='setting' color='red' />
                            <Header.Content>Other Services</Header.Content>
                            <Divider />

                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h5' icon>
                            <Icon name='chain' color='red' />
                            <Header.Content>Useful Links</Header.Content>
                            <Divider />
                            <List link horizontal>
                                <List.Item as={NavLink} to="/home" content="Home" />
                                <List.Item as={NavLink} to="/employers" content="Employers" />
                                <List.Item as={NavLink} to="/candidates" content="Candidates" />
                            </List>
                        </Header>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h5' icon>
                            <Icon name='address book' color='red' size='huge' />
                            <Header.Content>Content Info</Header.Content>
                            <Divider />
                            <List>
                                <List.Item>
                                    <List.Icon name='map marker alternate' />
                                    <List.Content>
                                        <List.Header as='a'>Address</List.Header>
                                        <List.Description>
                                            526 Melrose Street, Water Mill, 11976 New York
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Header>
                    </Grid.Column>
                </Grid>
            </Container>
        </Segment>

    )
}
