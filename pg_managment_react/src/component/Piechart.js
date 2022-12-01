

import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  title: "My Daily Activities",
  is3D: true,
};

export function Appchart({data}) {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}