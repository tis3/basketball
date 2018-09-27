import React,{Component} from 'react';
import {Row,Col,Divider,Form,Icon, Input, Button, Checkbox, message} from 'antd';
import InputPassword from './PasswordInput';
import {connect} from 'react-redux';
import {startLogin} from '../actions';

export class LoginModalContent extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                 this.props.login(values.userName, values.password);
                 message.success("Bem-vindo de volta!");
                 this.props.onCancel();
            } else{
                message.error("Senha incorreta");
            }
        });
    }
    
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
        <div>
            <Row type="flex" justify="center">
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
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Insira seu nome de usuário.' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}  
                    placeholder="E-mail"  style={{height:40}}/>
                )}
                </Form.Item>
                <Form.Item style={{marginBottom:"4px"}}>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Por favor, insira sua senha.' }],
                })(
                    <InputPassword prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password" style={{height:40}}
                        placeholder="Senha" />
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="" style={{float:"right"}}>Forgot password</a>
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" style={{width:"100%", height:"48px"}} className="login-form-button">
                    Log in
                </Button>
                </Form.Item>
            </Form>
            <a href="">Registre-se agora!</a>
        </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => {
            dispatch(startLogin(email, password))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LoginModalContent));