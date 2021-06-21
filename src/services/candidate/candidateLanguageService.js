import axios from "axios"

export class CandidateLanguageService{
    getCandidateLanguageService(){
        return axios.get("http://localhost:8080/api/foreignLanguageController/getAll")
    }
    addLanguage(value){
        return axios.post("http://localhost:8080/api/foreignLanguageController/add",value)
    }
    getLanguageByName(language){
        return axios.get("http://localhost:8080/api/foreignLanguageController/getByLanguage?language=" + language)
    }
}