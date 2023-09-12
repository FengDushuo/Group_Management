import React, { Component } from 'react';
import {Card} from 'antd'
import Typing from '../../components/Typing/index'

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{ padding: 24 }}>
                <Card bordered={false} hoverable style={{ marginBottom: 24 }} bodyStyle={{ minHeight: 130 }}>
                    <Typing className="markdown">
                        <h3>课题组管理系统</h3>
                        ZSTU-VASP 课题组管理系统，请管理员谨慎操作...
                    </Typing>
                    
                </Card>
            </div>
         );
    }
}
 
export default Home;