import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const BalanceChart = () => {
  const option = {
    grid: {
      show: false,
      left: "0%",
      width: "100%",
      height: "70%",
    },
    xAxis: {
      axisLabel: {
        show: true,
      },
      //   showGrid: false,

      axisTick: {
        show: false,
      },
      type: "category",
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
        show: true,
        interval: 4,
        lineStyle: {
          color: "#F2F4F7",
        },
      },
      axisLine: {
        symbol: "arrow",
        show: false,
      },
    },
    series: [
      {
        data: [
          420, 550, 430, 620, 450, 740, 470, 750, 500, 870, 530, 810, 560, 920,
        ],
        type: "line",
        smooth: true,
        showSymbol: false,
        markLine: {
          silent: true,
        },
        lineStyle: {
          color: "#7BC068",
          width: 2,
        },
        areaStyle: {
          opacity: 0.1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#7BC068",
            },
            {
              offset: 1,
              color: "white",
            },
          ]),
        },
      },
      {
        data: [
          320, 450, 330, 720, 350, 640, 370, 650, 400, 770, 430, 710, 460, 820,
        ],
        type: "line",
        smooth: true,
        showSymbol: false,
        markLine: {
          silent: true,
        },
        lineStyle: {
          color: "#7BC068",
          width: 2,
        },
        areaStyle: {
          opacity: 0.1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#7BC068",
            },
            {
              offset: 1,
              color: "white",
            },
          ]),
        },
      },
      {
        data: [
          550, 300, 670, 330, 610, 360, 720, 220, 350, 330, 420, 250, 540, 270,
        ],
        type: "line",
        smooth: true,
        showSymbol: false,
        markLine: {
          silent: true,
        },
        lineStyle: {
          color: "#7BC068",
          width: 2,
        },
        areaStyle: {
          opacity: 0.1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#7BC068",
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
  return <ReactEcharts option={option} />;
};

export default BalanceChart;
