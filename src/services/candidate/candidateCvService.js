import axios from "axios"

export class CandidateCvService{
    getCandidateCvService(){
        return axios.get("http://localhost:8080/api/curriculumVitaesController/getCv")
    }
    updateContactInformation(values){
        return axios.post("http://localhost:8080/api/candidates/update",values)
    }
    getByCandidateId(id){//http://localhost:8080/api/candidates/getById?id=5
        return axios.get("http://localhost:8080/api/candidates/getById?id=" + id)
    }
    uploadImage(file, userId){
        return axios.put(`http://localhost:8080/api/usersController/uploadImage?userId=${userId}`,file)
    }
}