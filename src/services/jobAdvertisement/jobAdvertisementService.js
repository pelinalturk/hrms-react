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
}