import React, { useEffect, useState } from "react";
import { CityService } from "../../services/candidate/cityService";
import { Dropdown } from "semantic-ui-react";

export default function CitiesFilter({ onSelect }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCityService().then((result) => setCities(result.data.data));
  }, []);

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.city,
    value: city.id,
  }));

  return (
    <div>
      <Dropdown
        placeholder="şehir seçiniz"
        selection
        search
        clearable
        options={cityOption}
        onChange={handleChange}
      />
    </div>
  );
  function handleChange(event, data) {
    onSelect(data.value);
  }
}
