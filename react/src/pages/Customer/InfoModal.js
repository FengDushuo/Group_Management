import React, { Component } from 'react';
import { Modal, Row, Col, Form, Input, Button } from 'antd'
import { createFormField } from '../../utils/util'


const form = Form.create({
    //表单回显
    mapPropsToFields(props) {
        return createFormField(props.userInfo)
    }
})

@form
class InfoModal extends Component {
    state = {}
    render() {
        const { getFieldDecorator } = this.props.form
        const formItemLayout = {
            labelCol: {
                span: 10
            },
            wrapperCol: {
                span: 14
            },
        };
        return (
            <Modal
                visible={this.props.visible}
                onCancel={this.props.onCancel}
                width={800}
                centered
                footer={<Button type='primary' onClick={this.props.onCancel}>确定</Button>}
                title='用户注册信息'>
                <Form {...formItemLayout} style={{ marginLeft: -40 }}>
                    <Row gutter={12}>
                        <Col span={12}>
                            <Form.Item label="用户名">
                                {getFieldDecorator('nickname', {})(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="性别">
                                {getFieldDecorator('gender', {})(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="注册省份">
                                {getFieldDecorator('province', {})(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="注册城市">
                                {getFieldDecorator('city', {})(<Input />)}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

            </Modal>
        );
    }
}

export default InfoModal;