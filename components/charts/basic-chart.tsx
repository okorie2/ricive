import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
interface Props {
  data: number[];
  color: string;
}
const BasicChart = ({ data, color }: Props) => {
  const option = {
    grid: {
      show: false,
      left: "0%",
      top: 0,
      width: "100%",
      height: 100,
      bottom: 0,
    },
    xAxis: {
      axisLabel: {
        show: false,
      },
      //   showGrid: false,

      axisTick: {
        show: false,
      },
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr"],
      axisLine: {
        // symbol: "arrow"
        show: false,
      },
    },
    yAxis: {
      axisLabel: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        symbol: "arrow",
        show: false,
      },
    },
    series: [
      {
        data: data,
        type: "line",
        smooth: true,
        showSymbol: false,
        markLine: {
          silent: true,
        },
        lineStyle: {
          color: color,
          width: 2,
        },
        areaStyle: {
          opacity: 0.1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: color,
            },
            {
              offset: 1,
              color: "white",
            },
          ]),
        },
      },
    ],
  };
  return (
    <ReactEcharts option={option} style={{ height: "100%", width: "100%" }} />
  );
};

export default BasicChart;
