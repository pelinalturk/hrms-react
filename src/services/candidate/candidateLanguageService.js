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
    deleteLanguage(id){
        return axios.delete(`http://localhost:8080/api/foreignLanguageController/${id}`)
    }
    updateLanguage(value){//http://localhost:8080/api/foreignLanguageController/2?id=5
        //`http://localhost:8080/api/foreignLanguageController/${level}?${id}`
        return axios.put(`http://localhost:8080/api/foreignLanguageController/${value.level}?id=${value.id}`)
    }
    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/foreignLanguageController/getByCandidateId?id=" + id)
    }
}