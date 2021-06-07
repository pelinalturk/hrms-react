import axios from "axios"

export class JobAdvertisementService{
    getJobAdvertisements(){
    return axios.get("http://localhost:8080/api/JobAdvertisement/getByIsActive")
    }
}