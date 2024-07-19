'use client'
import React,{useEffect, useState} from "react";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { selectcoinHistoricData, selectCoinInformation } from "@/store/slices/readDataSlice";
import { useSelector } from "react-redux";
import useCoinDataLoader from "../hooks/useCoinLoader";
import numberFormatter from "@/utils/numberFormatter";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function MarketExpandGraph(coinId:any){
    console.log("hi")
  const splineColor = ["#00C7F2", "#846ED4", "#136B51", "#1A2683", "#996B22"];
  const [xAxisCategories, setXAxisCategories] = useState([]);
  const [aprByMarket, setAPRByMarket] = useState(0);
const [pricevalues, setpricevalues] = useState([0])

  const coinMarketData = useSelector(selectcoinHistoricData);
  const { coinHistoricDataAvailable } = useCoinDataLoader( coinId);
  
  useEffect(() => {
    if (coinHistoricDataAvailable && coinMarketData?.coin?.day?.prices) {
      const priceData = coinMarketData.coin.day.prices.map((pair:any) => pair[1]);
      const xaxisCategories = coinMarketData.coin.day.prices.map((pair: any) => pair[0] );

      if (priceData.length > 0) {
        setpricevalues(priceData);
        setXAxisCategories(xaxisCategories)

      }
  
      // setpricevalues(priceDta);
      console.log(priceData,xAxisCategories);
    }
  }, [coinMarketData, coinHistoricDataAvailable]);
  

// console.log("price data",coinMarketData?.coin?.day?.prices? data?.coin?.day?.prices.map((pair:any) => pair[1]):[],data)
    const splineChartData = {
      series: [{
        name: "prices",
        data:pricevalues,
      }],
    
        
        options: {
          chart: {
            // offsetX: 50,
            toolbar: {
              show: false,
            },
          },
          tooltip: {
            enabled: true,
          },
          dataLabels: {
            position: "bottom",
            enabled: false,
            style: {
              colors: ["#fff"],
            },
            formatter: function (val: any) {
              return val ?val:""
              // return val;
              // return "$"+VAL.TO; // Display the data value as the label
            },
          },
          xaxis: {
            type: "datetime" as const,
            
            labels: {
              style: {
                colors: "#6E7681", // Set the color of the labels
                fontSize: "12px",
                fontWeight: "400",
              },
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              color: "grey",
            },
            categories: xAxisCategories,
          },
          yaxis: {
            labels: {
              formatter: function (value: any) {
                return value? numberFormatter(value):"-";
              },
              style: {
                colors: "#6E7681", // Set the color of the labels
                fontSize: "12px",
                fontWeight: "400",
              },
            },
            // min: minValue - 0.05 * minValue,
            // max: maxValue + 0.05 * maxValue,
          },
          legend: {
            fontSize: "12px",
            fontWeight: "400",
            labels: {
              colors: "#fff",
              // Set the color of the legend texts to white
            },
          },
          stroke: {
            curve: "smooth",
            color: splineColor,
            opacity: 1,
          },
          grid: {
            borderColor: "#2B2F35",
          },
          annotations: {
            xaxis: [
              {
                x: xAxisCategories[0],
                strokeDashArray: 0,
                borderColor: "#292D30",
                borderWidth: 1,
              },
              {
                x: xAxisCategories[xAxisCategories.length - 1], // End position for the box
                strokeDashArray: 0,
                borderColor: "#292D30",
                borderWidth: 1,
              },
            ],
          },
          // colors: ["#804D0F", "#3B48A8","#136B5","#1A2683","#996B22"],
          color: splineColor,
        },
      };
      const options: ApexOptions = {
        ...splineChartData?.options,
        stroke: {
          ...splineChartData?.options?.stroke,
          curve: "smooth",
        },
        colors: splineColor,
        // colors: ["#804D0F", "#3B48A8","#136B5","#1A2683","#996B22"],
      };
    
    return(
        <Box display="flex" flexDirection="column" gap="8px" width="100%">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          height="72px"
          border="1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
          color="#E6EDF3"
          // padding="24px 24px 16px"
          px="24px"
          fontSize="20px"
          fontStyle="normal"
          fontWeight="600"
          lineHeight="30px"
          borderRadius="6px"
        >
          <Box
            w="100%"
            display="flex"
            gap="2"
            justifyContent="space-between"
            my="auto"
          >
            <Box mt="auto">APR by market:</Box>
            <Box display="flex" gap="2">
              <Button
                color="#3E415C"
                size="sm"
                border={aprByMarket === 0 ? "none" : "1px solid #3E415C"}
                variant={aprByMarket === 0 ? "solid" : "outline"}
                onClick={() => {
                  setAPRByMarket(0);
                }}
              >
                1D
              </Button>
              <Button
                color="#3E415C"
                size="sm"
                border={aprByMarket === 1 ? "none" : "1px solid #3E415C"}
                variant={aprByMarket === 1 ? "solid" : "outline"}
                onClick={() => {
                  setAPRByMarket(1);
                }}
                isDisabled={false}
                _disabled={{
                  cursor: "pointer",
                  color: "#3E415C",
                  border: `${aprByMarket === 2 ? "none" : "1px solid #3E415C"}`,
                }}
              >
                1W
              </Button>
              <Button
                color="#3E415C"
                size="sm"
                border={aprByMarket === 2 ? "none" : "1px solid #3E415C"}
                variant={aprByMarket === 2 ? "solid" : "outline"}
                onClick={() => {
                  setAPRByMarket(2);
                }}
                isDisabled={false}
                _disabled={{
                  cursor: "pointer",
                  color: "#3E415C",
                  border: `${aprByMarket === 2 ? "none" : "1px solid #3E415C"}`,
                }}
              >
                1M
              </Button>
  
              <Button
                color="#3E415C"
                size="sm"
                border={aprByMarket === 3 ? "none" : "1px solid #3E415C"}
                variant={aprByMarket === 3 ? "solid" : "outline"}
                onClick={() => {
                  setAPRByMarket(3);
                }}
                isDisabled={true}
                _disabled={{
                  cursor: "pointer",
                  color: "#3E415C",
                  border: `${aprByMarket === 3 ? "none" : "1px solid #3E415C"}`,
                }}
              >
                ALL
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          border="1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
          borderRadius="6px"
          padding="16px 24px 40px"
        >

         
  
      {pricevalues.length>1 && xAxisCategories.length>1 ?    <ApexCharts
            options={options}
            series={splineChartData.series}
            type="line"
            height={"350"}
            width={"720"}
          />:<Spinner/>}
          {/* <MarketListTracker /> */}
        </Box>
      </Box>
    )
}