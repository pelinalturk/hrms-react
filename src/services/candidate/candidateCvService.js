import axios from "axios"

export class CandidateCvService{
    getCandidateCvService(){
        return axios.get("http://localhost:8080/api/curriculumVitaesController/getCv")
    }
}