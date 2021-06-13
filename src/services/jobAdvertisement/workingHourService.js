import axios from "axios"

export class WorkingHourService{
    getWorkingHourService(){
        return axios.get("http://localhost:8080/api/workingHours/getAll")
    }
}