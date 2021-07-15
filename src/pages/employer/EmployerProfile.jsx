import React from 'react'
import { Grid } from 'semantic-ui-react'
import UpdateCompany from './UpdateCompany'
import PublishedByTheEmployer from './PublishedByTheEmployer'
import SideBar from "../../layouts/SideBar"

export default function EmployerProfile() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width="4"><SideBar/> </Grid.Column>
                    <Grid.Column width="8">
                        <UpdateCompany/>
                    </Grid.Column>
                    <Grid.Column width="4"></Grid.Column>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column width="2"></Grid.Column>
                <Grid.Column width="12">
                    <PublishedByTheEmployer/>
                </Grid.Column>
                <Grid.Column width="2"></Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
