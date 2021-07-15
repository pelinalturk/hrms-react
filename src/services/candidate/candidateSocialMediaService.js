import axios from "axios";

export class SocialMediaService{
    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/socialMediaController/getByCandidateId?id=" + id)
    }
    delete(id){
        return axios.delete(`http://localhost:8080/api/socialMediaController/${id}`)
    }
    add(value){
        return axios.post("http://localhost:8080/api/socialMediaController/add",value)
    }
}