
### 后台管理项目
#### 技术选用
本系统将使用React构建后台管理部分的用户界面，使用Koa作为后台管理系统的Web框架；使用MySQL8作为数据库支持。使用PM2进行监控。  
在系统还嵌入了Tcpdump、Slowhttptest、CICFlowMeter等工具，以整合网络攻击模拟、网络流量数据整理、数据预处理等功能。  

#### 功能流程与功能模块
##### 后台管理部分
后台管理部分的主要功能流程如下：用户选择注册及登录进入后台管理平台，系统展示大部分功能，其中关键的功能是素材管理，文件下载和检测操作。    
在系统的各个功能模块，用户可以根据需要自行更改所需的素材，或是查看并下载可利用PC端数据可视化子系统操作的相应文件。具体的功能流程如图。  
![功能流程图](https://github.com/FengDushuo/Group_Management/tree/main/media/1.png)    
后台管理部分的功能模块如图。  
![功能模块图](https://github.com/FengDushuo/Group_Management/tree/main/media/2.png)  
##### Tcpdump抓取数据包  
对于Tcpdump抓取数据包的应用，有两种模式，分别是自动抓取和被动抓取模式。以下进行介绍：  
自动抓取模式。自动抓取模式主要是为了辅助系统的文件下载功能，生成pcap文件与经过CICFlowMeter处理所得到的csv文件以提供真实的实验数据并通过网络流量数据可视化平台进行数据可视化操作。  
被动抓取模式。被动抓取模式主要用于在实施网络攻击模拟时进行网络流量数据抓取，以实现对一段时间内的数据进行可视化。在CIC-IDS-2017数据集特征分析的基础上，可以根据具体攻击模式进行相应特征的数据可视化，更直观的观测数据特征的趋势和变化。  
Tcpdump嵌入功能的实现关系到后台管理系统中文件下载系统的实现。目前系统中主要利用Tcpdump实现数据包的自动捕获并将数据包保存到pcap文件中，再利用CICFlowMeter实现csv文件的获取。功能流程：在服务器端运行Shell脚本以运行Tcpdump自动捕获程序，可以自动捕捉数据包，并保存到指定位置以供系统调用，在实验中可停止捕获。Tcpdump嵌入相应功能流程和功能模块如图所示。    
![Tcpdump功能流程功能模块](https://github.com/FengDushuo/Group_Management/tree/main/media/3.png)   
##### Slowhttptest模拟网络攻击
利用Slowhttptest模拟网络攻击主要是为了结合对数据集特征的研究，在了解研究各个网络攻击的最佳特征后，更真实地模拟网络攻击操作，获取真实的网络流量数据，为接下来的网络流量数据可视化技术研究提供便利。  
Slowhttptest功能流程：在后台管理系统中选择检测操作；选择合适的网络攻击类型，触发后台的shell命令，对服务器的另一个端口进行网络攻击，结果将直接反馈在前端页面中。如图所示。   
![Slowhttptest功能流程](https://github.com/FengDushuo/Group_Management/tree/main/media/4.png)  

#### 核心框架和代码解释
后台管理部分的总体架构模式如图所示。  
![系统架构图](https://github.com/FengDushuo/Group_Management/tree/main/media/5.png)  
PM2是一个Node.js应用进程管理工具，提供负载均衡的功能，使用PM2可以使很多Node.js应用管理的工作得到简化，如自动重启和性能监控等，使用简单。  
下面代码给出网络流量数据可视化系统后台管理页面侧边导航栏的代码。引用并使用设计好的各种组件，最后组成了后台管理页面的侧边导航栏。  
```
import React from 'react'
import LoadableComponent from '../utils/LoadableComponent'
const Users = LoadableComponent(import('./Users/index'), true);
const Customer = LoadableComponent(import('./Customer/index'), true);
const PcapDownload = LoadableComponent(import('./Download/PcapDownload/index'), true);
const CsvDownload = LoadableComponent(import('./Download/CsvDownload/index'), true);
const Home = LoadableComponent(import('./Home/index'), true);
const ImageSource = LoadableComponent(import('./Source/ImageSource/index'), true);
const ShellButtonDemo = LoadableComponent(import('./Shell/index'),true);
const menu = [
    {
        name: '首页',
        icon: 'home',
        key: 'Home'
    },
    {
        name: '用户管理',
        icon: 'user',
        key: 'Users'
    },
    {
        name: '客户管理',
        icon: 'wechat',
        key: 'Customer'
    },
    {
        name: '素材管理',
        icon: 'form',
        key: 'Source',
        children: [
            {
                key: 'ImageSource',
                icon: 'picture',
                name: '图片管理'
            }
        ]
    },
    {
        name: '文件下载',
        icon: 'download',
        key: 'Download',
        children: [
            {
                key: 'PcapDownload',
                icon: 'download',
                name: 'Pcap文件'
            },
            {
                key: 'CsvDownload',
                icon: 'download',
                name: 'Csv文件'
            }
        ]
    },
    {
        name: '检测操作',
        icon: 'clock-circle',
        key: 'ShellButtonDemo'
    }
]
const tabs = {
    Home: <Home />,
    Users: <Users />,
    Customer: <Customer />,
    PcapDownload: <PcapDownload />,
    CsvDownload: <CsvDownload />,
    ShellButtonDemo: <ShellButtonDemo />,
    ImageSource:<ImageSource />
}
export {
    menu,
    tabs
}
```

### 1.项目截图
![系统首页](https://github.com/FengDushuo/Group_Management/tree/main/media/6.png)    
![用户管理](https://github.com/FengDushuo/Group_Management/tree/main/media/7.png)    
![客户管理](https://github.com/FengDushuo/Group_Management/tree/main/media/8.png)    
![素材管理](https://github.com/FengDushuo/Group_Management/tree/main/media/9.png)    
![文件下载](https://github.com/FengDushuo/Group_Management/tree/main/media/10.png)    
![文件下载](https://github.com/FengDushuo/Group_Management/tree/main/media/11.png)   
其余还有多种功能，用户可以使用和进行定制化操作。


