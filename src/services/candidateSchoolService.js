import axios from "axios"

export class CandidateSchoolService{
    getCandidateSchoolService(){
        return axios.get("http://localhost:8080/api/schoolsController/getAll")
    }
}