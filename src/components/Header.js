import React,{Component} from 'react';
import { Layout, Menu,Row,Col} from 'antd';
import * as Logo from '../assets/images/logo.svg';
const { Header } = Layout;

export default class Navbar extends Component{
    render(){
        return(
           <Header>
                <Row>
                    <Col xs={{span: 4,offset:1}} md={{span: 2}}>
                        <img alt="Logo" src={Logo} className="logo" width={48} />
                    </Col>
                    <Col xs={{span:18}}>
                        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px'}}>
                            <Menu.Item key="1">Home</Menu.Item>                                    
                            <Menu.Item key="2">Notícias</Menu.Item>
                            <Menu.Item key="3">Fórum</Menu.Item>                                    
                            <Menu.Item key="4">Junte-se a nós</Menu.Item>
                            <Menu.Item key="5">Doações</Menu.Item>
                        </Menu>
                    </Col>
                    
                </Row>
           </Header>
        );
    }
};