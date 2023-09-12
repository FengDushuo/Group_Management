import React from 'react'
import LoadableComponent from '../utils/LoadableComponent'
//const Test = React.lazy(() => import('./Test'));   //报错，就没用React.lazy了
const ButtonDemo = LoadableComponent(import('./ButtonDemo/index'), true);
const IconDemo = LoadableComponent(import('./IconDemo/index'), true);
const FeedbackDemo = LoadableComponent(import('./FeedbackDemo/index'), true);
const Users = LoadableComponent(import('./Users/index'), true);
const Customer = LoadableComponent(import('./Customer/index'), true);
const PcapDownload = LoadableComponent(import('./Download/PcapDownload/index'), true);
const CsvDownload = LoadableComponent(import('./Download/CsvDownload/index'), true);
const PdfDownload = LoadableComponent(import('./Download/PdfDownload/index'), true);
const Orderlist = LoadableComponent(import('./Orderlist/index'), true);
const LineChart = LoadableComponent(import('./Charts/LineChart'), true);
const BarChart = LoadableComponent(import('./Charts/BarChart'), true);
const MixinChart = LoadableComponent(import('./Charts/MixinChart'), true);
const PieChart = LoadableComponent(import('./Charts/PieChart'), true);
const KeyBoard = LoadableComponent(import('./Charts/KeyBoard'), true);
const Collection = LoadableComponent(import('./Collection/index'), true);
const MessageBoard = LoadableComponent(import('./MessageBoard/index'), true);
const Chat = LoadableComponent(import('./Chat/index'), true);
const About = LoadableComponent(import('./About/index'), true);
const Home = LoadableComponent(import('./Home/index'), true);
const ImageSource = LoadableComponent(import('./Source/ImageSource/index'), true);
const BandDosChart = LoadableComponent(import('./Charts/BandDosChart'), true);
const ShellButtonDemo = LoadableComponent(import('./Shell/index'),true);

const menu = [
    {
        name: '首页',
        icon: 'home',
        key: 'Home'
    },
    {
        name: '用户管理',
        icon: 'user',
        key: 'Users'
    },
    //{
    //    name: '客户管理',
    //    icon: 'wechat',
    //    key: 'Customer'
    //},
    //{
    //    name: '订单管理',
    //    icon: 'snippets',
    //    key: 'Orderlist'
    //},
    {
        name: '资源管理',
        icon: 'form',
        key: 'Source',
        children: [
			{
                name: '图片管理',
                icon: 'picture',
				key: 'ImageSource'
			}
		]
    },
    {
        name: '文件下载',
        icon: 'download',
        key: 'Download',
        children: [
			{
                key: 'PcapDownload',
                icon: 'download',
				name: 'Pcap文件'
            },
            {
                key: 'PdfDownload',
                icon: 'download',
				name: 'Pdf文件'
			},
            {
                key: 'CsvDownload',
                icon: 'download',
				name: 'Csv文件'
			}
		]
    },
    {
        name: '检测操作',
        icon: 'clock-circle',
        key: 'ShellButtonDemo'
    },
    {
		name: '数据图表',
        icon: 'area-chart',
        key: 'Charts',
		children: [
			{
                key: 'LineChart',
                icon: 'line-chart',
			    name: '折线图表'
			},
			// {
            //     key: 'KeyBoard',
            //     icon: 'fund',
			// 	name: '键盘图表'
			// },
			// {
            //     key: 'BarChart',
            //     icon: 'bar-chart',
			// 	name: '柱状图'
			// },
			// {
            //     key: 'PieChart',
            //     icon: 'pie-chart',
			// 	name: '饼图'
			// },
			{
                key: 'MixinChart',
                icon: 'area-chart',
				name: '混合图表'
			},
            {
                key: 'BandDosChart',
                icon: 'area-chart',
				name: '能带图表'
			}
		]
	},
    {
        name: '管理库',
        icon: 'bulb',
        key: 'Collection'
    },
    {
        name: '留言板',
        icon: 'message',
        key: 'MessageBoard'
    },
    {
        name: '聊天室',
        icon: 'qq',
        key: 'Chat'
    },
    {
        name: '关于',
        icon: 'info-circle',
        key: 'About'
    },
    {
        name: 'antd',
        icon: 'ant-design',
        key: 'antd',
        children: [
            {
                name: '按钮',
                icon: '',
                key: 'ButtonDemo',
            },
            {
                name: '图标',
                icon: '',
                key: 'IconDemo',
            },
            {
                name: '反馈',
                icon: '',
                key: 'FeedbackDemo',
            },
        ]
    }
]

const tabs = {
    Home: <Home />,
    Users: <Users />,
    Customer: <Customer />,
    PcapDownload: <PcapDownload />,
    CsvDownload: <CsvDownload />,
    PdfDownload: <PdfDownload />,
    Orderlist: <Orderlist />,
    ShellButtonDemo: <ShellButtonDemo />,
    LineChart: <LineChart />,
    PieChart: <PieChart />,
    BarChart: <BarChart />,
    KeyBoard: <KeyBoard />,
    MixinChart: <MixinChart />,
    BandDosChart: <BandDosChart />,
    Collection: <Collection />,
    MessageBoard: <MessageBoard />,
    Chat: <Chat />,
    About: <About />,
    ButtonDemo: <ButtonDemo />,
    IconDemo: <IconDemo />,
    FeedbackDemo: <FeedbackDemo />,
    ImageSource:<ImageSource />

}

export {
    menu,
    tabs
}