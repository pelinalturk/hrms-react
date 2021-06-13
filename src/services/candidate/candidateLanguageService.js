import axios from "axios"

export class CandidateLanguageService{
    getCandidateLanguageService(){
        return axios.get("http://localhost:8080/api/foreignLanguageController/getAll")
    }
}