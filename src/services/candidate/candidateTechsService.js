import axios from "axios";

export class CandidateTechsService{
    getTechs(){
        return axios.get("http://localhost:8080/api/technologiesController/getAll")
    }
    deleteTechs(id){
        return axios.delete(`http://localhost:8080/api/technologiesController/${id}`)
    }
    addTechs(value){
        return axios.post("http://localhost:8080/api/technologiesController/add",value)
    }
}