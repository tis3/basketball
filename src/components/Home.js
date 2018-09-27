import React,{Component} from 'react';
import { Layout,Row,Col,Button } from 'antd';
import MouseDownAnimation from '../assets/mousedown-animation';
import BasketIllustration from '../assets/images/Homeimg.png';
const { Content } = Layout;

export default class Home extends Component{

    render(){
        return(
            <Content style={{marginTop: 64, bottom:"10%", background:"#FFF"}}>
            
                <Row type="flex" align="middle">
                    <MouseDownAnimation/>
                    <Col type="flex" align="bottom" justify="right" md={{span: 11,offset:1}} style={{alignSelf:"start"}}>
                    <h1 className="big-title">
                        Mudando vidas através do basquete
                    </h1>
                    <p className="subtitle">
                        Ensinando o esporte e seus benefícios no cotidiano para crianças de todo o Brasil.
                    </p>
                        <Row type="flex" justify="center" >
                            <Col md={{span:11}} xs={{span:11}}>
                            <Button type="primary" size="large" style={{width:"100%",minWidth:"150px",height:48}} className="btn-gradient">Saiba mais</Button>
                            </Col>
                             <Col md={{span:11,offset:1}} xs={{span:11,offset:1}}>
                             <Button size="large" style={{width:"100%", minWidth:"150px",height:48}}>Junte-se a nós</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={{span:11,offset:1}}>
                        <img alt="Main" className="mainImage" src={BasketIllustration} width="100%" style={{float:"right"}}/>
                    </Col>
                </Row>
            </Content>
        );
    }
}