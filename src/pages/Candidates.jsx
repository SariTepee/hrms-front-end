import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import CandidateService from '../services/CandidateService'

export default function Candidates() {

    const [candidates, setCandidates] = useState([])

    useEffect(() => {
        let candidateService = new CandidateService()
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    }, [])

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Card.Group itemsPerRow={3}>
                {
                    candidates.map(candidate => (
                        <Card key={candidate.id}>
                            <Card.Content >
                                <Image
                                    floated='right'
                                    size='mini'
                                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                />
                                <Card.Header>{candidate.firstName}</Card.Header>
                                <Card.Meta>{candidate.email}</Card.Meta>
                                <Card.Description>
                                    Steve wants to add you to the group <strong>best friends</strong>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='blue' icon='comments outline'>
                                    </Button>
                                    <Button basic color='green' icon='info circle' as={NavLink} to={`/candidates/candidate/${candidate.id}`} >
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    ))
                }
            </Card.Group>
        </div>
    )
}
