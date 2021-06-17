import React from 'react'
import { Grid } from 'semantic-ui-react'
import CandidateCvList from './CandidateCvList'
import CandidateJobExpList from './CandidateJobExpList'
export default function CandidateFullCv() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                <Grid.Column width="4"> </Grid.Column>
                <Grid.Column width="12"><CandidateCvList/> 
                <Grid.Column width="12"><CandidateJobExpList/> </Grid.Column>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
