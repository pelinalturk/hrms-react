import axios from "axios";

export class PositionLevelService{
    getPositionLevel(){
        return axios.get("http://localhost:8080/api/positionLevel/getAll")
    }
    getByPosition(position){
        return axios.get("http://localhost:8080/api/JobAdvertisement/getByPositionLevel?id="+position)
    }
}