import axios from "axios"

export class CandidateJobExpService{
    getCandidateJobExpService(){
        return axios.get("http://localhost:8080/api/jobExperiencesController/findAllByCurriculumVitaeIdOrderByEndingDateDesc?id=2")
    }
}