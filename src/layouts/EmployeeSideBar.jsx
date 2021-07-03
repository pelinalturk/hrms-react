import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

export default class MenuExampleCompactVertical extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted compact icon='labeled' vertical>
        <Menu.Item as={NavLink} to="/employee/updateRequest"
          name='gamepad'
          active={activeItem === 'gamepad'}
          onClick={this.handleItemClick}
        >
          <Icon name='user' />
         Güncelleme Onayı Bekleyen İş Verenler
        </Menu.Item>

        <Menu.Item
          name='handshake'
          active={activeItem === 'handshake'}
          onClick={this.handleItemClick}
          as={NavLink} to="/employers/confirm"
        >
          <Icon name='handshake' />
         Onay Bekleyen İş Verenler
        </Menu.Item>

        <Menu.Item
          name='search'
          active={activeItem === 'search'}
          onClick={this.handleItemClick}
          as={NavLink} to="/confirmJob"
        >
          <Icon name='search' />
          Onay Bekleyen İş İlanları
        </Menu.Item>
      </Menu>
    )
  }
}
