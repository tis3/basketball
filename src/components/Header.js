import React,{Component} from 'react';
import { Layout, Menu,Row,Col,Button,Modal} from 'antd';
import * as Logo from '../assets/images/logo.svg';
import LoginModalContent from './LoginModalContent';
import {Link} from 'react-router-dom';
const { Header } = Layout;

export default class Navbar extends Component{
    state = {
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    render(){
        return(
           <Header>
                <Row type="flex" justify="center" >
                    <Col md={{span: 3,offset:1}}>
                        <img alt="Logo" src={Logo} className="logo" width={48} />
                    </Col>
                    <Col md={{span:16}} type="flex" justify="center">
                        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px'}}>
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="news">Notícias</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="forum">Fórum</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="join-us">Junte-se a nós</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="donations">Doações</Link></Menu.Item>
                        </Menu>
                    </Col>
                    <Col md={{span:4}}>
                        <Button type="primary" size="large" style={{width:"180px"}} className="btn-gradient" onClick={this.showModal}>Log-in</Button>
                    </Col>
                    <Modal title="Log-in" width={320} visible={this.state.visible} footer={null} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <LoginModalContent/>
                    </Modal>
                </Row>
           </Header>
        );
    }
};