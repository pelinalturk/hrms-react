import axios from "axios"

export class MannerOfWorkService{
    getMannerOfWorkService(){
        return axios.get("http://localhost:8080/api/mannerOfWorks/getAll")
    }
}