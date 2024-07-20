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
  selectTop50Data,
  selectUSDTData,
  setBNBData,
  setBTCcompanyHoldingsData,
  setBTCData,
  setETHCompanyHoldingsData,
  setETHData,
  setSolanaData,
  setTop50Data,
  setTrendingData,
  setUSDTData,
} from "@/store/slices/readDataSlice";

import BTCLogo from "@/assets/icons/coins/btc";
import USDCLogo from "@/assets/icons/coins/usdc";
import USDTLogo from "@/assets/icons/coins/usdt";
import ETHLogo from "@/assets/icons/coins/eth";
import DAILogo from "@/assets/icons/coins/dai";
import { setCoinSelectedExchangeRateRToken } from "@/store/slices/userAccountSlice";
import DropdownUp from "@/assets/icons/dropdownUpIcon";
import ArrowUp from "@/assets/icons/arrowup";
import Image from "next/image";
import EthDisabled from "@/assets/icons/coins/ethDisabled";
import UsdcDisabled from "@/assets/icons/coins/usdcDisabled";
import UsdtDisabled from "@/assets/icons/coins/usdtDisabled";
import DaiDisabled from "@/assets/icons/coins/daiDisabled";
import BtcDisabled from "@/assets/icons/coins/btcDisabled";
import MarketListTracker from "../modules/MarketListTracker";
import { useRouter } from "next/router";
import { VscGraphLine } from "react-icons/vsc";
import { HiTrendingUp } from "react-icons/hi";
import { FaHotjar } from "react-icons/fa6";
import { FaFire, FaSearch } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const MarketMetrics = ({ router, color, curveColor, series }: any) => {
  // const router = useRouter()
  const [aprByMarket, setAPRByMarket] = useState(0);
  const [chartData, setChartData] = useState([
    {
      name: "Series 1",
      data: [30000, 40000, 35000, 50000, 49000, 60000, 80000],
    },
    {
      name: "Series 2",
      data: [20000, 30000, 25000, 40000, 39000, 50000, 70000],
    },
    {
      name: "Series 3",
      data: [35000, 45000, 40000, 55000, 54000, 65000, 85000],
    },
    {
      name: "Series 4",
      data: [40000, 50000, 45000, 60000, 59000, 70000, 90000],
    },
    {
      name: "Series 5",
      data: [25000, 35000, 30000, 45000, 44000, 55000, 75000],
    },
  ]);
  const btcdata = useSelector(selectBTCData);
  const ethdata = useSelector(selectETHData);
  const soldata = useSelector(selectSolanaData);
  const bnbdata = useSelector(selectBNBData);
  const usdtddata = useSelector(selectUSDTData);

  const splineColor = ["#00C7F2", "#846ED4", "#136B51", "#1A2683", "#996B22"];
  const [currentSelectedTab, setcurrentSelectedTab] = useState<number>(0);
  ////console.log(btcData, "btc")
  console.log(JSON.stringify(ethdata));
  const [xAxisCategories, setXAxisCategories] = useState([1, 2, 3, 4, 5, 6, 7]);

  //  const minValue = Math.min(...chartData.flatMap((series) => series.data));
  //   const maxValue = Math.max(...chartData.flatMap((series) => series.data));
  const splineChartData = {
    series:aprByMarket==0? [
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
              { name: "USDT", data: usdtddata?.data }]:[],
    options: {
      chart: {
        // offsetX: 50
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
          return val; // Display the data value as the label
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
            return value;
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
    // colors: splineColor,
    // colors: ["#804D0F", "#3B48A8","#136B5","#1A2683","#996B22"],
  };

  return (
    <Box display="flex" flexDirection="column" gap="8px" width="100%">
      <Box
        border="1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
        borderRadius="6px"
        padding="16px 24px 40px"
      
      >
        {btcdata == null ||
        ethdata == null ||
        usdtddata == null ||
        bnbdata == null ||
        soldata == null ? (
          <Skeleton width={"90%"} height={350} />
        ) : (
          <>
            {" "}
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
              options={options}
              series={splineChartData.series}
              type="line"
              height={350}
              
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
