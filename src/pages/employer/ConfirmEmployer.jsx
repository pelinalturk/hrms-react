import React, { useEffect, useState } from 'react'

export default function ConfirmEmployer() {
  /* const [employers, setEmployers] = useState([])

  useEffect(() => {
   let employerService = new EmployerService()
    employerService.getEmployers().then(result => setEmployers(result.data.data))
  }, []) */
    return (
        <div>
        {/* <table className="customers">
          <thead>
            <tr>
              <th>Şirket İsmi</th>
              <th>Şirket Web Adresi</th>
              <th>Şirket Numarası</th>
            </tr>
          </thead>
          <tbody>
            {employers.map((employer) => (
               <tr key={employer.id}>
               <td>{employer.companyName}</td>
               <td>{employer.webAddress}</td>
               <td>{employer.phoneNumber}</td>
               <td>
                 <button>Onayla</button>
                 <button style={{ marginLeft: "0.5em" }}>Reddet</button>
               </td>
             </tr>
             ))}
          </tbody>
        </table> */}
      </div>
    )
}
