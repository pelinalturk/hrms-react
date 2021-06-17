import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { JobAdvertisementService } from "../../services/jobAdvertisement/jobAdvertisementService";
import { Image } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar";

export default function EmployerDetail() {
 
  let { id } = useParams();

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getByEmployerId(id).then(result => setJobAdvertisements(result.data.data));
  }, [id]);

  return (
    <div>
      <h3>Firmanın Yayınladığı İş İlanları</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <SideBar />
          </Grid.Column>
          <Grid.Column width="12">
            <table border={1} rules={"none"} width={"600"}>
              {jobAdvertisements.map((jobAdvertisement) => (
                <tbody>
                  <tr>
                    <th>Pozisyon Bilgileri :</th>
                    <th></th>
                  </tr>
                  <tr>
                    <tr>
                      <td align="left">Pozisyon: </td>
                      <td>{jobAdvertisement.jobPositionTitle} </td>
                    </tr>
                    <tr>
                      <td align="left">çalışma şekli:</td>
                      <td>{jobAdvertisement.mannerOfWorkMannerOfWork}</td>
                    </tr>
                    <tr>
                      <td align="left">pozisyon seviyesi:</td>
                      <td>{jobAdvertisement.positionLevelPositionLevel}</td>
                    </tr>
                    <tr>
                      <td align="left">alınacak sayı:</td>
                      <td>{jobAdvertisement.countOfOpenPosition}</td>
                    </tr>
                    <tr>
                      <td align="left">şehir:</td>
                      <td>{jobAdvertisement.cityCity}</td>
                    </tr>
                    <tr>
                      <td align="left">Min Maaş:</td>
                      <td>{jobAdvertisement.minWage}</td>
                    </tr>
                    <tr>
                      <td align="left">Max Maaş:</td>
                      <td>{jobAdvertisement.maxWage}</td>
                    </tr>
                  </tr>
                </tbody>
              ))}
            </table>
          </Grid.Column>
        </Grid.Row>
      </Grid> 
    </div>
  );
}
