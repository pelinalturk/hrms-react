import axios from "axios";
import React, { useEffect, useState } from "react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";

export default function ConfirmJobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([])

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getIsConfirmFalse().then(result => setJobAdvertisements(result.data.data))
  }, [])

  return (
    <div>
      <h3>Onaylanmamış İş İlanları</h3>
      <table className="customers">
        <tr>
          <th>Şirket İsmi</th>
          <th>Pozisyon</th>
          <th>Açık pozisyon sayısı</th>
          <th>Son başvuru tarihi</th>
          <th>Detay</th>
          <th>Minimum Maaş</th>
          <th>Maximum Maaş</th>
        </tr>
        {jobAdvertisements.map((jobAdvertisement) => (
           <tr key={jobAdvertisement.id}>
           <td>{jobAdvertisement.employerCompanyName}</td>
           <td>{jobAdvertisement.jobPositionTitle}</td>
           <td>{jobAdvertisement.countOfOpenPosition}</td>
           <td>{jobAdvertisement.applicationDeadline}</td>
           <td>{jobAdvertisement.jobDetail}</td>
           <td>{jobAdvertisement.minWage}</td>
           <td>{jobAdvertisement.maxWage}</td>
           <td>
                 <button >Onayla</button>
                 <button style={{ marginLeft: "0.5em" }}>Reddet</button>
           </td>
       </tr>
        ))}
      </table>
    </div>
  );
}
