import React, { useEffect, useState } from "react";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
import { Table, Button, Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar"
export default function ConfirmJobAdvertisementList() {
  
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getIsConfirmFalse()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  let postConfirmed = { 
    confirmed: "",
    employee: "39", 
    jobAdvertisement: {
      id: ""
    } 
  };

  const handleConfirmTrue= (id)=>{
    postConfirmed.jobAdvertisement.id=id
    postConfirmed.confirmed=true
    jobAdvertisementService
      .changeConfirmed(postConfirmed)
      .then((result) => console.log(result.data)); 
  }

  return (
    <div>
      <h3>Onaylanmamış İş İlanları</h3>
      <Grid>
        <Grid.Row>
        <Grid.Column width="4"><SideBar/></Grid.Column>
        <Grid.Column width="10">
        <Table className="customers">
        <Table.Row>
          <Table.Cell>Şirket İsmi</Table.Cell>
          <Table.Cell>Pozisyon</Table.Cell>
          <Table.Cell>Açık pozisyon sayısı</Table.Cell>
          <Table.Cell>Son başvuru tarihi</Table.Cell>
          <Table.Cell>Detay</Table.Cell>
          <Table.Cell>Minimum Maaş</Table.Cell>
          <Table.Cell>Maximum Maaş</Table.Cell>
        </Table.Row>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Table.Row key={jobAdvertisement.id}>
            <Table.Cell>{jobAdvertisement.employerCompanyName}</Table.Cell>
            <Table.Cell>{jobAdvertisement.jobPositionTitle}</Table.Cell>
            <Table.Cell>{jobAdvertisement.countOfOpenPosition}</Table.Cell>
            <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
            <Table.Cell>{jobAdvertisement.jobDetail}</Table.Cell>
            <Table.Cell>{jobAdvertisement.minWage}</Table.Cell>
            <Table.Cell>{jobAdvertisement.maxWage}</Table.Cell>
            <Table.Cell>
              <Button color={"green"} onClick={() =>handleConfirmTrue(jobAdvertisement.id)}>Onayla</Button >
            </Table.Cell>
          </Table.Row>
        ))}
      </Table>
        </Grid.Column>
        <Grid.Column width="2"></Grid.Column>
        </Grid.Row>
      </Grid>
      
    </div>
  );
}
/* confirmJob(deneme)JSON.stringify(deneme)
() => console.log(jobAdvertisement.id)

deneme={{jobAdvertisement: {id :jobAdvertisement.id}}}
{jobAdvertisement: {id :jobAdvertisement.id}}
{...deneme.jobAdvertisement.id=jobAdvertisement.id}
 {...deneme.jobAdvertisement.id=jobAdvertisement.id}
 {...deneme.jobAdvertisement.id = jobAdvertisement.id}
*/
