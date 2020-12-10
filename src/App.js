import React,{Component} from 'react'
import { Button } from 'antd';
// import { DownloadOutlined } from '@ant-design/icons';
export default class App extends Component{
  render () {
    return <div>
       <Button type="primary">primary</Button>
       <Button type="dashed">Dashed Button</Button>
    </div>
  }
}