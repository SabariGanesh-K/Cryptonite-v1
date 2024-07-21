"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, Skeleton, Text } from "@chakra-ui/react";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";

import {
  selectBNBData,
  selectBTCData,
  selectETHData,
  selectSolanaData,
  selectUSDTData,

} from "@/store/slices/readDataSlice";


import MarketListTracker from "../modules/MarketListTracker";
import { VscGraphLine } from "react-icons/vsc";
import { HiTrendingUp } from "react-icons/hi";
import { FaFire, FaSearch } from "react-icons/fa";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const MarketMetrics = ({ router, color, curveColor, series }: any) => {
  const [aprByMarket, setAPRByMarket] = useState<number>(0);

  const btcdata = useSelector(selectBTCData);
  const ethdata = useSelector(selectETHData);
  const soldata = useSelector(selectSolanaData);
  const bnbdata = useSelector(selectBNBData);
  const usdtddata = useSelector(selectUSDTData);

  const splineColor = ["#00C7F2", "#846ED4", "#136B51", "#1A2683", "#996B22"];
  const [currentSelectedTab, setcurrentSelectedTab] = useState<number>(0);
  console.log(btcdata?.data, "btc")
  const splineChartData = {
    series:(btcdata == null ||
    ethdata == null ||
    usdtddata == null ||
    bnbdata == null ||
    soldata == null )? [{name:"hehe",data:[0,1]}]:(aprByMarket==0? [
      { name: "Bitcoin", data: btcdata?.data },
      { name: "Ethereum", data: ethdata?.data },
      { name: "Solana", data: soldata?.data },
      { name: "Binance Coin", data: bnbdata?.data },
      { name: "USDT", data: usdtddata?.data },
    ]:aprByMarket==1? [
      { name: "Bitcoin", data: btcdata?.data }]:aprByMarket==2? [
        { name: "Ethereum", data: ethdata?.data }]:aprByMarket==3? [
          { name: "Solana", data: soldata?.data }]:aprByMarket==4? [
            { name: "Binance Coin", data: bnbdata?.data }]:aprByMarket==5? [
              { name: "USDT", data: usdtddata?.data }]:[]),
    options: {
      chart: {
       
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
          return val?val:""; // Display the data value as the label
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
        categories: ethdata?.ts,
      },
      yaxis: {
        labels: {
          formatter: function (value: any) {
            return value?value:"";
          },
          style: {
            colors: "#6E7681", // Set the color of the labels
            fontSize: "12px",
            fontWeight: "400",
          },
        },
        min: 0,
        // max: 10000,
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

      color: splineColor,
    },
  };
  const options: ApexOptions = {
    ...splineChartData.options,
    stroke: {
      ...splineChartData.options.stroke,
      curve: "smooth",
    },

  };

  return (
    <Box display="flex" flexDirection="column" gap="8px" width="100%">
      <Box
        border="1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
        borderRadius="6px"
        padding="16px 24px 40px"
      
      >
        {btcdata?.data == null ||
        ethdata?.data == null ||
        usdtddata?.data == null ||
        bnbdata?.data == null ||
        soldata?.data == null ? (
          <Skeleton width={"90%"} height={350} />
        ) : (
          <>
            {" "}
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
                justifyContent="space-between"
                my="auto"
              >
                <Box mt="auto">Explore Top Markets</Box>
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
                    ALL
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
                      border: `${
                        aprByMarket === 2 ? "none" : "1px solid #3E415C"
                      }`,
                    }}
                  >
                    BTC
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
                      border: `${
                        aprByMarket === 2 ? "none" : "1px solid #3E415C"
                      }`,
                    }}
                  >
                    ETH
                  </Button>

                  <Button
                    color="#3E415C"
                    size="sm"
                    border={aprByMarket === 3 ? "none" : "1px solid #3E415C"}
                    variant={aprByMarket === 3 ? "solid" : "outline"}
                    onClick={() => {
                      setAPRByMarket(3);
                    }}
                    isDisabled={false}
                    _disabled={{
                      cursor: "pointer",
                      color: "#3E415C",
                      border: `${
                        aprByMarket === 3 ? "none" : "1px solid #3E415C"
                      }`,
                    }}
                  >
                    SOL
                  </Button>
                  <Button
                    color="#3E415C"
                    size="sm"
                    border={aprByMarket === 4 ? "none" : "1px solid #3E415C"}
                    variant={aprByMarket === 4 ? "solid" : "outline"}
                    onClick={() => {
                      setAPRByMarket(4);
                    }}
                  >
                    BNB
                  </Button>
                  <Button
                    color="#3E415C"
                    size="sm"
                    border={aprByMarket === 5 ? "none" : "1px solid #3E415C"}
                    variant={aprByMarket === 5 ? "solid" : "outline"}
                    onClick={() => {
                      setAPRByMarket(5);
                    }}
                  >
                    USDT
                  </Button>
                </Box>
              </Box>
            </Box>{" "}
            <ApexCharts
            width={'100%'}
              options={options}
              series={splineChartData.series}
              type="line"
              height={500}
              
            />
          </>
        )}
        <Box   display="flex" gap="4" mb="1.4rem" mt="3rem">
          <Box
            display="flex"
            gap="2"
            bg={
              currentSelectedTab === 0
                ? "rgba(103, 109, 154, 0.10)"
                : "transparent"
            }
            borderRadius="xl"
            border="1px"
            borderColor={
              currentSelectedTab === 0 ? "rgba(103, 109, 154, 0.30)" : "#2B2F35"
            }
            // p="1"
            onClick={() => setcurrentSelectedTab(0)}
            cursor="pointer"
            p="2"
          >
            <Box>
              {currentSelectedTab === 0 ? (
                <VscGraphLine color="green" size={"25px"} />
              ) : (
                <VscGraphLine color="green" size={"25px"} />
              )}
            </Box>
            <Text
              my="auto"
              color="white"
              fontSize="12px"
              fontWeight="500"
              textColor={currentSelectedTab === 0 ? "white" : "#3E415C"}
            >
              CryptoCurrencies
            </Text>
          </Box>
          <Box
            display="flex"
            gap="2"
            bg={
              currentSelectedTab == 1
                ? "rgba(103, 109, 154, 0.10)"
                : "transparent"
            }
            borderRadius="xl"
            border="1px"
            borderColor={
              currentSelectedTab === 1 ? "rgba(103, 109, 154, 0.30)" : "#2B2F35"
            }
            // p="1"
            onClick={() => setcurrentSelectedTab(1)}
            cursor="pointer"
            p="2"
          >
            <Box>
              {currentSelectedTab === 1 ? (
                <HiTrendingUp color="red" size={"25px"} />
              ) : (
                <HiTrendingUp color="red" size={"25px"} />
              )}
            </Box>
            <Text
              my="auto"
              color="white"
              fontSize="12px"
              fontWeight="500"
              textColor={currentSelectedTab === 1 ? "white" : "#3E415C"}
            >
              Trending Coins
            </Text>
          </Box>

          <Box
            display="flex"
            gap="2"
            bg={
              currentSelectedTab === 2
                ? "rgba(103, 109, 154, 0.10)"
                : "transparent"
            }
            borderRadius="xl"
            border="1px"
            borderColor={
              currentSelectedTab === 2 ? "rgba(103, 109, 154, 0.30)" : "#2B2F35"
            }
            // p="1"
            onClick={() => setcurrentSelectedTab(2)}
            cursor="pointer"
            p="2"
          >
            <Box>
              {currentSelectedTab === 2 ? (
                <FaFire color="orange" size={"25px"} />
              ) : (
                <FaFire color="orange" size={"25px"} />
              )}
            </Box>
            <Text
              my="auto"
              color="white"
              fontSize="12px"
              fontWeight="500"
              textColor={currentSelectedTab === 2 ? "white" : "#3E415C"}
            >
              HOT NFTs
            </Text>
          </Box>
          <Box
            display="flex"
            gap="2"
            bg={
              currentSelectedTab === 3
                ? "rgba(103, 109, 154, 0.10)"
                : "transparent"
            }
            borderRadius="xl"
            border="1px"
            borderColor={
              currentSelectedTab === 3 ? "rgba(103, 109, 154, 0.30)" : "#2B2F35"
            }
            // p="1"
            onClick={() => setcurrentSelectedTab(3)}
            cursor="pointer"
            p="2"
          >
            <Box>
              {currentSelectedTab === 3 ? (
                <FaSearch color="white" size={"25px"} />
              ) : (
                <FaSearch color="white" size={"25px"} />
              )}
            </Box>
            <Text
              my="auto"
              color="white"
              fontSize="12px"
              fontWeight="500"
              textColor={currentSelectedTab === 3 ? "white" : "#3E415C"}
            >
              Most Searches
            </Text>
          </Box>
        </Box>

        <MarketListTracker category={currentSelectedTab.toString()} />
      </Box>
    </Box>
  );
};

export default MarketMetrics;
