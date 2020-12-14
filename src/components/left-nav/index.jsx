import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu} from 'antd';

import logo from '../../assets/images/logo.png'
import './index.less'
// import memoryUtils from "../../utils/memoryUtils";
import {

    PieChartOutlined,
    DesktopOutlined,
    MailOutlined,
  } from '@ant-design/icons';
  

const { SubMenu } = Menu;
/**
 * 左侧导航的组件
 */
export default class Header extends Component {
    render () {
        return (
            <div className='left-nav'>
                {/* Link路由跳转 */}
               <Link to='/' className='left-nav-header'>
                   <img src={logo} alt="logo"/>
                   <h1>谷粒后台</h1>
               </Link>

               <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
         
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
         
        </Menu>
            </div>
        )
    }
}