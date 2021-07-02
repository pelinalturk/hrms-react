import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import { Label } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from "semantic-ui-react";
import {FavoritiesService} from "../services/candidate/candidateFavoritiesService"
export default function FavoriteJobAdvertisement() {
    const {favoriteItems} = useSelector(state => state.favorite)
    const [favoriteCount, setfavoriteCount] = useState([])
    useEffect(() => {
     let candidateFavoritiesService = new FavoritiesService()
     candidateFavoritiesService.getById(5).then((res) => setfavoriteCount(res.data.data))
    }, [favoriteCount])
    return (
        <div>
             <Dropdown item text="Favoriler">
              <Dropdown.Menu>
                {
                  favoriteItems.map((favoriteItem) =>(
                    <Dropdown.Item>{favoriteItem}
                    </Dropdown.Item>
                  ))
                }
                
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/favorite">Favorilerime Git</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
