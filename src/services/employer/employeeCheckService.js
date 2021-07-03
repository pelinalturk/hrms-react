import axios from "axios"

export class EmployeeCheckService {
    getEmployeeCheckTrue(){
        return axios.get("http://localhost:8080/api/employeeConfirm/getEmployeeConfirmDto?isActive=true")
    }
    getEmployeeCheckFalse(value){
        return axios.post("http://localhost:8080/api/employeeConfirm/add",value)
    }

}
