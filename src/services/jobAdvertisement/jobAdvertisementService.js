import axios from "axios"

export class JobAdvertisementService{
    getJobAdvertisements(){
    return axios.get("http://localhost:8080/api/JobAdvConfirmEmployee/getAll?isActive=true")
    }

    getIsConfirmFalse(){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByConfirm?confirm=false")
    }

    changeConfirmed(value){
        return axios.post("http://localhost:8080/api/JobAdvConfirmEmployee/add",value)
    }

    addJobAdvertisement(value){
        return axios.post("http://localhost:8080/api/JobAdvertisement/add",value)
    }
    getAllJobAdvertisements(){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getall")
    }
    getByCompanyName(companyName){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByEmployer?companyName="+companyName)
    }
    getByEmployerId(id){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByEmployerId?id="+id)
    }  
    getById(id){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getById?id="+id)
    }
    addFavoriteJob(value){
        return axios.post("http://localhost:8080/api/candidateFavoritiesController/add",value)
    }
    getByActiveAndApproved(pageNo){//http://localhost:8080/api/JobAdvertisement/getByPage?pageNo=1&pageSize=5
        return axios.get(`http://localhost:8080/api/JobAdvertisement/getByPage?pageNo=${pageNo}&pageSize=10`)
    }
}