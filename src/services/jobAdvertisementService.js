import axios from "axios";

export class JobAdvertisementService{
    addJobAdvertisement(value){
        return axios.post("http://localhost:8080/api/JobAdvertisement/add",value)
    }
}