import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react'
import anonUser from "../../images/anonUser.png"
import { CandidateCvService } from '../../services/candidate/candidateCvService'
export default function JobApplicantsCVdetail() {
    let { id } = useParams();
   /*  const [contactInformation, setContactInformation] = useState({})

    useEffect(() => {
      let candidateCvService = new  CandidateCvService()
      candidateCvService.getByCandidateId(id)
    }, []) */
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="4">
                        deneme {id}
                    </Grid.Column>

                    <Grid.Column width="8">

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
