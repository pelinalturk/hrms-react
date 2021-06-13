import axios from "axios"

export class CityService{
    getCityService(){
        return axios.get("http://localhost:8080/api/cities/getAll")
    }
}