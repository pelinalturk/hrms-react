import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";
import { JobAdvertisementService } from '../../services/jobAdvertisement/jobAdvertisementService';
import { Grid } from "semantic-ui-react";
import SideBar from "../../layouts/SideBar";
import { Table, Button} from "semantic-ui-react";
import { useDispatch } from 'react-redux'
import { addToFavorite } from '../../store/actions/FavoriteActions';

export default function ActiveAndApproveJobsDetail() {
    let { id } = useParams();
    let jobAdvertisementService = new JobAdvertisementService();

    let favoriteJob = {
      candidate: {
        id:""
      },
      jobAdvertisement: {
        id
      }
    }

    const addFavoriteJob = (id) =>{
      favoriteJob.candidate.id=5
      favoriteJob.jobAdvertisement.id=id
      jobAdvertisementService.addFavoriteJob(favoriteJob).then((result) => console.log(result.data)); 
    }

   const dispatch = useDispatch()
    const [jobAdvertisement, setJobAdvertisement] = useState({})

    useEffect(() => {
        jobAdvertisementService
          .getById(id)
          .then((result) => setJobAdvertisement(result.data));
      }, [id]);
    
      const handleAddToFavorite = (jobAdvertisement) => {
          dispatch(addToFavorite(jobAdvertisement));
      }
    return (
        <div>
             <h3>Firma Bilgileri</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2">
            <SideBar />
          </Grid.Column>
          <Grid.Column width="14">
            <Table celled fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                  <Table.HeaderCell>Email</Table.HeaderCell>
                  <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                  <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row key={jobAdvertisement.employer?.id}>
                  <Table.Cell>{jobAdvertisement.employer?.companyName}</Table.Cell>
                  <Table.Cell>{jobAdvertisement.employer?.email}</Table.Cell>
                  <Table.Cell>{jobAdvertisement.employer?.phoneNumber}</Table.Cell>
                  <Table.Cell>{jobAdvertisement.employer?.webAddress}</Table.Cell>
                </Table.Row>
                <Grid.Column></Grid.Column>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <h3>İlan Detayı</h3>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2"></Grid.Column>
          <Grid.Column width="14">
            <Table celled fixed singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Pozisyon Seviyesi</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
                  <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                  <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                  <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                  <Table.Row key={jobAdvertisement.id}>
                    <Table.Cell>
                      {jobAdvertisement.jobPosition?.title}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.positionLevel?.positionLevel}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.mannerOfWork?.mannerOfWork}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.workingHour?.workingHour}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.countOfOpenPosition}
                    </Table.Cell>
                    <Table.Cell>
                      {jobAdvertisement.applicationDeadline}
                    </Table.Cell>
                    <Table.Cell>
                        <Button style={{marginRight:"1em"}} 
                        onClick={() => addFavoriteJob(jobAdvertisement.id)}
                        >Favorilere Ekle</Button>
              </Table.Cell>
                  </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
