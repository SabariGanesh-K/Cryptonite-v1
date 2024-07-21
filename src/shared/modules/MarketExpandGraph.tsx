'use client'
import React,{useEffect, useState} from "react";
import { Box, Button, HStack, Skeleton, Spinner, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { selectcoinHistoricData, selectCoinInformation } from "@/store/slices/readDataSlice";
import { useSelector } from "react-redux";
import useCoinDataLoader from "../hooks/useCoinLoader";
import numberFormatter from "@/utils/numberFormatter";
import PiChart from "../components/piChart";
import Image from "next/image";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function MarketExpandGraph(coinId:any){
    console.log("hi",coinId)
  const splineColor = ["#00C7F2", "#846ED4", "#136B51", "#1A2683", "#996B22"];
  const [xAxisCategories, setXAxisCategories] = useState([]);
  const [aprByMarket, setAPRByMarket] = useState(0);
const [pricevalues, setpricevalues] = useState([0])

  const coinMarketData = useSelector(selectcoinHistoricData);
  const { coinHistoricDataAvailable } = useCoinDataLoader( coinId);
  const coininformation = useSelector(selectCoinInformation);
  console.log(coinMarketData)
  console.log(coininformation[coinId.coinId]?.market_data?.total_supply)
  useEffect(() => {
    if (coinMarketData[coinId?.coinId]?.prices) {
      const priceData = coinMarketData[coinId?.coinId]?.prices.map((pair:any) => pair[1]);
      const xaxisCategories = coinMarketData[coinId?.coinId]?.prices.map((pair: any) => pair[0] );

      if (priceData.length > 0) {
        setpricevalues(priceData);
        setXAxisCategories(xaxisCategories)

      }
  
      // setpricevalues(priceDta);
      console.log(priceData,xAxisCategories);
    }
  }, [coinMarketData,coinId]);
  

// console.log("price data",coinMarketData[coinId?.coinId]?.prices.map((pair:any) => pair[1]):[0])
console.log(coinMarketData[coinId?.coinId]?.prices)
    const splineChartData = {
      series: [{
        name: "prices",
        data:coinMarketData[coinId?.coinId]?.prices ? coinMarketData[coinId?.coinId]?.prices.map((pair:any) => pair[1]):[0],
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
            categories:coinMarketData[coinId?.coinId]?.prices? coinMarketData[coinId?.coinId]?.prices.map((pair: any) => pair[0] ):[0],
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
      const pichartoptions = {
        series: [coinMarketData?.coin?.market_data?.circulating_supply,coinMarketData?.coin?.market_data?.total_supply-coinMarketData?.coin?.market_data?.circulating_supply],
        chart: {
          type: 'pie',
        },
        labels: ['Circulating Supply', 'Locked '],
        colors: ['#FF1654', '#247BA0'],
      };
    console.log(coininformation[coinId.coinId]?.market_data?.total_supply-coininformation[coinId.coinId]?.market_data?.circulating_supply)
    return(
        <Box display="flex" flexDirection="column" gap="8px" width="100%">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          height="72px"
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
            justifyContent="space-evenly"
            my="auto"
          >
            <HStack mt="auto">
              <Image src={coininformation[coinId.coinId]?.image?.small} width={50} height={50} alt="coin logo" />
          <Text textAlign={'center'} size={'3xl'}>{coininformation[coinId.coinId]?.name}</Text>
            </HStack>
          
          </Box>
        </Box>
        <Box
          border="1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
          borderRadius="6px"
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'center'}
          padding="16px 24px 40px"
        >

         
  
      {coinMarketData[coinId?.coinId]?.prices !=null ? <ApexCharts
            options={options}
            series={splineChartData.series}
            type="line"
            height={"350"}
            width={"720"}
          />:<Spinner height={"350"}/>}

          {coininformation[coinId.coinId]?.market_data?.circulating_supply ?    <PiChart arg1={coininformation[coinId.coinId]?.market_data?.circulating_supply} arg2={coininformation[coinId.coinId]?.market_data?.total_supply-coininformation[coinId.coinId]?.market_data?.circulating_supply} />:<Skeleton height={"350"}/> }
          {/* <MarketListTracker /> */}
        </Box>
      </Box>
    )
}