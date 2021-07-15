import axios from "axios";

export class CoverLetterService{
    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/coverLetterController/getByCandidateId?id=" + id)
    }

    add(value){
        return axios.post("http://localhost:8080/api/coverLetterController/add" , value)
    }

    delete(id){
        return axios.delete(`http://localhost:8080/api/coverLetterController/${id}`)
    }
}