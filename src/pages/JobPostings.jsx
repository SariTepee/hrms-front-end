import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Card } from 'semantic-ui-react'
import JobPostingService from '../services/JobPostingService'

export default function JobPostings() {
    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings().then(result => setJobPostings(result.data.data))
    }, [])
    return (
        <div>
            <br />
            <br />
            <br />
            <Card.Group itemsPerRow={3}>
                {
                    jobPostings.map(jobPosting => (
                        <Card key={jobPosting.id}>
                            <Card.Content >
                                <Card.Header>{jobPosting.jobTitle.title}</Card.Header>
                                <Card.Meta>{jobPosting.employer.companyName}</Card.Meta>
                                <Card.Description>
                                {jobPosting.content}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='blue' icon='comments outline'>
                                    </Button>
                                    <Button basic color='green' icon='info circle' as={NavLink} to={`/jobPostings/jobPosting/${jobPosting.id}`}>
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
