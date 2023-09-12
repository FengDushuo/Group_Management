import React from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/Chart/Chart';
let xData = ['-10%','-8%','-6%','-4%','-2%','0%','2%','3.2%','3.4%','3.6%','4%','6%','7%','7.5%','8%'];

const chartData = {
	backgroundColor: '#001529',
	title: {
		text: 'MAE of CrTe2',
		x: 'center',
		top: 30,
		textStyle: {
			color: '#fff',
			fontSize: '20'
		},
		subtextStyle: {
			color: '#90979c',
			fontSize: '16'
		}
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			textStyle: {
				color: '#fff'
			}
		}
	},
	grid: {
		top: 80,
		left: '2%',
		right: '2%',
		bottom: 100,
		containLabel: true,
		textStyle: {
			color: '#fff'
		}
	},
	legend: {
		left: '2%',
		top: 20,
		textStyle: {
			color: '#90979c'
		},
		data: ['Cr', 'Te', 'total']
	},
	calculable: true,
	xAxis: [
		{
			type: 'category',
			axisLine: {
				lineStyle: {
					color: '#90979c'
				}
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				interval: 0
			},
			data: xData
		}
	],
	yAxis: [
		{
			type: 'value',
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#90979c'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			},
			splitArea: {
				show: false
			}
		}
	],
	dataZoom: [
		{
			show: true,
			height: 30,
			xAxisIndex: [0],
			bottom: 30,
			start: 10,
			end: 80,
			handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
			handleSize: '110%',
			handleStyle: {
				color: '#d3dee5'
			},
			textStyle: {
				color: '#fff'
			},
			borderColor: '#90979c'
		},
		{
			type: 'inside',
			show: true,
			height: 15,
			start: 1,
			end: 35
		}
	],
	series: [
		{
			name: 'Cr',
			type: 'bar',
			stack: 'total',
			barMaxWidth: 35,
			barGap: '10%',
			itemStyle: {
				normal: {
					color: 'rgba(255,144,128,1)',
					label: {
						show: true,
						textStyle: {
							color: '#fff'
						},
						position: 'top',
						formatter(p) {
							return p.value;
						}
					}
				}
			},
			data: [-0.6731,-0.4922,-0.4091,-0.0443,0.0746,0.1608,0.1973,0.1914,0.19,0.1874,0.1823,0.1314,1.009E-4,1.316E-4,0.1601]
		},

		{
			name: 'Te',
			type: 'bar',
			stack: 'total',
			itemStyle: {
				normal: {
					color: 'rgba(0,191,183,1)',
					barBorderRadius: 0,
					label: {
						show: true,
						position: 'bottom',
						formatter(p) {
							return p.value;
						}
					}
				}
			},
			data: [-3.7841,-3.6119,-3.3941,-4.4392,-4.5258,-4.5574,-3.5305,-2.797,-2.6618,-2.4327,-2.07,0.1881,-1.194E-4,-9.299E-4,-0.6976]
		},
		{
			name: 'total',
			type: 'line',
			stack: 'total',
			symbolSize: 10,
			symbol: 'circle',
			itemStyle: {
				normal: {
					color: 'rgba(252,230,48,1)',
					barBorderRadius: 0,
					label: {
						show: true,
						position: 'top',
						formatter(p) {
							return p.value;
						}
					}
				}
			},
			data: [-4.4572,-4.1041,-3.8032,-4.4835,-4.4512,-4.3966,-3.3332,-2.6056,-2.4718,-2.2453,-1.8877,0.3195,-1.85E-5,-7.983E-4,-0.5375]
		}
	]
};

const MixinChart = props => <Chart chartData={chartData} height={'700px'} style={{ padding: 0 }} {...props} />;

const mapStateToProps = state => {
	return {
		collapse: state.collapse
	};
};

export default connect(mapStateToProps)(MixinChart);
