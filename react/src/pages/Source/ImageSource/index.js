import React from 'react'
import {Card, Col, Row, Icon, Upload, Modal,BackTop} from 'antd'
import { isAuthenticated, authenticateSuccess } from '../../../utils/session'


class ImageSource1 extends React.Component {
  state = {
    loading: false,
    previewVisible: false,
    previewImage: '',
    fileList: [
    {
      uid: 1,
      name: 'loginwelcome.png',
      status: 'done',
      url: `${process.env.REACT_APP_BASE_URL}/public/upload-imagesource/LoginWelcome/loginwelcome.png`,
    }
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
            <Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='晶体结构图片'>
              <Upload
                headers={
                    {Authorization:`Bearer ${isAuthenticated()}`}
                }
                action={`${process.env.REACT_APP_BASE_URL}/imagesource_upload/loginwelcome?isImg=1&fileType=LoginWelcome&intofileName=loginwelcome.png`}
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

class ImageSource2 extends React.Component {
    state = {
      loading: false,
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: 1,
          name: 'indexbg.png',
          status: 'done',
          url: `${process.env.REACT_APP_BASE_URL}/public/upload-imagesource/IndexBg/indexbg.png`,
        }
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
              <Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='层间近邻图片'>
                <Upload
                  headers={
                    {Authorization:`Bearer ${isAuthenticated()}`}
                  }
                  action={`${process.env.REACT_APP_BASE_URL}/imagesource_upload/indexbg?isImg=1&fileType=IndexBg&intofileName=indexbg.png`}
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

class ImageSource3 extends React.Component {
    state = {
      loading: false,
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: 1,
          name: 'indexbanner1.png',
          status: 'done',
          url: `${process.env.REACT_APP_BASE_URL}/public/upload-imagesource/IndexBanner/indexbanner1.png`,
        },
        {
          uid: 2,
          name: 'indexbanner2.png',
          status: 'done',
          url: `${process.env.REACT_APP_BASE_URL}/public/upload-imagesource/IndexBanner/indexbanner2.png`,
        },
        {
          uid: 3,
          name: 'indexbanner3.png',
          status: 'done',
          url: `${process.env.REACT_APP_BASE_URL}/public/upload-imagesource/IndexBanner/indexbanner3.png`,
        }
      ],
      intofileName:'',
      filenamelist:['indexbanner1.png','indexbanner2.png','indexbanner3.png']
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
              <Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='应变作用图片'>
                <Upload
                  headers={
                    {Authorization:`Bearer ${isAuthenticated()}`}
                  }
                  action={`${process.env.REACT_APP_BASE_URL}/imagesource_upload/indexbanner?isImg=1&fileType=IndexBanner&intofileName=${this.state.intofileName}`}
                  listType="picture-card"
                  fileList={this.state.fileList}
                  onPreview={this.handlePreview}
                  onChange={({fileList}) => {
                    this.setState({fileList})
                    var changefilelist=new Array()
                    fileList.forEach(function(item,index){
                      changefilelist.push(item["name"])
                    })
                    var intofilelist = this.state.filenamelist.concat(changefilelist).filter(function(v, i, arr) {
                      return arr.indexOf(v) === arr.lastIndexOf(v);
                    })
                    this.setState({intofileName:intofilelist[0]})
                  }}
                >
                  {this.state.fileList.length >= 3 ? null : uploadButton}
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

class ImageSource4 extends React.Component {
    state = {
      loading: false,
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: 1,
          name: 'indexenv1.png',
          status: 'done',
          url: `${process.env.REACT_APP_BASE_URL}/public/upload-imagesource/IndexEnv/indexenv1.png`,
        },
        {
          uid: 2,
          name: 'indexenv2.png',
          status: 'done',
          url: `${process.env.REACT_APP_BASE_URL}/public/upload-imagesource/IndexEnv/indexenv2.png`,
        },
        {
          uid: 3,
          name: 'indexenv3.png',
          status: 'done',
          url: `${process.env.REACT_APP_BASE_URL}/public/upload-imagesource/IndexEnv/indexenv3.png`,
        }
      ],
      intofileName:'',
      filenamelist:['indexenv1.png','indexenv2.png','indexenv3.png']
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
              <Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='应变影响图片'>
                <Upload
                  headers={
                    {Authorization:`Bearer ${isAuthenticated()}`}
                  }
                  action={`${process.env.REACT_APP_BASE_URL}/imagesource_upload/indexenv?isImg=1&fileType=IndexEnv&intofileName=${this.state.intofileName}`}
                  listType="picture-card"
                  fileList={this.state.fileList}
                  onPreview={this.handlePreview}
                  onChange={({fileList}) => {
                    this.setState({fileList})
                    var changefilelist=new Array()
                    fileList.forEach(function(item,index){
                      changefilelist.push(item["name"])
                    })
                    var intofilelist = this.state.filenamelist.concat(changefilelist).filter(function(v, i, arr) {
                      return arr.indexOf(v) === arr.lastIndexOf(v);
                    })
                    this.setState({intofileName:intofilelist[0]})
                  }}
                >
                  {this.state.fileList.length >= 3 ? null : uploadButton}
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



class ImageSource extends React.Component {
    render(){
        return (
            <div>
                <ImageSource1 />
                <ImageSource2 />
                <ImageSource3 />
                <ImageSource4 />
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

export default ImageSource