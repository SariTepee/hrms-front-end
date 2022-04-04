import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header, List } from 'semantic-ui-react'
import Test from '../layouts/Test'

export default function Home() {
  return (
    <div>
        <br/>
        <Header as='h1'>Home Page</Header>
        <Test></Test>
        <List>
          <List.Item as={NavLink} to='/jobPostings'>Job Postings</List.Item>
        </List>
        <br/>
    </div>
  )
}
