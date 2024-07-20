import React from "react";
import Chart from "react-apexcharts";

export default function PiChart({arg1,arg2}:{arg1:number;arg2:number;}) {
  const data = [
    {
      name: "Circulating Supply",
      quantity: arg1?arg1:0
    },
    {
      name: "Locked",
      quantity: arg2?arg2:0
    }
  ];

  let names:any = [];
  let quantities:any = [];
  data.forEach(function (n) {
    names.push(n.name);
    quantities.push(n.quantity);
  });

  return React.createElement(Chart, {
    type: "pie",
    series: quantities,
    labels: {
      show: false,
      name: {
        show: true
      }
    },
    options: {
      labels: names,
      legend: {
        show: true,
        position: "bottom"
      },
      colors: ["#00AB55", "#2D99FF"]
    }
  });
}
