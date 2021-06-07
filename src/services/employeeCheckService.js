import axios from "axios"

export class EmployeeCheckService {
    getEmployeeCheckService(){
        return axios.get("http://localhost:8080/api/employeeConfirm/getEmployeeConfirmDto?isActive=true")
    }
}
