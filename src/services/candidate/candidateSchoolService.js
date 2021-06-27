import axios from "axios"

export class CandidateSchoolService{
    getCandidateSchoolService(){
        return axios.get("http://localhost:8080/api/schoolsController/getAll")
    }
    addEducation(values){
        return axios.post("http://localhost:8080/api/schoolsController/add",values)
    }
    getDegree(){
        return axios.get("http://localhost:8080/api/graduadeDegreeController/getAll")
    }
    deleteSchool(id){
        return axios.delete(`http://localhost:8080/api/schoolsController/${id}`)
    }
}