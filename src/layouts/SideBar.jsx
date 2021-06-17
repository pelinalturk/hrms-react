import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default class MenuExampleCompactVertical extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted compact icon='labeled' vertical>
        <Menu.Item
          name='gamepad'
          active={activeItem === 'gamepad'}
          onClick={this.handleItemClick}
        >
          <Icon name='user' />
          İş Arayanlar
        </Menu.Item>

        <Menu.Item
          name='handshake'
          active={activeItem === 'handshake'}
          onClick={this.handleItemClick}
        >
          <Icon name='handshake' />
          İş Verenler
        </Menu.Item>

        <Menu.Item
          name='search'
          active={activeItem === 'search'}
          onClick={this.handleItemClick}
        >
          <Icon name='search' />
          iş ilanları
        </Menu.Item>
      </Menu>
    )
  }
}
