import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Employers from '../../pages/Employers'
import EmployerInfo from '../../pages/EmployerInfo'
import AboutUsLayout from '../AboutUsLayout'
import Footer from './Footer'
import Home from '../../pages/Home'
import Navi from './Navi'
import Candidates from '../../pages/Candidates'
import CandidateInfo from '../../pages/CandidateInfo'
import JobPostings from '../../pages/JobPostings'
import JobPostingDetail from '../../pages/JobPostingDetail'
/* import CandidateLogInPage from '../pages/CandidateLogInPage' */
import CandidateAdd from '../../pages/CandidateAdd'

export default function Dashboard() {
    return (
        <div>
            <Navi />
            <Container className='dashboard'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/aboutUsLayout' element={<AboutUsLayout />} />
                    

                    <Route path='/employers' element={<Employers />} />
                    <Route path='/employers/employer/:id' element={<EmployerInfo />} />

                    <Route path='/candidates' element={<Candidates />} />
                    <Route path='/candidate/add' element={<CandidateAdd/>} />
                    <Route path='/candidates/candidate/:id' element={<CandidateInfo />} />
                    <Route path='/jobPostings' element={<JobPostings/>} />
                    <Route path='/jobPostings/jobPosting/:id' element={<JobPostingDetail />} />
                </Routes>
            </Container>
            <Footer />
        </div>
    )
}
