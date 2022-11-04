import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

const BalanceChart = () => {
  const option = {
    grid: {
      show: false,
      left: "-10%",
      width: "110%",
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
      offset: 3,
      type: "category",
      data: [
        "",
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
          320, 280, 430, 400, 450, 640, 470, 520, 500, 640, 530, 610, 560, 920,
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
          260, 240, 330, 290, 350, 500, 370, 450, 400, 580, 430, 500, 460, 820,
        ],

        type: "line",
        smooth: true,
        showSymbol: false,
        markLine: {
          silent: true,
        },
        lineStyle: {
          color: "#A0D293",
          width: 2,
        },
        areaStyle: {
          opacity: 0.1,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#A0D293",
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
          120, 100, 250, 240, 270, 360, 220, 230, 350, 330, 380, 350, 340, 270,
        ],
        type: "line",
        smooth: true,
        showSymbol: false,
        markLine: {
          silent: true,
        },
        lineStyle: {
          color: "#5AA645",
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
