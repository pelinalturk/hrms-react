import axios from "axios";

export class FavoritiesService{
    addFavoriteJob(value){
        return axios.post("http://localhost:8080/api/candidateFavoritiesController/add",value)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/candidateFavoritiesController/getById?id="+ id)
    }

    deleteFavority(id){
        return axios.delete(`http://localhost:8080/api/candidateFavoritiesController/${id}`)
    }

    getByJobId(id){
        return axios.get("http://localhost:8080/api/candidateFavoritiesController/getByJobId?id="+id)
    }
}