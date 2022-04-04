import React, { useEffect, useState } from 'react'
import {Button, Card, CardGroup, Divider, Header} from 'semantic-ui-react'
import JobPostingService from '../services/JobPostingService'
import {NavLink} from "react-router-dom";

export default function JobPostingGetByEmployerId({ employerId }) {

    const [jobPostings, setJobPostings] = useState([{
        "content": "string",
        "employer": {
            "companyName": "string",
            "email": "string",
            "id": 0,
            "password": "string",
            "phoneNumber": "string",
            "webAddress": "string"
        },
        "id": 0,
        "jobTitle": {
            "id": 0,
            "title": "string"
        },
        "jobType": {
            "id": 0,
            "type": "string"
        }
    }])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getAllByEmploye_Id(employerId).then(result => setJobPostings(result.data.data))

    }, [employerId])


    return (
        <div>
            <Divider />
            <Header as='h1'>Employer's Job Postings</Header>
            <CardGroup>
                {
                    jobPostings.map(jobPosting => (
                        <Card key={jobPosting.id} fluid>
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
            </CardGroup>
        </div>
    )
}
/* */