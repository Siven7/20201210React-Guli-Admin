import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd';

import logo from '../../assets/images/logo.png'
import './index.less'
import memoryUtils from "../../utils/memoryUtils";

/**
 * 左侧导航的组件
 */
export default class Header extends Component {
    render () {
        return (
            <div className='left-nav'>
               <Link to='/' className='left-nav-header'>
                   <img src={logo} alt="logo"/>
                   <h1>谷粒后台</h1>
               </Link>
            </div>
        )
    }
}