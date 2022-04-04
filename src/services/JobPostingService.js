import axios from "axios";

export default class JobPostingService{
    getJobPostings(){
        return axios.get("http://localhost:8080/api/jobPosting/getAll")
    }
    
    getById(id){
        return axios.get("http://localhost:8080/api/jobPosting/getById?id=" + id)
    }

    getAllByEmploye_Id(employerId){
        return axios.get("http://localhost:8080/api/jobPosting/getAllByEmployer_Id?employerId=" + employerId)
    }
}