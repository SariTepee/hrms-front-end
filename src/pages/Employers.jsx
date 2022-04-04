import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card, Grid, Image } from 'semantic-ui-react'
import EmployerService from '../services/EmployerService'

export default function Employers() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService()
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    }, [])

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <Grid>
                <Grid.Row /*columns={2}*/>
                    <Grid.Column /*width={13}*/>
                        <Card.Group itemsPerRow={3}>
                            {
                                employers.map(employer => (
                                    <Card key={employer.id}>
                                        <Card.Content >
                                            <Image
                                                floated='right'
                                                size='mini'
                                                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                            />
                                            <Card.Header>{employer.companyName}</Card.Header>
                                            <Card.Meta>{employer.webAddress}</Card.Meta>
                                            <Card.Description>
                                                Steve wants to add you to the group <strong>best friends</strong>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color='blue' icon='comments outline'>
                                                </Button>
                                                <Button basic color='green' icon='info circle' as={NavLink} to={`/employers/employer/${employer.id}`} >
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                ))
                            }
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
