import React, { useEffect, useState } from "react";
import { EmployeeCheckService } from "../../services/employer/employeeCheckService";

export default function EmployeeCheckList() {
  const [employeeChecks, setEmployeeChecks] = useState([]);

  useEffect(() => {
    let employeeCheckService = new EmployeeCheckService();
    employeeCheckService.getEmployeeCheckTrue().then(result=>setEmployeeChecks(result.data.data))
  }, []);

  return (
    <div>
      <table className="customers">
        <thead>
        <tr>
          <th>Şirket İsmi</th>
          <th>Şirket Web Adresi</th>
          <th>Şirket Maili</th>
          <th>Şirket Numarası</th>
        </tr>
        </thead>
        <tbody>
        {employeeChecks.map((employeeCheck) => (
          <tr key={employeeCheck.id}>
            <td>{employeeCheck.employerCompanyName}</td>
            <td>{employeeCheck.employerWebAddress}</td>
            <td>{employeeCheck.employerEmail}</td>
            <td>{employeeCheck.employerPhoneNumber}</td>
          </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
}
