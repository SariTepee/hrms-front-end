import React from 'react'
import {Container, Header, Segment} from 'semantic-ui-react'

export default function Headline({title, name}) {
    return (
        <Container className='headline'>
            <Segment basic>
                <Header color='red' as='h4' textAlign='right'>
                    <span className='headline-2'>{title}</span>
                </Header>
                <Header color='green' as='h4' textAlign='right'>
                    <span className='headline-3'>{name}</span>
                </Header>
            </Segment>
            <Segment basic size='tiny' color='red'/>
        </Container>
    )
}
