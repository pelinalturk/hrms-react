import React, { useEffect, useState } from 'react'
import { WorkingHourService } from '../../services/jobAdvertisement/workingHourService'
import { Dropdown } from "semantic-ui-react";


export default function WorkingHoursFilter({onSelect}) {
    const [workingHours, setWorkingHours] = useState([])

    useEffect(() => {
        let workingHourService = new WorkingHourService()
        workingHourService.getWorkingHourService().then((res) => setWorkingHours(res.data.data))
    }, [])

    const workinHourOption= workingHours.map((workingHour, index) => ({
        key:index,
        text:workingHour.workingHour,
        value:workingHour.id,
    }))
    return (
        <div>
            <Dropdown
            placeholder="Tam Zamanlı,Yarı Zamanlı..."
            selection
            search
            clearable
            options={workinHourOption}
            onChange={handleChange}
            />
        </div>
    )
    function handleChange(event, data) {
        onSelect(data.value)
    }
}
