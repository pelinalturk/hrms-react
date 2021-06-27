import axios from "axios"

export class CandidateCvService{
    getCandidateCvService(){
        return axios.get("http://localhost:8080/api/curriculumVitaesController/getCv")
    }
    updateContactInformation(values){
        return axios.post("http://localhost:8080/api/candidates/update",values)
    }
}