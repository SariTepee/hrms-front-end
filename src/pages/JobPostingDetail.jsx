import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Container, Divider, Header} from 'semantic-ui-react'
import Headline from '../layouts/Headline'
import JobPostingService from '../services/JobPostingService'

export default function JobPostingDetail() {

    let { id } = useParams()

    const [jobPosting, setJobPosting] = useState({
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
    })
    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getById(id).then(result => setJobPosting(result.data.data))
    }, [id])

    return (
        <div>
            <Headline title={jobPosting.jobTitle.title} name={jobPosting.employer.companyName} />
            <Container>
                <Header as='h1'>Job Posting</Header>
                <Header as='h3'>ID: {jobPosting.id}</Header>
                <Header as='h3'>CONTENT: {jobPosting.content}</Header>
                <Divider section={true} clearing={true}/>
                <Header as='h3'>COMPANY NAME: {jobPosting.employer.companyName}</Header>
                <Header as='h3'>COMPANY EMAIL: {jobPosting.employer.email}</Header>
                <Header as='h3'>COMPANY PHONE NUMBER: {jobPosting.employer.phoneNumber}</Header>
                <Header as='h3'>COMPANY WEB ADDRESS: {jobPosting.employer.webAddress}</Header>
                <Divider/>
                <Header as='h3'>JOB TİTLE: {jobPosting.jobTitle.title}</Header>
                <Divider/>
                <Header as='h3'>JOB TYPE: {jobPosting.jobType.type}</Header>
            </Container>
        </div>




    )
}
