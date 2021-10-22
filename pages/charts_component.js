import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';


export default function ChartComponent(chartProps) {
  { console.log("chartProps", chartProps) }

  var data = chartProps
  let charts = []
  // { console.log("chartProps", chartProps[0].data) }

  // let y_axis1 = chartProps[0].data.y_axis
  for (const key in chartProps) {
    console.log(key);

    let labels = chartProps[key].data.labels ? chartProps[key].data.labels : null
    let chart_type = chartProps[key].chart_type
    let y_axis = chartProps[key].data.y_axis
    let x_axis = chartProps[key].data.x_axis



    if (chart_type == "bar") {
      const options = {
        title: {
          text: chartProps[key].chart_title,
          triggerEvent: true,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        xAxis: {
          type: 'category',
          data: x_axis
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: y_axis,
            type: chart_type,
            itemStyle: {
              color: '#a90000'
            }
          }
        ]
        
      };
      
      charts.push(<ReactECharts option={options} style={{ height: '300px', width: '500px', boxShadow: "5px 5px 15px gray ", borderRadius: "15px" }} />)

    } else if (chart_type == "pie") {
      const options = {
        title: {
          text: chartProps[key].chart_title,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            type: chartProps[key].chart_type,
            radius: '50%',
            data: [
              { value: y_axis[0], name: labels[0] },
              { value: y_axis[1], name: labels[1] },
              { value: y_axis[2], name: labels[2] },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      charts.push(<ReactECharts option={options} style={{ height: '300px', width: '500px', boxShadow: "5px 5px 15px gray ", borderRadius: "15px" }} />)

    }

    else if (chart_type == "line") {
      const options = {
        title: {
          text: chartProps[key].chart_title,
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: x_axis,
        },

        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: y_axis,
            type: chart_type,
            smooth: true
          }
        ]
      };
      charts.push(<ReactECharts option={options} style={{ height: '300px', width: '500px', boxShadow: "5px 5px 15px gray ", borderRadius: "15px" }} />)

    }


  }


  return (
    <div className="md:grid md:grid-cols-3 grid-cols-1 gap-4 w-screen p-5">
      {charts}
    </div>
  )
}


