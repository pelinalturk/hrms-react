import axios from "axios";

export class JobApplication{
    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/candidateJobApplicationsController/GetAll?id=" + id)
    }
    add(value){
        return axios.post("http://localhost:8080/api/candidateJobApplicationsController/add", value)
    }

    getByJobAdvertisementId(id){
        return axios.get("http://localhost:8080/api/candidateJobApplicationsController/getByJobAdvertisementId?id=" + id)
    }
}