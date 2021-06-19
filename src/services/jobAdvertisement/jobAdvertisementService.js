import axios from "axios"

export class JobAdvertisementService{
    getJobAdvertisements(){
    return axios.get("http://localhost:8080/api/JobAdvConfirmEmployee/getAll?isActive=true")
    }

    getIsConfirmFalse(){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByConfirm?confirm=false")
    }

    changeConfirmed(){
        return axios.get("http://localhost:8080/api/JobAdvConfirmEmployee/add")
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
    getByActiveAndApproved(){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByActiveAndConfirm")
    }
}