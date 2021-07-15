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
    }//http://localhost:8080/api/JobAdvertisement/activeTrue?pageNo=1&pageSize=5
    //http://localhost:8080/api/JobAdvertisement/getByFilter?pageNo=1&pageSize=10
    getByActiveAndApproved(pageNo,pageSize,filter){//http://localhost:8080/api/JobAdvertisement/getByPage?pageNo=1&pageSize=5
        return axios.post(`http://localhost:8080/api/JobAdvertisement/getByFilter?pageNo=${pageNo}&pageSize=${pageSize}`,filter)
    }
    getByJobTitle(id){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByJobPosition?id="+id)
    }
    changeIsActive(id){
        return axios.post("http://localhost:8080/api/JobAdvertisement/changeIsConfirm?id="+id)
    }
}