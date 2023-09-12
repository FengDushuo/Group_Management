import React, { Component } from 'react';
import { Table, Card, Form, Input, Button, DatePicker, message, Icon, Row, Col, Divider, Modal, Popconfirm, notification } from 'antd'
import { json } from '../../../utils/ajax'
import moment from 'moment'
import { connect } from 'react-redux'
import { logout } from '../../../utils/session'
import { withRouter } from 'react-router-dom'
import { isAuthenticated, authenticateSuccess } from '../../../utils/session'

const store = connect(
    (state) => ({ user: state.user })
)


@withRouter @store @Form.create()
class PdfDownload extends Component {
    state = {
        Pdfs: [],    //用户列表
        PdfsLoading: false,//获取用户loading
        pagination: {
            total: 0,
            current: 1,  //前台分页是从1开始的，后台分页是从0开始的，所以要注意一下
            pageSize: 10,
            showQuickJumper: true
        },
        PdfInfo: {},        //当前行的user信息
        selectedRowKeys: [],   //选择中的行keys
        isShowInfoModal: false,

    }
    componentDidMount() {
        this.getPdfDownload()
    }

    /**
     * 虽然后台可以一次把所有数据返回给我，但是为了学习,前后台还是做了一个分页
     */
    getPdfDownload = async (page = 1) => {
        const { pagination } = this.state
        const fields = this.props.form.getFieldsValue()
        this.setState({
            PdfsLoading: true,
        })
        const res = await json.get('/download/PdfFiles', {
            current: page - 1,
        })
        if (res.status !== 0) {
            this.setState({
                PdfsLoading: false,
            })
            return
        }
        this.setState({
            PdfsLoading: false,
            Pdfs: res.data.list,
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
        this.getPdfDownload(page.current)
    }

    downloadPdf = (record) => {
        window.open(`${process.env.REACT_APP_BASE_URL}/download/PdfDownload?filefield=${record.filefield}&filename=${record.filename}`,"_self")
   
    }
    
    render() {
        const { getFieldDecorator } = this.props.form
        const { Pdfs, PdfsLoading, pagination, selectedRowKeys } = this.state
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
                title: '文件名',
                dataIndex: 'filename',
                align: 'center'
            },
            {
                title: '操作',
                key: 'active',
                align: 'center',
                render: (text, record) => (
                    <div style={{ textAlign: 'left' }}>
                        <a className='my-a' onClick={() => this.downloadPdf(record)}><Icon type="download" /> 下载</a>
                    </div>
                )
            },
        ]

        return (
            <div style={{ padding: 24 }}>
                <Card bordered={false}>
                    <Form layout='inline' style={{ marginBottom: 16 }}>
                        <Row>
                        </Row>
                    </Form>
                    <Table
                        bordered
                        rowKey='id'
                        columns={columns}
                        dataSource={Pdfs}
                        loading={PdfsLoading}
                        pagination={pagination}
                        onChange={this.onTableChange}
                    />
                </Card>
                
            </div>
        );
    }
}

export default PdfDownload