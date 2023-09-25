import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const OrdersPieChart = ({details}) => {
  const chartHeadingStyle = {
  background: 'linear-gradient(to right, #30CFD0 0%, #8e49e2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  marginBottom: '1rem',
};
const pieOption = {
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0,
  },
  series: [
    {
      name: 'Value',
      type: 'pie',
      radius: ['45%', '80%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        formatter: `${((details["expectedDischarge"]/10000)*100).toFixed(2)}%`,
        position: 'center',
        textStyle: {
          color: 'white',
          fontSize: 15,
          fontWeight: 'normal',
        },
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: ((details["expectedDischarge"]/10000)*100).toFixed(2),
          name: 'Expected Discharge',
          itemStyle: {
            color: 'rgb(8, 144, 255)',
          },
        },
        {
          value: (100 - (details["expectedDischarge"]/10000)*100).toFixed(2),
          name: '',
          itemStyle: {
            color: 'rgba(8, 144, 255,0.05)',
          },
        },
      ],
    },
  ],
};




  const pieOption2 = {
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderWidth: 0,
  },
  series: [
    {
      name: 'Value',
      type: 'pie',
      radius: ['45%', '80%'],
      avoidLabelOverlap: false,
      label: {
        show: true,
        formatter: `${(details["qualityIndex"] * 100).toFixed(2)}%`,
        position: 'center',
        textStyle: { // Add textStyle here
          color: 'white', // Change text color to orange
          fontSize: 15,
          fontWeight: 'normal',
        },
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        {
          value: (details["qualityIndex"] * 100).toFixed(2),
          name: 'Expected Discharge',
          itemStyle: {
            color: 'rgb(8, 144, 255)', // Set the color to sky blue
          },
        },
        {
          value: 100 - (details["qualityIndex"] * 100).toFixed(2),
          name: '',
          itemStyle: {
            color: 'rgba(8, 144, 255,0.05)', // Set the color to transparent
          },
        },
      ]
    }
  ]
};





const barOption = {
  color: [
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [
      {
        offset: 0,
        color: '#007FFF',
      },
      {
        offset: 1,
        color: '#30CFD0',
      },
    ]),
  ],
  xAxis: {
    type: 'category',
    data: ['Depth'],
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false,
    },
  },
  grid: {
    left: '10%', // Adjust the left margin
    right: '10%', // Adjust the right margin
    top: '10%', // Adjust the top margin
    bottom: '10%', // Adjust the bottom margin
    containLabel: true, // Ensure labels fit within the chart area
  },
  series: [
    {
      name: 'Min. Depth (FT)',
      type: 'bar',
      data: [details["minDepthEncounter"]],
      barWidth: 80,
      emphasis: {
        scale: false,
        label: {
          show: true,
          position: 'top',
          textStyle: {
            color: 'white',
            fontWeight: 'normal',
          },
          formatter: function(params) {
            return params.value;
          },
        },
      },
      itemStyle: {
        barBorderRadius: [10, 10, 0, 0], // Add border radius to the top corners
      },
    },
  ],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: '',
    },
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 0,
  },
  dataZoom: [
    {
      type: 'inside',
    },
  ],
};



  return (
    <div>
      <h2 style={chartHeadingStyle}>Water discharge (in CFS):</h2>
      <ReactECharts style={{ height: 200, marginTop: '1rem' }} option={pieOption} />
    <h2 style={chartHeadingStyle}>Water quality index: </h2>
      <ReactECharts style={{ height: 200, marginTop: '1rem' }} option={pieOption2} />
      <h2 style={chartHeadingStyle}>Min. Depth Encounter of Water (in FT):</h2>
      <ReactECharts style={{ height: 400, marginTop: '1rem' }} option={barOption} />
    </div>
  );
};

export default OrdersPieChart;
