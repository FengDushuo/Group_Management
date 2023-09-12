import React from 'react'
import {Card, Col, Row, Icon, Upload, Modal,BackTop} from 'antd'
import { isAuthenticated, authenticateSuccess } from '../../utils/session'
import { Button, Spin } from 'antd'
import Typing from '../../components/Typing/index'
import { json } from '../../utils/ajax'
import FlowdurChart from './flowdurchart'


class BandDosSource1 extends React.Component {
  state = {
    loading: false,
    previewVisible: false,
    previewImage: '',
    fileList: [
    // {
    //   uid: 1,
    //   name: 'upload_band_dos.xml',
    //   status: 'done',
    //   url: `${process.env.REACT_APP_BASE_URL}/public/upload-files/BandDos/upload_band_dos.xml`,
    // }
    ],
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='vasprun.xml'>
              <Upload
                headers={
                    {Authorization:`Bearer ${isAuthenticated()}`}
                }
                action={`${process.env.REACT_APP_BASE_URL}/filesource_upload/banddos?fileType=BandDos&intofileName=upload_band_dos.xml`}
                listType="picture-card"
                accept=".xml"
                fileList={this.state.fileList}
                onPreview={this.handlePreview}
                onChange={({fileList}) => this.setState({fileList})}
              >
                {this.state.fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal visible={this.state.previewVisible} onCancel={() => this.setState({previewVisible: false})}>
                <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
              </Modal>
            </Card>
          </Col>
          
        </Row>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

class BandDosSource2 extends React.Component {
    state = {
      loading: false,
      previewVisible: false,
      previewImage: '',
      fileList: [
    //   {
    //     uid: 1,
    //     name: 'KPOINTS',
    //     status: 'done',
    //     url: `${process.env.REACT_APP_BASE_URL}/public/upload-files/BandDos/KPOINTS`,
    //   }
      ],
    }
  
    handlePreview = (file) => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }
  
    render() {
      const uploadButton = (
        <div>
          <Icon type="plus"/>
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      
      return (
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='KPOINTS'>
                <Upload
                  headers={
                      {Authorization:`Bearer ${isAuthenticated()}`}
                  }
                  action={`${process.env.REACT_APP_BASE_URL}/filesource_upload/banddos?fileType=BandDos&intofileName=KPOINTS`}
                  listType="picture-card"
                  fileList={this.state.fileList}
                  onPreview={this.handlePreview}
                  onChange={({fileList}) => this.setState({fileList})}
                >
                  {this.state.fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal visible={this.state.previewVisible} onCancel={() => this.setState({previewVisible: false})}>
                  <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
                </Modal>
              </Card>
            </Col>
            
          </Row>
          <BackTop visibilityHeight={200} style={{right: 50}}/>
        </div>
      )
    }
  }

class BandDosSource3 extends React.Component {
    state = {
      loading: false,
      previewVisible: false,
      previewImage: '',
      fileList: [
    //   {
    //     uid: 1,
    //     name: 'POTCAR',
    //     status: 'done',
    //     url: `${process.env.REACT_APP_BASE_URL}/public/upload-files/BandDos/POTCAR`,
    //   }
      ],
    }
  
    handlePreview = (file) => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    }
  
    render() {
      const uploadButton = (
        <div>
          <Icon type="plus"/>
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      
      return (
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='POTCAR'>
                <Upload
                  headers={
                      {Authorization:`Bearer ${isAuthenticated()}`}
                  }
                  action={`${process.env.REACT_APP_BASE_URL}/filesource_upload/banddos?fileType=BandDos&intofileName=POTCAR`}
                  listType="picture-card"
                  fileList={this.state.fileList}
                  onPreview={this.handlePreview}
                  onChange={({fileList}) => this.setState({fileList})}
                >
                  {this.state.fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal visible={this.state.previewVisible} onCancel={() => this.setState({previewVisible: false})}>
                  <img alt="example" style={{width: '100%'}} src={this.state.previewImage}/>
                </Modal>
              </Card>
            </Col>
            
          </Row>
          <BackTop visibilityHeight={200} style={{right: 50}}/>
        </div>
      )
    }
}

class ShellButtonDemo extends React.Component {
    state = {
        banddosfig_src:'',
        loading: false
        
    }
    tobanddosfig = async () =>{
        this.setState({
            loading: true
        })
        const res = await json.get('/shell/banddosfig')
        this.setState({
            banddosfig_src: res.data || '',
            loading: false
        })
    }
    
    render() {
        const { banddosfig_src, loading } = this.state
        return (
            <div style={{ padding: 24 }}>
                <Spin spinning={loading}>
                    <Card bordered={false} hoverable style={{ marginBottom: 24 }} bodyStyle={{ minHeight: 130 }}>
                        <Typing className="markdown">
                            <h3>生成能带图</h3>
                        </Typing>
                    </Card>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card hoverable bordered={false} style={{ marginBottom: 24 }}>
                                <div style={{ width: '50%' }}>
                                    <Button type="primary" block style={{ marginBottom: 8 }} onClick={this.tobanddosfig}>banddosfig-banddosfig</Button>&emsp;
                                </div>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card hoverable bordered={false} style={{ marginBottom: 24 }}>
                                <iframe 
                                    style={{width:'100%', height:'900px', border: '0px', overflow:'visible', marginBottom: 64 }}
                                    ref="iframe" 
                                    src={this.state.banddosfig_src} 
                                    width="100%" 
                                    height='630px'
                                    scrolling="no" 
                                    frameBorder="0"
                                />
                            </Card>
                        </Col>  
                    </Row>
                    
                </Spin>
            </div>
        );
    }
}



class BandDosChart extends React.Component {
    render(){
        return (
            <div>
                <BandDosSource1 />
                <BandDosSource2 />
                <BandDosSource3 />
                <ShellButtonDemo />
            </div>
        )
    }
}

const styles = {
  colItem: {
    minHeight: 230,
    borderRadius: 3,
    margin: '10px 0'
  }
}

export default BandDosChart