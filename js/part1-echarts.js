function showEchart1(){
  echarts.init(document.getElementById('table')).dispose();
    var dom = document.getElementById("table");
        // dom.removeChild();
        var myChart = echarts.init(dom);
        var app = {};
        
        var option;
        
        
        
        option = {
          backgroundColor:'#1b1b1b',
          title: {
            text: '飞机飞行过程'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {},
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: { readOnly: false },
              magicType: { type: ['line', 'bar'] },
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['05:16:53','05:17:04','05:17:19','05:17:34','05:17:44','05:17:58','05:18:08','05:18:20','05:18:36','05:18:41','05:18:52','05:18:57','05:19:03','05:19:08','05:19:14','05:19:36','05:20:02','05:20:37','05:21:10','05:21:22','05:22:43','05:23:06','05:23:16','05:24:11','05:24:34','05:27:05','06:08:53','06:09:57','06:17:12','06:19:09','06:21:40','06:22:16','06:22:31','06:22:31','06:22:35']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} '
            }
          },
          series: [
            {
              name: '飞行高度',
              type: 'line',
              data: ['8400','8600','8875','9100','9300','9825','10475','11100','11875','12125','12350','12550','12775','13050','13325','13450','14100','15200','16950','18250','19950','20850','21700','22000','23875','24525','28475','29100','29100','29100','9075','6525','4375','3225'],
              markPoint: {
                                symbol: 'circle',
                                symbolSize: 10,
                                data: [{
                                    name: '标记点',
                                    yAxis: '9075',
                                    xAxis: '06:21:40',
                                    value: '', 
                                    _value: '1200, 180',
                                    label: {
                                        show: true,
                                        position: 'top',
                                        formatter: '雷达最后一次记录飞机信息'
                                    }
                                }]
                            },
              markLine: {
                data: [
                  [
                    {
                      symbol: 'arrow',
                      xAxis: '06:17:12',
                      yAxis: 'max'
                    },
                    {
                      symbol: 'circle',
                      label: {
                        position: 'start',
                        formatter: '到达巡航高度'
                      },
                      type: 'max',          name: '最高点'
                    }
                  ]
                ]
              }
            }
          ]
        };


            myChart.setOption(option);

}

function showEchart2(){
  echarts.init(document.getElementById('table')).dispose();
  var myChart = echarts3.init(document.getElementById('table'));
  var keywords = [
    {"name":"梧州消防救援支队","value":26},
    {"name":"武警广西总队梧州支队","value":23},
    {"name":"桂林消防救援支队","value":13},
    {"name":"柳州消防救援支队","value":13},
    {"name":"北海消防救援支队","value":10},
    {"name":"贺州消防救援支队","value":10},
    {"name":"云南省消防总队","value":26},
    {"name":"森林消防局","value":20},
    {"name":"广东省消防救援总队","value":15},
    {"name":"洛阳神鹰救援队","value":8},
    {"name":"广东阳春救援队","value":7},
    {"name":"梧州市爱国拥军促进会","value":5},
    {"name":"村民自发组织","value":3},
    {"name":"内蒙古大兴安岭航空护林局","value":13},
    {"name":"国家应急处置指挥部","value":30}
  ]

  var option = {
    title:{
      show:true,
      text:"救援力量一览",
    },
    backgroundColor:'#1b1b1b',
    series:[ {
      type:"wordCloud",
      sizeRange: [15, 80],
      rotationRange: [0, 0],
      shape:'diamond',
      width: '100%',
      height: '100%',
      textStyle: {
        normal: {
            color: function () {
                return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                ].join(',') + ')';
            },
            fontFamily: 'sans-serif',
            fontWeight: 'normal'
        },
        emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
        }
    },
      data: keywords
    }]
  }

  myChart.setOption(option);
}

function showEchart3(){
  echarts.init(document.getElementById('table')).dispose();
  var dom = document.getElementById("table");
var myChart = echarts.init(dom);
var app = {};

var option;




let list = [
    {
        policy_country: '一架东航波音737-800客机',
        policy_time: '2022年3月21日14时38分',
        policy_title: '在广西梧州坠毁',
    },
    {
        policy_country: '民航局发文',
        policy_time: '2022年3月21日16时',
        policy_title: '已确认该飞机坠毁',
    },
    {
        policy_country: '发现失事飞机其中一个\n黑匣子',
        policy_time: '2022年3月23日',
        policy_title: '',
    },
    {
        policy_country: '举行第六场新闻发布会，',
        policy_time: '2022年3月26日晚',
        policy_title: '宣布机组及乘客全体遇难',
    },
    {
        policy_country: '失事飞机第二个黑匣子\n已找到 ',
        policy_time: '2022年3月27日9时许',
        policy_title: '',
    },
    {
      policy_country: '哀悼活动开始 ',
      policy_time: '2022年3月27日14时许',
      policy_title: '应急处置指挥部全体人员、\n事故现场搜救人员等面向\n遇难飞机方向默哀',
  },
    {
        policy_country: '飞行事故指挥部宣布',
        policy_time: '2022年3月31日',
        policy_title: '主要搜救任务已基本完成',
    },
    {
        policy_country: '发布东航MU5735航空器',
        policy_time: '2022年4月20日',
        policy_title: '飞行事故调查初步报告',
    },
    
];
let seriesList = [];
var yarr = [];
var linearr = [];
var linev = { value: -0, symbol: 'none' };

list.map((item, index) => {
    seriesList.push({
        date: item.policy_time,
        title: item.policy_title,
        country: item.policy_country,
        value: 0,
        symbol: 'pin',
        symbolSize: 10,
        symbolOffset: [0, index % 2 === 0 ? 0 : 5],
        label: {
            show: true,
            lineHeight: 20,
            align: 'left',
            width: 80,
            position: index % 2 === 0 ? [-30, -80] : [-30, 40],
            ellipsis: '...',
            formatter: function (params) {
                return `{bolder|${params.name}}\n${params.data.country}\n${params.data.title}`;
            },
            rich: {
                bolder: {
                    fontWeight: 700,
                    color: '#14237d',
                },
            },
        },
    });
});
seriesList.map((item, index) => {
    linearr.push({
        value: -0,
    });
    yarr.push(`${item.date}`);
});
option = {
    backgroundColor:'#1b1b1b',
    grid: {
        top: '50%',
        left: 10,
        right: 5,
        bottom: '50%',
    },
    legend: {
        bottom: 0,
        itemWidth: 5,
        itemHeight: 10,
    },
    yAxis: {
       show: false,
       min: 0,
       max: 0,
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                width: 5,
                color: '#0d657d',
            },
        },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
        data: ['', ...yarr, ''],
    },
    color: ['#0d657d'],
    series: [
        {
            type: 'line',
            itemStyle: {
                color:'#14237d',
                borderColor:'14237d',
                borderWidth: 2,
            },
            hoverAnimation: false,
            legendHoverLink: false,
            data: [linev, ...seriesList, linev],
            lineStyle: {
                color: '#0d657d',
            },
        },
    ],
};


if (option && typeof option === 'object') {
    myChart.setOption(option);
}

}

function showEchart4(){
  echarts.init(document.getElementById('table')).dispose();
  document.getElementById('table').style.backgroundColor = "rgba(0,0,0,0)";
}