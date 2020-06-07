
import React, { Component } from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

type props = {mode: any};
type state = {value: string};
class LeftMenu extends Component<props, state> {
  render() {
    return (
      <Menu mode={this.props.mode}>
        <Menu.Item key="mail">
          <a href="#">Home</a>
        </Menu.Item>
        <Menu.Item title="Products">
          <a href="#">Products</a>
        </Menu.Item>
        <Menu.Item key="alipay">
          <a href="#">Contact Us</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;