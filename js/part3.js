function getPie(){
    var dom = document.getElementById("downright");
    var myChart = echarts.init(dom);
    var app = {};
    
    var option;
    
    
    
    option = {
      title: {
        text: '1950-2010致命事故原因比例',
        left: 'center',
        textStyle:{
          color:'white'
        }
      },
      backgroundColor: '#031d33',
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        top: 'center',
        right: 'right',
        icon: 'circle',
        itemWidth: 10, 
        itemHeight: 10,
        textStyle: {
          fontSize: '14px',
            color: '#a8d5ff',
        }
      },
      //color: ['#ff7824', '#ffde32', '#3bffb7', '#00eaff', '#0084ff'],
      series: [
        {
          name: '占比',
          type: 'pie',
          radius: [5, 100],
          center: ['50%', '50%'],
          roseType: 'area',
          //roseType: 'radius',
          itemStyle: {
            // borderRadius: 0
            //color: '#c23531',
            shadowBlur: 40,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            // borderWidth: 1,
            // borderJoin: round
          },
          label: {
              //color: '#a8d5ff',
              fontSize: '14px',
              //formatter:  '{b}--  {c} --{{d}%}',
              //formatter: '{dark|{b}}  {color|{c}} {color|({d}%)}',
              formatter: function(data){
                console.log(data) 
                return '{color'+data.dataIndex+'|'+data.value+'%}'
              },
              rich: {
                color0: {
                  color: '#ff7824',
                },
                color1: {
                  color: '#ffde32',
                },
                color3: {
                  color: '#00eaff',
                },
                color2: {
                  color: '#3bffb7',
                },
                color4: {
                  color: '#0084ff',
                },
              }
          },
          labelLine: {
            lineStyle: {
              //color: 'rgba(255, 255, 255, 0.3)'
            },
            // smooth: 0.2,
            // length: 10,
            // length2: 20
          },
          color: ['#ff7824', '#ffde32', '#3bffb7', '#00eaff', '#0084ff'],
          data: [
            { value: 49, name: '飞行员失误' },
            { value: 23, name: '机械故障' },
            { value: 10, name: '恶劣天气' },
            { value: 8, name: '蓄意破坏' },
            { value: 10, name: '其他' }
          ]
        }
      ]
    };
    
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}

function getCategory(){
var dom = document.getElementById("downcenter");
var myChart = echarts.init(dom);
var app = {};

var option;



option = {
  title:{
      text:'事故相关数据统计',
      left:'center',
      textStyle:{
        color:'white'
      }
},
  backgroundColor: '#031d33',
  legend: {
    top: '20',
    x: 'center',
    textStyle: {
      fontSize: 16,
      color: 'rgba(101, 213, 255, 1)',
    },
    icon:
      'path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z',
    itemWidth: 8, // 设置宽度
    itemHeight: 8, // 设置高度、
    itemGap: 12, // 设置间距
  },
  tooltip: {
    show: true,
    trigger: 'axis', //axis , item
    backgroundColor: 'RGBA(0, 49, 85, 1)',
    borderColor: 'rgba(0, 151, 251, 1)',
    borderWidth: 1,
    borderRadius: 0,
    textStyle: {
      color: '#BCE9FC',
      fontSize: 16,
      align: 'left',
    },
  },
  grid: {
    right: '5%',
    top: '10%',
    left: '5%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: {
    name: '飞行阶段',
    nameTextStyle: {
      color: '#65d5ff',
    },
    type: 'category',
    boundaryGap: true,
    data: ['准备起飞', '起飞', '爬升', '收襟翼', '飞行','下降','下降初期', '下降后期', '着陆'],
    axisLabel: {
      //坐标轴刻度标签的相关设置。
      interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
      //	margin:15,
      textStyle: {
        color: '#65D5FF',
        fontStyle: 'normal',
        fontSize: 16,
      },
    },
    axisTick: {
      //坐标轴刻度相关设置。
      show: true,
    },
    axisLine: {
      //坐标轴轴线相关设置
      lineStyle: {
        color: 'rgba(77, 128, 254, 0.2)',
      },
    },
    splitLine: {
      //坐标轴在 grid 区域中的分隔线。
      show: true,
      lineStyle: {
        color: 'rgba(77, 128, 254, 0.2)',
      },
    },
  },
  dataZoom: [
    {
      type: 'slider',
      show: true,
      bottom: '20px',
      borderColor: '#07417a',
      backgroundColor: 'transparent',
      dataBackground: {
        lineStyle: {
          color: 'transparent',
          shadowOffsetY: 0,
        },
        areaStyle: {
          color: 'transparent',
          shadowOffsetY: 0,
        },
      },
      // 拖拽手柄样式 svg 路径
      handleIcon:
        'M512 512m-208 0a6.5 6.5 0 1 0 416 0 6.5 6.5 0 1 0-416 0Z M512 192C335.264 192 192 335.264 192 512c0 176.736 143.264 320 320 320s320-143.264 320-320C832 335.264 688.736 192 512 192zM512 800c-159.072 0-288-128.928-288-288 0-159.072 128.928-288 288-288s288 128.928 288 288C800 671.072 671.072 800 512 800z',
      handleColor: '#aab6c6',
      height: 6,
      handleSize: 12,
      showDataShadow: false,
      filterMode: 'filter',
      textStyle: {
        color: '#ccc',
      },
      start: 0,
      end: 100,
    },
  ],
  yAxis: [
    {
      name: '占比',
      nameTextStyle: {
        color: '#65d5ff',
      },
      type: 'value',
      splitNumber: 3,
      axisLabel: {
        textStyle: {
          color: '#65D5FF',
          fontStyle: 'normal',
          fontSize: 16,
        },formatter: function(value) {
          return value * 100 + '%'
        }
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(77, 128, 254, 0.2)',
        },
      },
    },
    {
      name: '',
      nameTextStyle: {
        color: '#65d5ff'
      },
      min: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: '#233653'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#233653'
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#78bdf5'
        },
        formatter: function(value) {
          return value * 100 + '%'
        }
      },
      axisTick: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '致命事故占比',
      type: 'pictorialBar',
      barWidth: '50%',
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(255, 64, 0, 0.8)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 34, 66, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, //渐变颜色
        },
      },
      symbol:
        'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

      data: [0.12, 0.12, 0.08,0.10, 0.08, 0.04, 0.10, 0.11, 0.25],
    },
    {
      name: '死亡人数占比',
      type: 'pictorialBar',
      barWidth: '50%',
      label: {
        normal: {
          show: false,
        },
      },
      itemStyle: {
        normal: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(48, 236, 166,0.8)', // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'rgba(0, 34, 66, 0.2)', // 100% 处的颜色
              },
            ],
            globalCoord: false, // 缺省为 false
          }, //渐变颜色
        },
      },
      symbol:
        'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

      data: [0, 0.16, 0.14, 0.13, 0.16, 0.04, 0.12, 0.13, 0.12],
    },

     {
      name: '该阶段占一趟飞行平均时间比例',
      type: 'line',
      data: [0,0.01,0.01,0.14,0.57,0.11,0.12,0.03,0.01],
      smooth: true,
      symbol: 'none',
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(255, 227, 168, 0.3)'
          }, {
            offset: 0.5,
            color: 'rgba(255, 227, 168, 1)'
          }, {
            offset: 1,
            color: 'rgba(255, 227, 168, 0.3)'
          }]),
          shadowColor: 'rgba(255, 120, 0,1)',
          shadowBlur: 10
        }
      },
      yAxisIndex: 1
    },
   
  ],
};


if (option && typeof option === 'object') {
    myChart.setOption(option);
}
}


const timeData = [
  '2000年1月30日',
'2000年4月19日',
'2000年7月25日',
'2000年8月23日',
'2001年7月4日',
'2001年9月11日',
'2001年9月11日',
'2001年10月8日',
'2001年11月12日',
'2002年2月12日',
'2002年4月15日',
'2002年5月4日',
'2002年5月7日',
'2002年5月25日',
'2003年3月6日',
'2003年7月8日',
'2003年12月25日,',
'2004年3月1日',
'2005年2月3日',
'2005年8月14日',
'2005年8月16日',
'2005年9月5日',
'2005年10月22日',
'2006年5月3日',
'2006年7月9日',
'2006年8月22日',
'2006年9月29日',
'2007年1月1日',
'2007年5月5日',
'2007年7月17日',
'2008年8月20日',
'2009年6月1日',
'2009年6月30日',
'2009年7月15日',
'2010年5月12日',
'2010年5月22日',
'2010年7月28日',
'2012年4月20日',
'2012年6月3日',
'2014年3月8日',
'2014年7月17日',
'2014年7月24日',
'2014年12月28日',
'2015年3月24日',
'2018年5月18日',
'2018年10月29日',
'2019年3月10日',
'2020年1月8日',
'2022年3月22日'

];
const typeData = [
  'AirbusA310-304',
'Boeing B-737-2H4',
'Aerospatiale BAe Concorde 101',
'Airbus A320-212',
'Tupolev TU-154M',
'Boeing 767 / Boeing 767',
'Boeing B-757-223',
'MD-87 / Cessna 525A Citation II',
'Airbus A-300-605R',
'Tupolev TU-154',
'Boeing B-767-200ER',
'BAC One-Eleven 525FT',
'McDonnell Douglas MD-82',
'Boeing B-747-209B',
'Boeing B-737-2T4',
'Boeing 737-2J8C',
'Boeing B-727-223',
'Boeing B-737-3Q8',
'Boeing B-737-200',
'Boeing 737-31S',
'McDonnell Douglas MD-82',
'Boeing 737-230',
'Boeing B-737-2L9',
'Airbus A320-211',
'Airbus A-310-324ET',
'Tupolev Tu-154M',
'Boeing B-737-8EH',
'Boeing B-737-4Q8',
'Boeing B-737-8AL',
'Airbus A-320-233',
'McDonnell Douglas MD-82',
'Airbus A330-203',
'Airbus A310-324',
'Tupolev 154M',
'Airbus A330-202',
'Boeing 737-8HG',
'Airbus A321-231',
'Boeing 737-236',
'McDonnell Douglas MD-83',
'Boeing 777',
'Boeing 777',
'MD-83',
'Airbus A-320-216',
'Airbus A320-211',
'Boeing 737-201',
'Boeing 737-MAX 8',
'Boeing 737 Max 8',
'Boeing 737-8KV WL',
'Boeing 737-89P'

];
const numberData = [
  169,
  131,
  109,
  143,
  145,
  2996,
  189,
  118,
  265,
  117,
  128,
  152,
  112,
  225,
  102,
  117,
  140,
  148,
  104,
  121,
  160,
  143,
  117,
  113,
  125,
  160,
  154,
  102,
  114,
  199,
  154,
  228,
  152,
  168,
  103,
  158,
  152,
  127,
  159,
  239,
  298,
  116,
  162,
  150,
  112,
  189,
  157,
  185,
  132
];
const lnglatData = [
  '5.228400641011372,-3.9348220825195312',
'7.156251367517837,125.70178985595703',
'48.98556827236536,2.471752166748047',
'26.299416981505562,50.64765930175781',
'52.125057654851204,104.62005615234375',
'40.711418533210676,-74.01317596435547',
'38.87082126394422,-77.05827713012695',
'45.45194255658851,9.27743911743164',
'40.5771133, -73.8503981',
'33.69635141303649,47.96699523925781',
'35.23145832570649,128.9278221130371',
'12.030065702756996,8.488397598266602',
'38.95353532141205,121.79718017578125',
'24.00130809253819,119.6575927734375',
'22.836313097991496,5.461235046386719',
'19.441018149702835,37.28038787841797',
'6.350103778950104,2.3737335205078125',
'27.87580396185018,34.35218811035156',
'34.46240957128561,69.49951171875',
'38.230494374755246,23.96993637084961',
'9.679276081054397,-72.61962890625',
'3.546745832564944,98.66083145141602',
'6.814796100862173,3.2904052734375',
'43.442948806351396,39.8748779296875',
'52.27469631885414,104.36578273773193',
'48.30557745097361,37.82970428466797',
'-10.533720315515524,-53.23150634765625',
'-3.6477408226992294,118.28155517578125',
'3.9560509228254475,9.749164581298828',
'-23.620934478131865,-46.663055419921875',
'40.5302408293016,-3.5688400268554688',
'2.4162756547063857,-29.3994140625',
'-11.230939362695722,43.10211181640625',
'36.13898378070337,49.99671936035156',
'32.66221132308068,13.119220733642578',
'12.94649130730171,74.87380027770996',
'33.74503938275005,73.04346084594727',
'33.602824601952,73.14070701599121',
'6.672578436886291,3.3101892471313477',
'-31.5036293, 89.6484375',
'48.1398597, 38.638916',
'15.1251589, -1.0025024',
'-4.3017584, 111.2291117',
'44.333869, 6.4505117',
'22.9856856, -82.3994314',
'-5.820423, 107.1041861',
'8.926618, 39.1540153',
'35.4232857, 51.1683785',
'23.3363959, 111.1092252'

]


function getMap(){
    var flightChart = echarts.init(document.getElementById('map'))

    var option = {
        title:{
          text:'20世纪以来民航重大空难地图',
          left:"center",
          textStyle:{
            color:'white'
          }
        },

        geo: {
            map: 'world',
            roam: true,
            scaleLimit:{                       //所属组件的z分层，z值小的图形会被z值大的图形覆盖
              min:0.8,                          //最小的缩放值
              max:15,}
        },

        series: {
            type: "scatter",
            name: "空难地图demo",
            coordinateSystem: "geo",
            data: [
                {name:"肯尼亚航空431号", value: [-3.9348220825195312,5.228400641011372,1] },
                {name:"菲鹰航空541号", value: [125.70178985595703,7.156251367517837,2] },
                {name:"法国航空4590号", value: [2.471752166748047,48.98556827236536,3] },
                {name:"海湾航空72号", value: [50.64765930175781,26.299416981505562,4] },
                {name:"符拉迪沃斯托克航空352号", value: [104.62005615234375,52.125057654851204,5] },
                {name:"美国航空11号/联合航空175号", value: [-74.01317596435547,40.711418533210676,6] },
                {name:"美国航空77号", value: [-77.05827713012695,38.87082126394422,7] },
                {name:"北欧航空686号/私人飞机", value: [9.27743911743164,45.45194255658851,8] },
                {name:"美国航空587号", value: [-73.8503981,40.5771133,9] },
                {name:"伊朗空旅航空956号", value: [47.96699523925781,33.69635141303649,10] },
                {name:"中国国际航空129号", value: [128.9278221130371,35.23145832570649,11] },
                {name:"行政航空4226号", value: [8.488397598266602,12.030065702756996,12] },
                {name:"中国北方航空6136号", value: [121.79718017578125,38.95353532141205,13] },
                {name:"中华航空611号", value: [119.6575927734375,24.00130809253819,14] },
                {name:"阿尔及利亚航空6289号", value: [5.461235046386719,22.836313097991496,15] },
                {name:"苏丹航空139号", value: [37.28038787841797,19.441018149702835,16] },
                {name:"几内亚联合航空141号", value: [2.3737335205078125,6.350103778950104,17] },
                {name:"闪光航空604号", value: [34.35218811035156,27.87580396185018,18] },
                {name:"卡姆航空904号", value: [69.49951171875,34.46240957128561,19] },
                {name:"太阳神航空522号", value: [23.96993637084961,38.230494374755246,20] },
                {name:"西加勒比海航空708号", value: [-72.61962890625,9.679276081054397,21] },
                {name:"曼达拉航空091号", value: [98.66083145141602,3.546745832564944,22] },
                {name:"贝尔韦尤航空210号", value: [3.2904052734375,6.814796100862173,23] },
                {name:"亚美尼亚航空967号", value: [39.8748779296875,43.442948806351396,24] },
                {name:"西伯利亚航空778号", value: [104.36578273773193,52.27469631885414,25] },
                {name:"普尔科沃航空612号", value: [37.82970428466797,48.30557745097361,26] },
                {name:"高尔航空1907号", value: [-10.533720315515524,-53.23150634765625,27] },
                {name:"亚当航空574号", value: [118.28155517578125,-3.6477408226992294,28] },
                {name:"肯尼亚航空507号", value: [9.749164581298828,3.9560509228254475,29] },
                {name:"巴西天马航空3054号", value: [-23.620934478131865,-46.663055419921875,30] },
                {name:"西班牙航空5022号", value: [-3.5688400268554688,40.5302408293016,31] },
                {name:"法国航空447号", value: [-29.3994140625,2.4162756547063857,32] },
                {name:"也门航空626号", value: [43.10211181640625,-11.230939362695722,33] },
                {name:"里海航空7908号", value: [49.99671936035156,36.13898378070337,34] },
                {name:"泛非航空771号", value: [13.119220733642578,32.66221132308068,35] },
                {name:"印度航空快运812号", value: [74.87380027770996,12.94649130730171,36] },
                {name:"蓝色航空202号", value: [73.04346084594727,33.74503938275005,37] },
                {name:"博雅航空213号", value: [73.140707015991215,33.602824601952,38] },
                {name:"达纳航空0992号", value: [3.3101892471313477,6.672578436886291,39] },
                {name:"马来西亚航空370号", value: [89.6484375,-31.5036293,40] },
                {name:"马来西亚航空17号", value: [38.6389165,48.1398597,41] },
                {name:"阿尔及利亚航空5017号", value: [-1.0025024,15.1251589,42] },
                {name:"印度尼西亚亚航8501号", value: [111.2291117,-4.3017584,43] },
                {name:"德国之翼航空9525号", value: [6.4505117,44.333869,44] },
                {name:"古巴航空972号", value: [-82.3994314,22.9856856,45] },
                {name:"狮子航空610号", value: [107.1041861,-5.820423,46] },
                {name:"埃塞俄比亚航空302号", value: [39.1540153,8.926618,47] },
                {name:"乌克兰国际航空752号", value: [51.1683785,35.4232857,48] },
                {name:"中国东方航空5735号", value: [111.1092252,23.3363959,49] }
            ]
        },

         tooltip: {
             show: true,
             trigger: "item",
             formatter: function(params){
                 let valu = params.data.value
                 return(
                    params.name
                    
                 )
             }
         }

    }


    flightChart.setOption(option)
    window.onload=function(){
    flightChart.on('click', function(params){

      var planepic = document.getElementById('planepic1');
      var time = document.getElementById('time');
      var Id = document.getElementById('Id');
      var type = document.getElementById('type');
      var number = document.getElementById('number');
      var lnglat = document.getElementById('lng-lat')

      console.log(params.data.value)
      Id.innerHTML = params.name;
      time.innerHTML = timeData[params.data.value[2]-1];
      type.innerHTML = typeData[params.data.value[2]-1];
      number.innerHTML = numberData[params.data.value[2]-1];
      lnglat.innerHTML = lnglatData[params.data.value[2]-1];
      planepic.setAttribute( "src","../../img/part3/"+params.data.value[2]+".png");

    })};
}

function getWordCloud(){
  var myChart = echarts3.init(document.getElementById('wordCloudItem'));
  var keywords = [
    {"name":"飞行员失误","value":533},
    {"name":"机械故障","value":253},
    {"name":"恶劣天气","value":107},
    {"name":"蓄意破坏","value":81},
    {"name":"地勤人员失误","value":11},
    {"name":"ATC错误","value":11},
    {"name":"货物装载不当","value":5},
    {"name":"鸟击","value":8},
    {"name":"燃油问题","value":3},
    {"name":"飞行员失能","value":14},
    {"name":"跑道障碍","value":7},
    {"name":"飞机空中碰撞","value":3},
    {"name":"火灾","value":6}
  ]

  var option = {
    title:{
      text:"飞机事故原因统计"
    },
    backgroundColor:'#031d33',
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

function getCategory2(){
  var dom = document.getElementById("downleft");
  var myChart = echarts.init(dom);
  var app = {};
  
  var option;
  
  
  
  option = {
    backgroundColor:'#031d33',

    title:{
      text:'2020年至今事故飞机制造商统计',
      left:'center',
      textStyle:{
        color:'white'
      }
},

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            backgroundColor: 'rgba(9, 24, 48, 0.5)',
            borderColor: 'rgba(75, 253, 238, 0.4)',
            textStyle: {
                color: '#CFE3FC',
            },
            borderWidth: 1,
        },
        grid: {
            top: '15%',
            right: '5%',
            left: "5%",
            bottom: '12%'
        },
        xAxis: [{
            name: "公司",
            type: 'category',
            data: ["塞斯纳","比奇","安东诺夫","波音","空客"],
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                margin: 5,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 12
                },
            },
            axisTick: {
                show: false
            }
        }],
        yAxis: [{
            name: "单位：起",
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }],
        series: [{
            type: 'bar',
            data: [59,44,37,30,19],
            barWidth: '25%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 10,
                    formatter: '{c}',
                    position: 'top',
                    textStyle: {
                        color: '#00D6F9',
                        fontSize: 12
                    }
  
                }
            }
        }]
    };
  
  
  if (option && typeof option === 'object') {
      myChart.setOption(option);
  }
}

