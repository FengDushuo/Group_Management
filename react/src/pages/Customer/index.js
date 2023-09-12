import React, { Component } from 'react';
import { Table, Card, Form, Input, Button, DatePicker, message, Icon, Row, Col, Divider, Modal, Popconfirm, notification } from 'antd'
import { json } from '../../utils/ajax'
import moment from 'moment'
import InfoModal from './InfoModal'
import { connect } from 'react-redux'
import { logout } from '../../utils/session'
import { withRouter } from 'react-router-dom'
import CreateCustomerModal from './CreateCustomerModal'

const store = connect(
    (state) => ({ user: state.user })
)


@withRouter @store @Form.create()
class Customer extends Component {
    state = {
        users: [],    //用户列表
        usersLoading: false,//获取用户loading
        pagination: {
            total: 0,
            current: 1,  //前台分页是从1开始的，后台分页是从0开始的，所以要注意一下
            pageSize: 10,
            showQuickJumper: true
        },
        isShowInfoModal: false,
        userInfo: {},        //当前行的user信息
        selectedRowKeys: [],   //选择中的行keys
        isShowCreateModal: false

    }
    componentDidMount() {
        this.getWxUsers()
    }
    componentDidUpdate(prevProps) {
        //当修改用户信息时，重新加载
        if (this.props.user !== prevProps.user) {
            this.getWxUsers(this.state.pagination.current)
        }
    }
    /**
     * 虽然后台可以一次把所有数据返回给我，但是为了学习,前后台还是做了一个分页
     */
    getWxUsers = async (page = 1) => {
        const { pagination } = this.state
        const fields = this.props.form.getFieldsValue()
        this.setState({
            usersLoading: true,
        })
        const res = await json.get('/customer/getWxUsers', {
            current: page - 1,
            username: fields.username || '',   //koa会把参数转换为字符串，undefined也会
        })
        if (res.status !== 0) {
            this.setState({
                usersLoading: false,
            })
            return
        }
        this.setState({
            usersLoading: false,
            users: res.data.list,
            pagination: {
                ...pagination,
                total: res.data.total,
                current: page
            }
        })
    }
    /**
     * table分页
     */
    onTableChange = async (page) => {
        await this.setState({
            pagination: page
        })
        this.getWxUsers(page.current)
    }
    /**
     * 搜索函数
     */
    onSearch = () => {
        this.getWxUsers()
    }
    /**
     * 重置函数
     */
    onReset = () => {
        this.props.form.resetFields()
        this.getWxUsers()
        this.setState({
            selectedRowKeys: []
        })
        message.success('重置成功')
    }
    /**
     * 打开用户信息模特框，并初始化用户信息回显
     */
    showInfoModal = (record) => {
        const userInfo = {
            nickname: record.nickname,
            gender: record.gender,
            province: record.province,
            city: record.city,
        }
        this.setState({
            isShowInfoModal: true,
            userInfo: userInfo
        })
    }
    /**
     * 关闭用户信息模态框
     */
    closeInfoModal = () => {
        this.setState({
            isShowInfoModal: false,
            userInfo: {}
        })
    }

    toggleShowCreateModal = (visible) => {
        this.setState({
            isShowCreateModal: visible
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const { users, usersLoading, pagination, userInfo, isShowInfoModal, selectedRowKeys, isShowCreateModal } = this.state
        const columns = [
            {
                title: '序号',
                key: 'num',
                align: 'center',
                render: (text, record, index) => {
                    let num = (pagination.current - 1) * 10 + index + 1
                    if (num < 10) {
                        num = '0' + num
                    }
                    return num
                }
            },
            {
                title: '用户名',
                dataIndex: 'nickname',
                align: 'center'
            },
            {
                title: '用户头像',
                dataIndex: 'avatar',
                align: 'center',
                render: (text) => (<img src={text} alt="" width="50px" />)
            },
            {
                title: '省份',
                dataIndex: 'province',
                align: 'center'
            },
            {
                title: '城市',
                dataIndex: 'city',
                align: 'center'
            },
            {
                title: '性别',
                dataIndex: 'gender',
                align: 'center'
            },
            {
                title: '生日',
                dataIndex: 'birth',
                align: 'center'
            },
            {
                title: '电话',
                dataIndex: 'phone',
                align: 'center'
            },
            
            {
                title: '操作',
                key: 'active',
                align: 'center',
                render: (text, record) => (
                    <div style={{ textAlign: 'left' }}>
                        <span className='my-a' onClick={() => this.showInfoModal(record)}><Icon type="eye" /> 查看</span>
                        {
                            this.props.user.username === record.username &&
                            <Popconfirm title='您确定删除当前用户吗？' onConfirm={() => this.singleDelete(record)}>
                                <span className='my-a'><Divider type='vertical' /><Icon type='delete' /> 删除</span>
                            </Popconfirm>
                        }
                    </div>
                )
            },
        ]

        const rowSelection = {
            selectedRowKeys: selectedRowKeys,
            onChange: (selectedRowKeys) => this.setState({ selectedRowKeys }),
            getCheckboxProps: (record) => ({
                disabled: record.id === this.props.user.id
            })
        }
        return (
            <div style={{ padding: 24 }}>
                <Card bordered={false}>
                    <Form layout='inline' style={{ marginBottom: 16 }}>
                        <Row>
                            <Col span={6}>
                                <Form.Item label="用户名">
                                    {getFieldDecorator('nickname')(
                                        <Input
                                            onPressEnter={this.onSearch}
                                            style={{ width: 200 }}
                                            placeholder="用户名"
                                        />
                                    )}
                                </Form.Item>
                            </Col>
                            
                            <Col span={4}>
                                <Form.Item style={{ marginRight: 0, width: '100%' }} wrapperCol={{ span: 24 }}>
                                    <div style={{ textAlign: 'right' }}>
                                        <Button type="primary" icon='search' onClick={this.onSearch}>搜索</Button>&emsp;
                                        <Button icon="reload" onClick={this.onReset}>重置</Button>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <Table
                        bordered
                        rowKey='id'
                        columns={columns}
                        dataSource={users}
                        loading={usersLoading}
                        rowSelection={rowSelection}
                        pagination={pagination}
                        onChange={this.onTableChange}
                    />
                </Card>
                <InfoModal visible={isShowInfoModal} userInfo={userInfo} onCancel={this.closeInfoModal} />
                <CreateCustomerModal visible={isShowCreateModal} toggleVisible={this.toggleShowCreateModal} onRegister={this.getWxUsers} />
            </div>
        );
    }
}

export default Customer