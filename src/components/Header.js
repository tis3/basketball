import React,{Component} from 'react';
import { Layout, Menu,Row,Col,Button,Modal,Avatar,Divider, Dropdown,message} from 'antd';
import * as Logo from '../assets/images/logo.svg';
import LoginModalContent from './LoginModalContent';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions';
import windowSize from 'react-window-size';
const { Header } = Layout;

export class Navbar extends Component{
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
    
    logOut = () => {
        message.info("Deslogado. Até mais!");
        this.props.logOut();
    }

    render(){
        let component;
        const menu = (
            <Menu>
            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">Ver perfil</a>
            </Menu.Item>
            <Menu.Item>
            <a target="_blank" rel="noopener noreferrer">Editar informações</a>
            </Menu.Item>
            <Divider/>
            <Menu.Item onClick={this.logOut}>
            <a target="_blank" rel="noopener noreferrer">Sair</a>
            </Menu.Item>
        </Menu>
        );
        if(this.props.windowWidth > 812 && this.props.auth == null)
            component = <Button type="primary" size="large" style={{width:"150px"}} className="btn-gradient" onClick={this.showModal}>Log-in</Button>;
        if(this.props.auth != null)
            component = <Dropdown  overlay={menu} placement="bottomCenter">
                <Avatar size="large" style={{float:"right", marginRight:"56px",marginTop:"8px"}}/>
            </Dropdown>;
        return(
           <Header>
                <Row type="flex" justify="center" >
                    <Col md={{span: 3,offset:1}} xs={{span: 3,offset:1}}>
                        <img alt="Logo" src={Logo} className="logo" style={{width:"6vh"}} />
                    </Col>
                    <Col md={{span:16}}  xs={(this.props.windowWidth < 812 && this.props.auth == null) ? {span:20} : {span:16}} type="flex" justify="center">
                        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px'}}>
                            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="news">Notícias</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="forum">Fórum</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="join-us">Junte-se a nós</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="donations">Doações</Link></Menu.Item>
                            {this.props.windowWidth < 812 
                            && this.props.auth == null ?
                            <Menu.Item key="6" onClick={this.showModal}>Log-in</Menu.Item> : null}
                        </Menu>
                    </Col>
                    <Col md={{span:4}} justify="center" xs={{span:4}}>
                        {component}
                    </Col>
                    <Modal title="Log-in" width={320} visible={this.state.visible} footer={null} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <LoginModalContent onCancel={this.handleCancel}/>
                    </Modal>
                </Row>
           </Header>
        );
    }

};

function mapStateToProps(state) {
    return {
        auth: state.auth.uid
    };
}

function mapDispatchToProps(dispatch) {
    return {
        logOut: () => {
            dispatch(startLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(Navbar));