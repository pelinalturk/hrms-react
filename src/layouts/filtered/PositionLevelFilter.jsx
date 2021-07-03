import React, { useEffect, useState } from 'react'
import { PositionLevelService } from '../../services/jobAdvertisement/jobPositionLevelService'
import { Dropdown } from "semantic-ui-react";

export default function PositionLevelFilter({onSelect}) {
    const [positionLevels, setPositionLevels] = useState([])

    useEffect(() => {
       let jobPositionLevelService = new PositionLevelService();
       jobPositionLevelService.getPositionLevel().then((res) => setPositionLevels(res.data.data))
    }, [])

    const positionLevelOption = positionLevels.map((positionLevel, index) => ({
        key: index,
        text: positionLevel.positionLevel,
        value: positionLevel.id,
    }))
    return (
        <div>
            <Dropdown
            placeholder="Uzman, Yönetici..."
            selection
            search
            clearable
            options={positionLevelOption}
            onChange={handleChange}
            />
        </div>
    )
    function handleChange(event, data) {
        onSelect(data.value);
    }
}
