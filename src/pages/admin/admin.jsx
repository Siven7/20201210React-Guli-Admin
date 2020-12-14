import React,{Component} from 'react'
import { Layout } from 'antd';
import {Redirect,Route,Switch} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'

import LeftNav from '../../components/left-nav'
import Header from  '../../components/header'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import NotFound from '../not-found/not-found'
import Order from '../order/order'


const { Footer, Sider, Content } = Layout;
//后台管理的路由组件
export default class Admin extends Component {
    render () {
        const user = memoryUtils.user;
        // 如果内存没有存储user ==> 当前没有登陆
        if(!user || !user._id){
            // 自动跳转到登陆(在render()中)
           return <Redirect to='/login'/>
        }
        return (
              <Layout style={{minHeight: '100%'}}>
                <Sider><LeftNav/></Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                        <Switch>
                        <Redirect from='/' exact to='/home'/>
                        <Route path='/home' render={(props) => <Home {...props} />}/>
                        <Route path='/category' render={(props) => <Category {...props} />}/>
                        <Route path='/product' render={(props) => <Product {...props} />}/>
                        <Route path='/user' render={(props) => <User {...props} />}/>
                        <Route path='/role' render={(props) => <Role {...props} />}/>
                        <Route path="/charts/bar" render={(props) => <Bar {...props} />}/>
                        <Route path="/charts/pie" render={(props) => <Pie {...props} />}/>
                        <Route path="/charts/line" render={(props) => <Line {...props} />}/>
                        <Route path="/order" render={(props) => <Order {...props} />}/>
                        <Route render={(props) => <NotFound {...props} />}/>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
              </Layout>
     
        )
    }
}