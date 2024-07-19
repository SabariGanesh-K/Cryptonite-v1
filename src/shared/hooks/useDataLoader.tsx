import { selectTop50Data,setBTCcompanyHoldingsData,setETHCompanyHoldingsData,setTop50Data } from "@/store/slices/readDataSlice";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";
// import { AxiosGet } from "../lib/axios";

const useDataLoader = () => {
    const [fetchErrorTop50, setFetchErrorTop50] = useState(false)
    const [available, setavailable] = useState(false);
// const top50Data = useSelector(selectTop50Data);

const dispatch = useDispatch()
useEffect(()=>{
const fetchTop50Data=async()=>{
try{
//   //  const data= await AxiosGet("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false");
//   // https://pro-api.coingecko.com/api/v3/coins/markets?per_page=50&page=1'
//    const data= await AxiosGet("/coins/markets?per_page=50&page=1");

//   console.log(data);
//    setFetchErrorTop50(false);
const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY; // replace with your actual API key


// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       'x-cg-pro-api-key': apiKey,
//     } as HeadersInit,
//   };
  
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50';
  const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-S2Rc9ShTYHYtCkzm4WkdKQN7'}
  };
  
  fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
// fetch('https://api.coingecko.com/api/v3/coins/markets?per_page=50&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.log(err));
}
catch(err){
    console.log("error fetching top 50 coins:",err);
    setFetchErrorTop50(true);
}
}
const fetchCompanyHoldings = ()=>{
  const data={
    "total_holdings": 264136,
    "total_value_usd": 18403306939.1513,
    "market_cap_dominance": 1.34,
    "companies": [
      {
        "name": "MicroStrategy Inc.",
        "symbol": "NASDAQ:MSTR",
        "country": "US",
        "total_holdings": 174530,
        "total_entry_value_usd": 4680000000,
        "total_current_value_usd": 12160134022,
        "percentage_of_total_supply": 0.831
      },
      {
        "name": "Galaxy Digital Holdings",
        "symbol": "TSE: GLXY",
        "country": "US",
        "total_holdings": 17518,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 1220542186,
        "percentage_of_total_supply": 0.083
      },
      {
        "name": "Marathon Digital Holdings",
        "symbol": "NASDAQ:MARA",
        "country": "US",
        "total_holdings": 13716,
        "total_entry_value_usd": 189087000,
        "total_current_value_usd": 955643145,
        "percentage_of_total_supply": 0.065
      },
      {
        "name": "Tesla, Inc.",
        "symbol": "NASDAQ:TSLA",
        "country": "US",
        "total_holdings": 10500,
        "total_entry_value_usd": 336000000,
        "total_current_value_usd": 731572836,
        "percentage_of_total_supply": 0.05
      },
      {
        "name": "Hut 8 Mining Corp",
        "symbol": "NASDAQ:HUT",
        "country": "CA",
        "total_holdings": 9366,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 652562970,
        "percentage_of_total_supply": 0.045
      },
      {
        "name": "Coinbase Global, Inc",
        "symbol": "NASDAQ:COIN",
        "country": "US",
        "total_holdings": 9181,
        "total_entry_value_usd": 207783800,
        "total_current_value_usd": 639673353,
        "percentage_of_total_supply": 0.044
      },
      {
        "name": "Block Inc.",
        "symbol": "NYSE:SQ",
        "country": "US",
        "total_holdings": 8027,
        "total_entry_value_usd": 220000000,
        "total_current_value_usd": 559270015,
        "percentage_of_total_supply": 0.038
      },
      {
        "name": "Riot Platforms, Inc",
        "symbol": "NASDAQ:RIOT",
        "country": "US",
        "total_holdings": 7327,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 510498492,
        "percentage_of_total_supply": 0.035
      },
      {
        "name": "Hive Blockchain",
        "symbol": "NASDAQ:HIVE",
        "country": "CA",
        "total_holdings": 2596,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 180872674,
        "percentage_of_total_supply": 0.012
      },
      {
        "name": "CleanSpark Inc.",
        "symbol": "NASDAQ:CLSK",
        "country": "US",
        "total_holdings": 2575,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 179409529,
        "percentage_of_total_supply": 0.012
      },
      {
        "name": "NEXON Co Ltd",
        "symbol": "TYO:3659",
        "country": "JP",
        "total_holdings": 1717,
        "total_entry_value_usd": 99974042,
        "total_current_value_usd": 119629577,
        "percentage_of_total_supply": 0.008
      },
      {
        "name": "Exodus Movement Inc",
        "symbol": "EXOD:OTCMKTS",
        "country": "US",
        "total_holdings": 1651,
        "total_entry_value_usd": 23163000,
        "total_current_value_usd": 115031119,
        "percentage_of_total_supply": 0.008
      },
      {
        "name": "Meitu Inc",
        "symbol": "HKG:1357",
        "country": "HK",
        "total_holdings": 940,
        "total_entry_value_usd": 49500000,
        "total_current_value_usd": 65493187,
        "percentage_of_total_supply": 0.004
      },
      {
        "name": "Bit Digital, Inc",
        "symbol": "NASDAQ:BTBT",
        "country": "US",
        "total_holdings": 821,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 57202028,
        "percentage_of_total_supply": 0.004
      },
      {
        "name": "Bitfarms Limited",
        "symbol": "NASDAQ:BITF",
        "country": "US",
        "total_holdings": 760,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 52951938,
        "percentage_of_total_supply": 0.004
      },
      {
        "name": "NFT Investments PLC",
        "symbol": "AQSE:NFT",
        "country": "GB",
        "total_holdings": 517,
        "total_entry_value_usd": 8505363,
        "total_current_value_usd": 36021253,
        "percentage_of_total_supply": 0.002
      },
      {
        "name": "Cipher Mining",
        "symbol": "NASDAQ:CIFR",
        "country": "US",
        "total_holdings": 507,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 35324516,
        "percentage_of_total_supply": 0.002
      },
      {
        "name": "DMG Blockchain Solutions Inc.",
        "symbol": "OTCMKTS:DMGGF",
        "country": "CA",
        "total_holdings": 462,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 32189204,
        "percentage_of_total_supply": 0.002
      },
      {
        "name": "Neptune Digital Assets Corp.",
        "symbol": "TSXV: DASH",
        "country": "CA",
        "total_holdings": 313,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 21807837,
        "percentage_of_total_supply": 0.001
      },
      {
        "name": "BIGG Digital Assets Inc.",
        "symbol": "CNSX:BIGG",
        "country": "CA",
        "total_holdings": 283,
        "total_entry_value_usd": 2690387,
        "total_current_value_usd": 19717629,
        "percentage_of_total_supply": 0.001
      },
      {
        "name": "Advanced Bitcoin Technologies AG",
        "symbol": "ABT:GR",
        "country": "DE",
        "total_holdings": 228,
        "total_entry_value_usd": 2117978,
        "total_current_value_usd": 15885581,
        "percentage_of_total_supply": 0.001
      },
      {
        "name": "FRMO Corp.",
        "symbol": "OTCMKTS:FRMO",
        "country": "US",
        "total_holdings": 143,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 9963325,
        "percentage_of_total_supply": 0.001
      },
      {
        "name": "The Brooker Group",
        "symbol": "BKK:BROOK",
        "country": "TH",
        "total_holdings": 122,
        "total_entry_value_usd": 6600000,
        "total_current_value_usd": 8500179,
        "percentage_of_total_supply": 0.001
      },
      {
        "name": "DigitalX",
        "symbol": "ASX:DCC",
        "country": "AU",
        "total_holdings": 115,
        "total_entry_value_usd": 610350,
        "total_current_value_usd": 8012464,
        "percentage_of_total_supply": 0.001
      },
      {
        "name": "LQwD Technologies Corp",
        "symbol": "TSXV:LQWD",
        "country": "CA",
        "total_holdings": 113,
        "total_entry_value_usd": 4360275,
        "total_current_value_usd": 7873117,
        "percentage_of_total_supply": 0.001
      },
      {
        "name": "Cypherpunk Holdings Inc",
        "symbol": "CSE:HODL",
        "country": "CA",
        "total_holdings": 69,
        "total_entry_value_usd": 1910000,
        "total_current_value_usd": 4807478,
        "percentage_of_total_supply": 0
      },
      {
        "name": "Core Scientific",
        "symbol": "CORZ:NASDAQ",
        "country": "US",
        "total_holdings": 21,
        "total_entry_value_usd": 0,
        "total_current_value_usd": 1463145,
        "percentage_of_total_supply": 0
      },
      {
        "name": "Mogo Inc.",
        "symbol": "NASDAQ:MOGO",
        "country": "CA",
        "total_holdings": 18,
        "total_entry_value_usd": 595494,
        "total_current_value_usd": 1254124,
        "percentage_of_total_supply": 0
      }
    ]
  }
  dispatch(setBTCcompanyHoldingsData(data));
  dispatch(setETHCompanyHoldingsData(data));

}
// fetchTop50Data()
fetchCompanyHoldings()

},[])

return {available}

}


export default useDataLoader;