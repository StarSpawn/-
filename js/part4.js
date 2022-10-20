function getecharts1(){
    var dom = document.getElementById("c1");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
  title: [
    {
      text: '不同交通方式每10亿名旅客里程数死亡人数'
    }
  ],
  polar: {
    radius: [30, '80%']
  },
  angleAxis: {
    max: 100,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['摩托车', '步行', '汽车', '火车','飞机']
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [96.9, 36.2, 3.4, 0.1,0.08],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle',
      formatter: '{b}: {c}'
    }
  }
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
}

function getecharts2(){
    var dom = document.getElementById("c2");
var myChart = echarts.init(dom);
var app = {};

var option;



let barData = {
        name: '乘坐造成至少一人死亡的航班几率',
        data: [1/1000, 1/150],
        xAxis:['安全记录较好的航空公司', '安全记录较差的航空公司'],
        color: ['#10a2ff', 'rgba(16, 162, 255, 0.7)', 'rgba(16, 162, 255, 0)']
    };
    let sbarData = {
        name: '在一次飞行中死亡的几率',
        data: [1/1980, 1/200],
        xAxis:['安全记录较好的航空公司', '安全记录较差的航空公司'],
        color: ['#3c8de9', 'rgba(16, 162, 255, 0.7)', 'rgba(16, 162, 255, 0)']
    };

option = {
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
                text: '不同航司',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#b3b3b3' //标题颜色
                },
                top: '5px',
                left: '0%',
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '5px',
                right: '5px',
                bottom: '5px',
                top: '50px',
                containLabel: true,

            },
            
            calculable: true,
            legend: {
                icon: 'roundRect',
                orient: 'horizontal',
                itemWidth:15,
                itemHeight:5,
                textStyle: {
                    fontSize: 12, //字体大小
                    color: '#161818', //字体颜色
                },
                right: '3%', //距离右侧
               
            },
            xAxis: [{
                type: 'category',
                axisLabel: {
                    interval: 0, // 解决x轴名称过长问题
                    textStyle: {
                        color: '#161818',
                        fontSize: 12,
                    }
                },
                axisLine: {
                    lineStyle: { //y轴网格线设置
                        color: '#161818',
                        width: 1,

                    }
                },                                 
                data: barData.xAxis,

            }],
            yAxis: [{
                type: 'value',
                // name: "单位/个",
                nameGap:8,
                nameTextStyle: {
                    color: "#161818",
                },

                axisTick:{
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: { //y轴网格线设置
                        color: '#161818',
                        width: 1,

                    }
                },
                splitLine: { //保留网格线
                    show: false,
                    lineStyle: { //y轴网格线设置
                        color: '#161818',
                        width: 1,

                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                        color: '#161818', //字体颜色
                    }
                },
            }],
            series: [

                {
                    name: barData.name,
                    type: 'bar',

                    z: 1,
                    barWidth: 12,
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#969a9d'
                        }
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius:[15, 15, 0, 0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: barData.color[0]
                                },
                                    {
                                        offset: 0.7,
                                        color: barData.color[1]
                                    },
                                    {
                                        offset: 1,
                                        color: barData.color[2]
                                    }
                                ]
                            )
                        },

                    },
                    data:barData.data,

                },
                 {
                    name: sbarData.name,
                    type: 'bar',

                    z: 1,
                    barWidth: 12,
                    label: {
                        show: false,
                        
                    },
                    itemStyle: {
                        normal: {
                            barBorderRadius:[15, 15, 0, 0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                    offset: 0,
                                    color: sbarData.color[0]
                                },
                                    {
                                        offset: 0.7,
                                        color: sbarData.color[1]
                                    },
                                    {
                                        offset: 1,
                                        color: sbarData.color[2]
                                    }
                                ]
                            )
                        },

                    },
                    data:sbarData.data,

                }
            ]
        };

if (option && typeof option === 'object') {
    myChart.setOption(option);
}
}