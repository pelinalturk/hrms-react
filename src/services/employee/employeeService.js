import axios from "axios";

export class EmployeeService{
    confirmUpdate(employeeId, employerId){//http://localhost:8080/api/employers/update/confirm?employeeId=39&employerId=41
        return axios.post(`http://localhost:8080/api/employers/update/confirm?employeeId=${employeeId}&employerId=${employerId}`)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employee/getById?id="+ id)
    }

    updateProfil(value){
        return axios.post("http://localhost:8080/api/employee/update",value)
    }
}