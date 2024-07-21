import {
  selectBNBData,
  selectBTCcompanyHoldingsData,
  selectBTCData,
  selectETHcompanyHoldingsData,
  selectETHData,
  selectSolanaData,
  selectTop50Data,
  selectTrendingData,
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
import { useToast } from "@chakra-ui/react";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "next/headers";
import { useEffect, useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
// import { AxiosGet } from "../lib/axios";

const useDataLoader = () => {
  const [fetchErrorTop50, setFetchErrorTop50] = useState(false);
  const [available, setavailable] = useState(false);

  // const top50Data = useSelector(selectTop50Data);
const top50data = useSelector(selectTop50Data)
  const btcdata = useSelector(selectBTCData);
  const trendingdata=useSelector(selectTrendingData)
  const ethdata = useSelector(selectETHData);
  const soldata = useSelector(selectSolanaData);
  const bnbdata = useSelector(selectBNBData);
  const usdtddata = useSelector(selectUSDTData);
  const btccompanyholding = useSelector(selectBTCcompanyHoldingsData);
  const ethcompanyholding = useSelector(selectETHcompanyHoldingsData);

  const [aprByMarket, setAPRByMarket] = useState(0);
const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY;
const toast = useToast();

  // usss
  const     headers :any= {
    "accept": "application/json",
   "x-cg-demo-api-key": apiKey
}

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTop5Data = async () => {
      try {
        const url1 = ` https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=360`;
        const url2 = ` https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=360`;
        const url3 = ` https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=360`;
        const url4 = ` https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=360`;
        const url5 = ` https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=360`;

  
     
        if (btcdata == null) {
          if (
            localStorage.getItem("btcData") == null ||
            JSON.parse(localStorage.getItem("btcData") as any).expire <
              new Date().getTime()
          ) {
            console.log("fetching data");
            fetch(url1,headers)
              .then((res) => res.json())
              .then((json) => {
                console.log(json);
                const price = json.prices.map((pair: any) => pair[1]);
                const xAxisCategories = json.prices.map((pair: any) => pair[0]);

              

                dispatch(
                  setBTCData({
                    name: "Bitcoin",
                    data: price,
                    ts: xAxisCategories,
                  })
                );
                const now = new Date();

                localStorage.setItem(
                  "btcData",
                  JSON.stringify({
                    data: { name: "Bitcoin", data: price, ts: xAxisCategories },
                    expire: new Date(now.getTime() + 30 * 60 * 1000),
                  })
                );
                console.log("dispatched", {
                  name: "Bitcoin",
                  data: price,
                  ts: xAxisCategories,
                });
              })
              .catch((err) => console.error("error:" + err));
          } else {
            console.log("fetching local");

            dispatch(
              setBTCData(
                JSON.parse(localStorage.getItem("btcData") as any).data
              )
            );
          }
        }
        if (soldata == null) {
          if (
            localStorage.getItem("solData") == null ||
            JSON.parse(localStorage.getItem("solData") as any).expire <
              new Date().getTime()
          ) {
            fetch(url2,headers)
              .then((res) => res.json())
              .then((json) => {
                console.log(json);
                const price = json.prices.map((pair: any) => pair[1]);
                const xAxisCategories = json.prices.map((pair: any) => pair[0]);
                // const prices = json.prices.map((price:any) => ({ x: price[0], y: price[1] }));
                dispatch(
                  setSolanaData({
                    name: "Solana",
                    data: price,
                    ts: xAxisCategories,
                  })
                );
                console.log("dispatched", {
                  name: "Solana",
                  data: price,
                  ts: xAxisCategories,
                });
              })
              .catch((err) => console.error("error:" + err));
          } else {
            console.log("fetching local");

            dispatch(
              setSolanaData(
                JSON.parse(localStorage.getItem("solData") as any).data
              )
            );
          }
        }
        if (bnbdata == null) {
          if (
            localStorage.getItem("bnbData") == null ||
            JSON.parse(localStorage.getItem("bnbData") as any).expire <
              new Date().getTime()
          ) {
            fetch(url3,headers)
              .then((res) => res.json())
              .then((json) => {
                const price = json.prices.map((pair: any) => pair[1]);
                const xAxisCategories = json.prices.map((pair: any) => pair[0]);

                console.log(json);

                const prices = json.prices.map((price: any) => ({
                  x: price[0],
                  y: price[1],
                }));
                dispatch(
                  setBNBData({
                    name: "Binance Coin",
                    data: price,
                    ts: xAxisCategories,
                  })
                );
                console.log("dispatched", {
                  name: "Binance Coin",
                  data: price,
                  ts: xAxisCategories,
                });
              })
              .catch((err) => console.error("error:" + err));
          } else {
            console.log("fetching local");

            dispatch(
              setBNBData(
                JSON.parse(localStorage.getItem("bnbData") as any).data
              )
            );
          }
        }
        if (usdtddata == null) {
          if (
            localStorage.getItem("usdtData") == null ||
            JSON.parse(localStorage.getItem("usdtData") as any).expire <
              new Date().getTime()
          ) {
            fetch(url4,headers)
              .then((res) => res.json())
              .then((json) => {
                const price = json.prices.map((pair: any) => pair[1]);
                const xAxisCategories = json.prices.map((pair: any) => pair[0]);

                console.log(json);

                const prices = json.prices.map((price: any) => ({
                  x: price[0],
                  y: price[1],
                }));
                dispatch(
                  setUSDTData({
                    name: "Tether",
                    data: price,
                    ts: xAxisCategories,
                  })
                );
                console.log("dispatched", {
                  name: "Tether",
                  data: price,
                  ts: xAxisCategories,
                });
              })
              .catch((err) => console.error("error:" + err));
          } else {
            console.log("fetching local");

            dispatch(
              setUSDTData(
                JSON.parse(localStorage.getItem("usdtData") as any).data
              )
            );
          }
        }

        if (ethdata == null) {
          if (
            localStorage.getItem("ethData") == null ||
            JSON.parse(localStorage.getItem("ethData") as any).expire <
              new Date().getTime()
          ) {
            fetch(url5,headers)
              .then((res) => res.json())
              .then((json) => {
                console.log(json);
                // const prices=
                const price = json.prices.map((pair: any) => pair[1]);
                const xAxisCategories = json.prices.map((pair: any) => pair[0]);
                // const prices = json.prices.map((price:any) => ({ x: price[0], y: price[1] }));
                dispatch(
                  setETHData({
                    name: "Ethereum",
                    data: price,
                    ts: xAxisCategories,
                  })
                );
                console.log("dispatched", {
                  name: "Ethereum",
                  data: price,
                  ts: xAxisCategories,
                });
              })
              .catch((err) => console.error("error:" + err));
          } else {
            console.log("fetching local");

            dispatch(
              setETHData(
                JSON.parse(localStorage.getItem("ethData") as any).data
              )
            );
          }
        }
      } catch (err) {
        

        console.log("error fetching top 50 coins:", err);
        setFetchErrorTop50(true);
      }
    };
    const fetchTop50Data = async () => {
      try {
        if (top50data == null) {
          if (
            localStorage.getItem("Top50Data") == null || 
            JSON.parse(localStorage.getItem("Top50Data") as any).expire < new Date().getTime()
          ) {
            console.log("fetching data");
            fetch(   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50",headers
            )
              .then((res) => res.json())
              .then((json) => {
                console.log(json);
  
               
                const now = new Date();
                if(json && json?.status==null){
                  dispatch(
                    setTop50Data(json)
                  );
        localStorage.setItem(
                  "Top50Data",
                  JSON.stringify({
                    data: json,
                    expire: new Date(now.getTime() + 30 * 60 * 1000),
                  })
                );
                console.log("adding to cache")
                console.log("dispatched", json);
  
                }
                else{
                  toast({
                    title: 'Error',
                    description: 'Rate limit reached. Try after sometime!',
                    status: 'error',
                    duration: 6000, // 6 seconds
                    isClosable: true,
                    // onClose: () => dispatch(toggleRateLimitError()),
                  });
                }
          
              }).catch((err) => console.error("error:" + err));
          } else {
            console.log("fetching local");
            // localStorage.removeIt em('CompanyHoldingDataBTC')
            console.log(localStorage.getItem("Top50Data") )
            dispatch(
              setTop50Data(
                JSON.parse(localStorage.getItem("Top50Data") as any).data
              )
            );
          }
        }

      } catch (err) {
        console.log("error fetching top 50 coins:", err);
        setFetchErrorTop50(true);
      }
    };
   
    const fetchCompanyHoldings = async() => {
      try{
    
      if (btccompanyholding == null) {
        if (
          localStorage.getItem("CompanyHoldingDataBTC") == null || 
          JSON.parse(localStorage.getItem("CompanyHoldingDataBTC") as any).expire < new Date().getTime()
        ) {
          console.log("fetching data");
          fetch(
            "https://api.coingecko.com/api/v3/companies/public_treasury/bitcoin "
          )
            .then((res) => res.json())
            .then((json) => {
              console.log(json);

             
              const now = new Date();
              if(json && json?.status==null){
                dispatch(
                  setBTCcompanyHoldingsData(json)
                );
      localStorage.setItem(
                "CompanyHoldingDataBTC",
                JSON.stringify({
                  data: json,
                  expire: new Date(now.getTime() + 30 * 60 * 1000),
                })
              );
              console.log("adding to cache")
              console.log("dispatched", json);

              }
              else{
                toast({
                  title: 'Error',
                  description: 'Rate limit reached. Try after sometime!',
                  status: 'error',
                  duration: 6000, // 6 seconds
                  isClosable: true,
                  // onClose: () => dispatch(toggleRateLimitError()),
                });
              }
        
            }).catch((err) => console.error("error:" + err));
        } else {
          console.log("fetching local");
          // localStorage.removeItem('CompanyHoldingDataBTC')

          dispatch(
            setBTCcompanyHoldingsData(
              JSON.parse(localStorage.getItem("CompanyHoldingDataBTC") as any)
                .data
            )
          );
        }
      }
      // dispatch(setETHCompanyHoldingsData(data));
      if (ethcompanyholding == null) {
        if (
          localStorage.getItem("CompanyHoldingDataETH") == null ||
          JSON.parse(localStorage.getItem("CompanyHoldingDataETH") as any).expire < new Date().getTime()
        ) {
          console.log("fetching data");
          fetch(
            "https://api.coingecko.com/api/v3/companies/public_treasury/ethereum "
          )
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              if(json && json?.status==null){
              dispatch(
                setETHCompanyHoldingsData(json)
              );
              const now = new Date();

              localStorage.setItem(
                "CompanyHoldingDataETH",
                JSON.stringify({
                  data: json,
                  expire: new Date(now.getTime() + 30 * 60 * 1000),
                })
              );
              console.log("dispatched", json);

            }
            else{
              toast({
                title: 'Error',
                description: 'Rate limit reached. Try after sometime!',
                status: 'error',
                duration: 6000, // 6 seconds
                isClosable: true,
                // onClose: () => dispatch(toggleRateLimitError()),
              });
            }
            }).catch((err) => console.error("error:" + err));;
        } else {
          console.log("fetching local",  JSON.parse(localStorage.getItem("CompanyHoldingDataETH") as any)
          .data);
        
          dispatch(
            setETHCompanyHoldingsData(
              JSON.parse(localStorage.getItem("CompanyHoldingDataETH") as any)
                .data
            )
          );
        }
      }
    }
    catch (err) {
      console.log("error fetching company coins:", err);
      // setFetchErrorTop50(true);
    }
    };
    const fetchTrendingData = () => {
  
      if (trendingdata == null) {
        if (
          localStorage.getItem("TrendingDataHome") == null || 
          JSON.parse(localStorage.getItem("TrendingDataHome") as any).expire < new Date().getTime()
        ) {
          console.log("fetching data");
          fetch(
            "https://api.coingecko.com/api/v3/search/trending "
          )
            .then((res) => res.json())
            .then((json) => {
              console.log(json);

             
              const now = new Date();
              if(json && json?.status==null){
                dispatch(
                  setTrendingData(json)
                );
      localStorage.setItem(
                "TrendingDataHome",
                JSON.stringify({
                  data: json,
                  expire: new Date(now.getTime() + 30 * 60 * 1000),
                })
              );
              console.log("adding to cache")
              console.log("dispatched", json);

              }
              else{
                toast({
                  title: 'Error',
                  description: 'Rate limit reached. Try after sometime!',
                  status: 'error',
                  duration: 6000, // 6 seconds
                  isClosable: true,
                  // onClose: () => dispatch(toggleRateLimitError()),
                });
              }
        
            }).catch((err) => console.error("error:" + err));
        } else {
          console.log("fetching local");
          // localStorage.removeIt em('CompanyHoldingDataBTC')

          dispatch(
            setTrendingData(
              JSON.parse(localStorage.getItem("TrendingDataHome") as any).data
            )
          );
        }
      }
    };
    fetchTop5Data();
    fetchTop50Data()
    fetchCompanyHoldings();
    fetchTrendingData();
  }, []);

  return { available };
};

export default useDataLoader;
