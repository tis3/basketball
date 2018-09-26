import React,{Component} from 'react';
import Header from './Header';
import { Layout } from 'antd';
import Home from './Home';
import { Route } from 'react-router-dom';

export default class App extends Component{
    render(){
        return(
            <Layout className="layout">
                <Header style={{ position: 'fixed', zIndex: 1 }}/>
                <Route exact path="/" component={Home}/>
            </Layout>
        )
    }
}