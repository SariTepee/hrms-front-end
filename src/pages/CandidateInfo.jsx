import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import Headline from '../layouts/Headline'
import CandidateService from '../services/CandidateService'

export default function CandidateInfo() {

    let {id} = useParams()

    const [candidate, setCandidate] = useState({
        "dateOfBirth": "string",
        "email": "string",
        "firstName": "string",
        "id": 0,
        "identityNumber": "string",
        "lastName": "string",
        "password": "string"
    }   )

    useEffect(()=>{
        let candidateService = new CandidateService()
        candidateService.getById(id).then(result => setCandidate(result.data.data))
    }, [id])

    return (
        <div>
            <Headline title={candidate.firstName + " " + candidate.lastName} />
            <Header as='h1'>Candidate Information</Header>
            <Header as='h3'>ID: {id}</Header>
            <Header as='h3'>EMAIL: {candidate.email}</Header>
            <Header as='h3'>FIRST_NAME: {candidate.firstName}</Header>
            <Header as='h3'>LAST_NAME: {candidate.lastName}</Header>
            <Header as='h3'>IDENTİTY_NUMBER: {candidate.identityNumber}</Header>
        </div>
      )
}
