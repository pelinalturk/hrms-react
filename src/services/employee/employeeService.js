import axios from "axios";

export class EmployeeService{
    confirmUpdate(employeeId, employerId){//http://localhost:8080/api/employers/update/confirm?employeeId=39&employerId=41
        axios.post(`http://localhost:8080/api/employers/update/confirm?employeeId=${employeeId}&employerId=${employerId}`)
    }
}