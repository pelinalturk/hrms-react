import axios from "axios"

export class JobTitleService{
    getJobTitles(){
        return axios.get("http://localhost:8080/api/job_titles/getall")
    }
}