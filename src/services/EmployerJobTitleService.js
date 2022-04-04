import axios from "axios";

export default class EmployerJobTitleService {
    getEmployerJobTitles_Employers(jobTitle){
        return axios.get("http://localhost:8080/api/employerJobTitle/getByJobTitleTitle?title=" + jobTitle)
    }
}