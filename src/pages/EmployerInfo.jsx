import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from 'semantic-ui-react'
import Headline from '../layouts/Headline'
import JobPostingGetByEmployerId from '../layouts/JobPostingGetByEmployerId'
import EmployerService from '../services/EmployerService'

export default function EmployerInfo() {

  let { id } = useParams()

  const [employer, setEmployer] = useState({
      "companyName": "string",
      "email": "string",
      "id": 0,
      "password": "string",
      "phoneNumber": "string",
      "webAddress": "string"
  }, [id])
  

  useEffect(() => {
    let employerService = new EmployerService()
    employerService.getById(id).then(result => setEmployer(result.data.data))
  }, [id])

  return (
    <div>
      <Headline title={employer.companyName} name={employer.webAddress}/>
      <Header as='h1'>Employer Information</Header>
      <Header as='h3'>ID: </Header>
      <Header as='h3'>EMAIL: {employer.email}</Header>
      <Header as='h3'>COMPANY_NAME: {employer.companyName}</Header>
      <Header as='h3'>WEB_ADDRESS: {employer.webAddress}</Header>
      <Header as='h3'>PHONE_NUMBER: {employer.phoneNumber}</Header>
      
      <JobPostingGetByEmployerId employerId={id}/>
    </div>
  )
}
