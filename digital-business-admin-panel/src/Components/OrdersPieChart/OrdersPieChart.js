import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const OrdersPieChart = () => {
  const option = useMemo(() => ({
    color: [
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#1158E2" },
        { offset: 1, color: "#42B5F2" },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#BC1FD7" },
        { offset: 1, color: "#7F1DD1" },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#E8A618" },
        { offset: 1, color: "#EB6B36" },
      ]),
      new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#D131BE" },
        { offset: 1, color: "#BF1575" },
      ]),
    ],
    series: [
      {
        name: "Orders",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 50,
          borderColor: "black",
          borderWidth: 5,
        },
        label: {
          show: true,
          position: "center",
          formatter: "{b}\n{c}",
          fontSize: 14,
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        data: [
          { value: 4633, name: "Search Engine" },
          { value: 6734, name: "Direct" },
          { value: 6433, name: "Email" },
          { value: 7846, name: "Union Ads" },
        ],
      },
    ],
  }), []);

  return (
    <ReactECharts style={{ height: 200, marginTop: "1rem" }} option={option} />
  );
};

export default OrdersPieChart;
