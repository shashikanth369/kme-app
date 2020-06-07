import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import { Drawer, Button } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import './css/Navbar.css';
import src from '*.bmp';
import logo from '../../images/resized-logo.png';

class Navbar extends Component {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <nav className="menu">
        <div className="menu__logo">
        <a href="#"><img alt="KME" src={logo}></img></a>
        </div>
        <div className="menu__container">
          <div className="menu_left">
            <LeftMenu mode="horizontal" />
          </div>

          <Button className="menu__mobile-button" type="primary" onClick={this.showDrawer} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.visible ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>

          <Drawer
            title="Menu"
            placement="right"
            className="menu_drawer"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu mode="inline"/>
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;