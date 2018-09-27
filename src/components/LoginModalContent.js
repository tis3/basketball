import React,{Component} from 'react';
import {Button,Row,Col,Divider,Input} from 'antd';
import InputPassword from './PasswordInput';

export default class LoginModal extends Component{
    render(){
        return(
            <div>
                
            <Row   type="flex" justify="center">
                <Col xs={{span:6,offset:2}}>
                    <Button shape="circle" icon="facebook" size="large" />
                </Col>
                <Col xs={{span:6,offset:2}}>
                    <Button shape="circle" icon="twitter" size="large" />
                </Col>
                <Col xs={{span:6,offset:2}}>
                    <Button  shape="circle" icon="google" size="large" />
                </Col>
                <Divider/>
            </Row>
            <Row style={{marginBottom:16}}>
                <Input placeholder = "Endereço de e-mail" style={{height:40}}/>
            </Row>
            <Row>
                <InputPassword placeholder = "Senha"  style={{height:40}}/>
            </Row>
            <Row style={{marginBottom:4}}>
                <a>Esqueceu sua senha?</a>
            </Row>
            <Row type="flex"  style={{marginTop:40}}>
                <Button type="primary" size="large" style={{width:"100%", height:"48px"}} className="btn-gradient">Log-in</Button>
            </Row>
            </div>
        );
    }
}
