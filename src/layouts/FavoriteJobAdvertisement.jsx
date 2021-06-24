import React from 'react'
import {useSelector} from "react-redux"
import { Label } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from "semantic-ui-react";

export default function FavoriteJobAdvertisement() {
    const {favoriteItems} = useSelector(state => state.favorite)
    return (
        <div>
             <Dropdown item text="Favoriler">
              <Dropdown.Menu>
                {
                  favoriteItems.map((favoriteItem) =>(
                    <Dropdown.Item>{favoriteItem.jobAdvertisement.employer.companyName}
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
