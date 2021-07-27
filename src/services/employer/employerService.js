import axios from "axios";

export class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }
    getById(id){
        return axios.get("http://localhost:8080/api/employers/getById?id="+id)
    }
    updateEmployer(employerId,values){//http://localhost:8080/api/employers/update?employerId=41
        return axios.post(`http://localhost:8080/api/employers/update?employerId=${employerId}`,values)
    }
    getUpdateData(id){
        return axios.get("http://localhost:8080/api/EmployerUpdateController/getByEmployerId?employerId="+id)
    }
    getByIsActiveTrueIsConfirmFalse(){
        return axios.get("http://localhost:8080/api/employers/IsActiveTrueIsConfirmFalse")
    }
    getByJobApplicants(id)//employer Id
    {
        return axios.get("http://localhost:8080/api/candidateJobApplicationsController/getByEmployer?id=" +id)
    }
}