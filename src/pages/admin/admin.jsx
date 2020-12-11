import React,{Component} from 'react'
import { Layout } from 'antd';
import {Redirect} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'

const { Header, Footer, Sider, Content } = Layout;
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
         
        <div>
              <Layout style={{height:'100%'}}>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
                </Layout>
        </div>
        )
    }
}