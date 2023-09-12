import React from 'react';
import { connect } from 'react-redux';
import echarts from 'echarts';
import Chart from '../../components/Chart/Chart';

const chartData = {
	backgroundColor: '#fff',
	title: {
		top: 30,
		text: 'MAE of CrTe2',
		textStyle: {
			fontWeight: 'normal',
			fontSize: 16,
			color: '#57617B'
		},
		left: 'center'
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross'
		},
		padding: [5, 10]
	},
	// tab
	legend: {
		top: 20,
		icon: 'rect',
		itemWidth: 14,
		itemHeight: 5,
		itemGap: 13,
		right: '5%',
		textStyle: {
			fontSize: 12,
			color: '#57617B'
		}
	},

	// 图表
	grid: {
		top: 80,
		left: '2%',
		right: '5%',
		bottom: '6%',
		containLabel: true
	},
	// x轴
	xAxis: [
		{
			type: 'category', //分类
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#57617B'
				}
			},
			data: ['-10%','-8%','-6%','-4%','-2%','0%','2%','3.2%','3.4%','3.6%','4%','6%','7%','7.5%','8%']
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '(%)',
			axisTick: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#57617B'
				}
			},
			axisLabel: {
				margin: 10,
				textStyle: {
					fontSize: 14
				}
			}
		}
	],
	series: [
		{
			name: 'Cr',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 1
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: 'rgba(137, 189, 27, 0.3)'
						},
						{
							offset: 0.8,
							color: 'rgba(137, 189, 27, 0)'
						}
					]),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(137,189,27)',
					borderColor: 'rgba(137,189,2,0.27)',
					borderWidth: 12
				}
			},
			data: [-0.6731,-0.4922,-0.4091,-0.0443,0.0746,0.1608,0.1973,0.1914,0.19,0.1874,0.1823,0.1314,1.009E-4,1.316E-4,0.1601]
		},
		{
			name: 'Te',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 1
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: 'rgba(0, 136, 212, 0.3)'
						},
						{
							offset: 0.8,
							color: 'rgba(0, 136, 212, 0)'
						}
					]),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(0,136,212)',
					borderColor: 'rgba(0,136,212,0.2)',
					borderWidth: 12
				}
			},
			data: [-3.7841,-3.6119,-3.3941,-4.4392,-4.5258,-4.5574,-3.5305,-2.797,-2.6618,-2.4327,-2.07,0.1881,-1.194E-4,-9.299E-4,-0.6976]
		},
		{
			name: 'total',
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 5,
			showSymbol: false,
			lineStyle: {
				normal: {
					width: 1
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: 'rgba(219, 50, 51, 0.3)'
						},
						{
							offset: 0.8,
							color: 'rgba(219, 50, 51, 0)'
						}
					]),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			},
			itemStyle: {
				normal: {
					color: 'rgb(219,50,51)',
					borderColor: 'rgba(219,50,51,0.2)',
					borderWidth: 12
				}
			},
			data: [-4.4572,-4.1041,-3.8032,-4.4835,-4.4512,-4.3966,-3.3332,-2.6056,-2.4718,-2.2453,-1.8877,0.3195,-1.85E-5,-7.983E-4,-0.5375]
		}
	]
};

const LineChart = props => <Chart chartData={chartData} height={'500px'} style={{ padding: 0 }} {...props} />;

const mapStateToProps = state => {
	return {
		collapse: state.collapse
	};
};

export default connect(mapStateToProps)(LineChart);
