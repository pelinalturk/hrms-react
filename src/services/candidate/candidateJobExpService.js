import axios from "axios"

export class CandidateJobExpService{
    getCandidateJobExpService(){
        return axios.get("http://localhost:8080/api/jobExperiencesController/findAllByCurriculumVitaeIdOrderByEndingDateDesc?id=2")
    }
    deleteJobExperience(id){
        return axios.delete(`http://localhost:8080/api/jobExperiencesController/${id}`)
    }
    addJobExp(value){
        return axios.post("http://localhost:8080/api/jobExperiencesController/add",value)
    }
    getById(id){
        return axios.get("http://localhost:8080/api/jobExperiencesController/findAllByCurriculumVitaeIdOrderByEndingDateDesc?id=" +id)
    }
}