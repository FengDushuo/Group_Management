import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Row, Col, Spin } from 'antd'
import Typing from '../../components/Typing/index'
import { json } from '../../utils/ajax'
import FlowdurChart from './flowdurchart'


class ShellButtonDemo extends Component {
    state = {
        slowhttptest_src:'',
        loading: false
        
    }
    toslowloris = async () =>{
        this.setState({
            loading: true
        })
        const res = await json.get('/shell/toslowloris')
        this.setState({
            slowhttptest_src: res.data || '',
            loading: false
        })
    }
    toslowread = async () =>{
        this.setState({
            loading: true
        })
        const res = await json.get('/shell/toslowread')
        this.setState({
            slowhttptest_src: res.data || '',
            loading: false
        })
    }
    toslowpost = async () =>{
        this.setState({
            loading: true
        })
        const res = await json.get('/shell/toslowpost')
        this.setState({
            slowhttptest_src: res.data || '',
            loading: false
        })
    }
    render() {
        const { slowhttptest_src, loading } = this.state
        return (
            <div style={{ padding: 24 }}>
                <Spin spinning={loading}>
                    <Card bordered={false} hoverable style={{ marginBottom: 24 }} bodyStyle={{ minHeight: 130 }}>
                        <Typing className="markdown">
                            <h3>检测操作</h3>
                            点击按钮实现功能
                        </Typing>
                    </Card>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card hoverable bordered={false} style={{ marginBottom: 24 }}>
                                <div style={{ width: '50%' }}>
                                    <Button type="primary" block style={{ marginBottom: 8 }} onClick={this.toslowloris}>slowhttptest-slowloris</Button>&emsp;
                                    <Button type="primary" block style={{ marginBottom: 8 }} onClick={this.toslowread}>slowhttptest-slowread</Button>&emsp;
                                    <Button type="primary" block style={{ marginBottom: 8 }} onClick={this.toslowpost}>slowhttptest-slowpost</Button>&emsp;
                                </div>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card hoverable bordered={false} style={{ marginBottom: 24 }}>
                                <iframe 
                                    style={{width:'100%', height:'630px', border: '0px', overflow:'visible', marginBottom: 64 }}
                                    ref="iframe" 
                                    src={this.state.slowhttptest_src} 
                                    width="100%" 
                                    height='630px'
                                    scrolling="no" 
                                    frameBorder="0"
                                />
                            </Card>
                        </Col>  
                    </Row>
                    <Row gutter={16}>
                        <Col className="gutter-row" md={24}>
                            <div className="gutter-box">
                                <Card title="后台数据图" bordered={false}>
                                    <FlowdurChart />
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Spin>
            </div>
        );
    }
}

export default ShellButtonDemo;