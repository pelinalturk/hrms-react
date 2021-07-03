import React, { useEffect, useState } from "react";
import { MannerOfWorkService } from "../../services/jobAdvertisement/mannerOfWorkService";
import { Dropdown } from "semantic-ui-react";

export default function MannerOfWorkFilter({ onSelect }) {
  const [mannerOfWorks, setMannerOfWorks] = useState([]);

  useEffect(() => {
    let mannerOfWorkService = new MannerOfWorkService();
    mannerOfWorkService
      .getMannerOfWorkService()
      .then((res) => setMannerOfWorks(res.data.data));
  }, []);

  const mannerOfWorkOption = mannerOfWorks.map((mannerOfWork, index) => ({
    key: index,
    text: mannerOfWork.mannerOfWork,
    value: mannerOfWork.id,
  }));
  return (
    <div>
      <Dropdown
      placeholder="Uzaktan/ İş Yerinde"
        selection
        search
        clearable
        options={mannerOfWorkOption}
        onChange={handleChange}
      />
    </div>
  );
  function handleChange(event, data) {
    onSelect(data.value);
  }
}
