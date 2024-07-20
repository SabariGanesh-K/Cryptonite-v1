import { selectBNBData, selectBTCData, selectETHData, selectSolanaData, selectTop50Data,selectUSDTData,setBNBData,setBTCcompanyHoldingsData,setBTCData,setETHCompanyHoldingsData,setETHData,setSolanaData,setTop50Data, setTrendingData, setUSDTData } from "@/store/slices/readDataSlice";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";
// import { AxiosGet } from "../lib/axios";

const useDataLoader = () => {
    const [fetchErrorTop50, setFetchErrorTop50] = useState(false)
    const [available, setavailable] = useState(false);
// const top50Data = useSelector(selectTop50Data);
const coins = ['bitcoin', 'ethereum','tether','binancecoin', 'solana']; // add more coins here
const timeframes = ['weekly', 'monthly', 'max'];
const btcdata= useSelector(selectBTCData)
const ethdata= useSelector(selectETHData)
const soldata= useSelector(selectSolanaData)
const bnbdata= useSelector(selectBNBData)
const usdtddata= useSelector(selectUSDTData)
const [aprByMarket, setAPRByMarket] = useState(0);

// usss
const dispatch = useDispatch()
useEffect(()=>{
  const fetchTop5Data=async()=>{
    try{

      // const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coins.join(',')}`);
      // const historicData = response.data.map((coin:any) => {
      //   const prices = coin.prices.map((price:any) => ({ x: price[0], y: price[1] }));
      //   return { name: coin.name, data: prices };
      // });
      // console.log(JSON.stringify(historicData));
      
      // setData(historicData);

        // setData(historicData);
    
  
    // const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY; // replace with your actual API key
    
 
      const url1 = ` https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=360` 
      const url2 = ` https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=360` 
      const url3 = ` https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=360`
      const url4 = ` https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=360`
      const url5 = ` https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=360`
      
      
      
      
      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-pro-api-key': 'CG-S2Rc9ShTYHYtCkzm4WkdKQN7'}
      };
     if(btcdata==null) {
      fetch(url1)
        .then(res => res.json())
        .then(json => {
          
          
          console.log(json);
      const price = json.prices.map((pair:any) => pair[1]);
      const xAxisCategories =json.prices.map((pair:any) => pair[0]);

              
        // const prices = json.prices.map((price:any) => ({ x: price[0], y: price[1] }));
        // btcdata= { name: 'bitcoin', data:  };
        dispatch(setBTCData({name:"Bitcoin",data:price,ts:xAxisCategories}))
        console.log("dispatched",{name:"Bitcoin",data:price,ts:xAxisCategories})
  
        })
        .catch(err => console.error('error:' + err));
      }
      if(soldata==null) {
        fetch(url2)
          .then(res => res.json())
          .then(json => {
            
            
            console.log(json);
            const price = json.prices.map((pair:any) => pair[1]);
            const xAxisCategories =json.prices.map((pair:any) => pair[0]);
          // const prices = json.prices.map((price:any) => ({ x: price[0], y: price[1] }));
          dispatch(setSolanaData({name:"Solana",data:price,ts:xAxisCategories}))
          console.log("dispatched",{name:"Solana",data:price,ts:xAxisCategories})
    
          })
          .catch(err => console.error('error:' + err));
        }
        if(bnbdata==null) {
          fetch(url3)
            .then(res => res.json())
            .then(json => {
              const price = json.prices.map((pair:any) => pair[1]);
              const xAxisCategories =json.prices.map((pair:any) => pair[0]);
              
              console.log(json);
                  
            const prices = json.prices.map((price:any) => ({ x: price[0], y: price[1] }));
            dispatch(setBNBData({name:"Binance Coin",data:price,ts:xAxisCategories}))
            console.log("dispatched",{name:"Binance Coin",data:price,ts:xAxisCategories})
      
            })
            .catch(err => console.error('error:' + err));
          }
          if(usdtddata==null) {
            fetch(url4)
              .then(res => res.json())
              .then(json => { 
                const price = json.prices.map((pair:any) => pair[1]);
                const xAxisCategories =json.prices.map((pair:any) => pair[0]);
                
                console.log(json);
                    
              const prices = json.prices.map((price:any) => ({ x: price[0], y: price[1] }));
              dispatch(setUSDTData({name:"Tether",data:price,ts:xAxisCategories}))
              console.log("dispatched",{name:"Tether",data:price,ts:xAxisCategories})
        
              })
              .catch(err => console.error('error:' + err));
            }

      if(ethdata==null) {
        fetch(url5)
          .then(res => res.json())
          .then(json => {
            
            
            console.log(json);
                // const prices=
                const price = json.prices.map((pair:any) => pair[1]);
                const xAxisCategories =json.prices.map((pair:any) => pair[0]);
          // const prices = json.prices.map((price:any) => ({ x: price[0], y: price[1] }));
          dispatch(setETHData({name:"Ethereum",data:price,ts:xAxisCategories}))
          console.log("dispatched",{name:"Ethereum",data:price,ts:xAxisCategories})
    
          })
          .catch(err => console.error('error:' + err));
        }

   

      
      }
    // fetch('https://api.coingecko.com/api/v3/coins/markets?per_page=50&page=1', options)
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err));
    
    catch(err){
        console.log("error fetching top 50 coins:",err);
        setFetchErrorTop50(true);
    }
    }
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
const fetchTrendingData = () =>{
  const data={
    "coins": [
      {
        "item": {
          "id": "moon-tropica",
          "coin_id": 28470,
          "name": "Moon Tropica",
          "symbol": "CAH",
          "market_cap_rank": 530,
          "thumb": "https://assets.coingecko.com/coins/images/28470/standard/MTLOGO.png?1696527464",
          "small": "https://assets.coingecko.com/coins/images/28470/small/MTLOGO.png?1696527464",
          "large": "https://assets.coingecko.com/coins/images/28470/large/MTLOGO.png?1696527464",
          "slug": "moon-tropica",
          "price_btc": 0.0005301634743332989,
          "score": 0,
          "data": {
            "price": 36.97171180169754,
            "price_btc": "0.000530163474333299",
            "price_change_percentage_24h": {
              "aed": -4.044674476087556,
              "ars": -4.049900089458546,
              "aud": -4.049900089458019,
              "bch": -2.3756796248748864,
              "bdt": -4.049900089458495,
              "bhd": -4.169270133964371,
              "bmd": -4.049900089458533,
              "bnb": -3.4734695990217044,
              "brl": -4.0499000894584745,
              "btc": -5.9858537505924625,
              "cad": -4.049900089458477,
              "chf": -4.04990008945855,
              "clp": -5.025675567567188,
              "cny": -4.049900089458403,
              "czk": -4.049900089458641,
              "dkk": -4.049900089458638,
              "dot": -5.982387795212445,
              "eos": -5.74405098071799,
              "eth": -5.0568944511997085,
              "eur": -4.096616197526041,
              "gbp": -4.049900089458471,
              "gel": -4.049900089458967,
              "hkd": -4.0499000894585215,
              "huf": -4.053877164508182,
              "idr": -4.049900089458211,
              "ils": -4.4092202121097746,
              "inr": -4.049900089458557,
              "jpy": -4.049900089459048,
              "krw": -4.049900089458465,
              "kwd": -4.120414696850362,
              "lkr": -4.049900089458902,
              "ltc": -5.293413388383373,
              "mmk": -4.049900089458767,
              "mxn": -4.0499000894591966,
              "myr": -4.049900089458715,
              "ngn": -4.049900089458488,
              "nok": -4.0499000894585375,
              "nzd": -4.049900089458602,
              "php": -4.049900089458442,
              "pkr": -4.049900089458451,
              "pln": -4.049900089458555,
              "rub": -4.049900089458471,
              "sar": -4.049900089458411,
              "sek": -4.049900089458544,
              "sgd": -4.049900089458575,
              "thb": -4.041056870708535,
              "try": -4.049900089458374,
              "twd": -4.0499000894584665,
              "uah": -4.17945939929411,
              "usd": -4.049900089458533,
              "vef": -4.049900089458404,
              "vnd": -4.049900089458679,
              "xag": -4.062083010251626,
              "xau": -4.049900089458423,
              "xdr": -4.049900089458524,
              "xlm": -4.124939249003918,
              "xrp": -4.481270699934758,
              "yfi": -4.04427366181248,
              "zar": -4.0499000894588,
              "bits": -5.9858537505924465,
              "link": -5.120058065995313,
              "sats": -5.9858537505924545
            },
            "market_cap": "$99,703,583",
            "market_cap_btc": "1428.83459310001",
            "total_volume": "$282,142",
            "total_volume_btc": "4.04583894742915",
            "sparkline": "https://www.coingecko.com/coins/28470/sparkline.svg",
            "content": null
          }
        }
      },
      {
        "item": {
          "id": "gala",
          "coin_id": 12493,
          "name": "GALA",
          "symbol": "GALA",
          "market_cap_rank": 53,
          "thumb": "https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869",
          "small": "https://assets.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png?1709725869",
          "large": "https://assets.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
          "slug": "gala",
          "price_btc": 8.995385509920279e-7,
          "score": 1,
          "data": {
            "price": 0.06273061361614252,
            "price_btc": "0.000000899538550992028",
            "price_change_percentage_24h": {
              "aed": 9.607800289428866,
              "ars": 9.601831178453207,
              "aud": 9.60183117845384,
              "bch": 11.467421966306494,
              "bdt": 9.601831178453276,
              "bhd": 9.465477224909796,
              "bmd": 9.601831178453173,
              "bnb": 10.223428485128215,
              "brl": 9.601831178453361,
              "btc": 7.387458257241243,
              "cad": 9.601831178453283,
              "chf": 9.601831178453216,
              "clp": 8.487222863095175,
              "cny": 9.601831178453274,
              "czk": 9.601831178453118,
              "dkk": 9.601831178453255,
              "dot": 7.376880264270369,
              "eos": 7.628589329562328,
              "eth": 8.451082207534835,
              "eur": 9.548468326361439,
              "gbp": 9.601831178453317,
              "gel": 9.601831178452892,
              "hkd": 9.601831178453269,
              "huf": 9.597288247194557,
              "idr": 9.601831178452711,
              "ils": 9.191387172052512,
              "inr": 9.601831178453226,
              "jpy": 9.601831178453017,
              "krw": 9.601831178453276,
              "kwd": 9.521283788693184,
              "lkr": 9.601831178453256,
              "ltc": 8.065248250452148,
              "mmk": 9.601831178452926,
              "mxn": 9.601831178453205,
              "myr": 9.601831178453285,
              "ngn": 9.601831178453272,
              "nok": 9.601831178453201,
              "nzd": 9.60183117845338,
              "php": 9.601831178453331,
              "pkr": 9.601831178452992,
              "pln": 9.601831178453399,
              "rub": 9.601831178453267,
              "sar": 9.601831178453297,
              "sek": 9.601831178453194,
              "sgd": 9.601831178453194,
              "thb": 9.61193260585552,
              "try": 9.60183117845312,
              "twd": 9.601831178452995,
              "uah": 9.453838236106627,
              "usd": 9.601831178453173,
              "vef": 9.601831178453372,
              "vnd": 9.60183117845306,
              "xag": 9.587914877904465,
              "xau": 9.601831178453322,
              "xdr": 9.601831178453349,
              "xlm": 9.491125969692098,
              "xrp": 8.997673436109869,
              "yfi": 9.544091113766347,
              "zar": 9.6018311784527,
              "bits": 7.387458257241251,
              "link": 8.376626532676953,
              "sats": 7.38745825724125
            },
            "market_cap": "$2,365,621,969",
            "market_cap_btc": "33901.3141933559",
            "total_volume": "$212,777,204",
            "total_volume_btc": "3051.16253202022",
            "sparkline": "https://www.coingecko.com/coins/12493/sparkline.svg",
            "content": {
              "title": "What is GALA?",
              "description": "Gala is a blockchain gaming ecosystem. Gamers can explore different type of games and have their experiences interact across each other on the Gala platform. The GALA token is the utility token and primary medium of exchange of the ecosystem. Game items are represented as NFTs on the Ethereum blockchain and users can trade them on all marketplaces."
            }
          }
        }
      }, {
        "item": {
          "id": "moon-tropica",
          "coin_id": 28470,
          "name": "Moon Tropica",
          "symbol": "CAH",
          "market_cap_rank": 530,
          "thumb": "https://assets.coingecko.com/coins/images/28470/standard/MTLOGO.png?1696527464",
          "small": "https://assets.coingecko.com/coins/images/28470/small/MTLOGO.png?1696527464",
          "large": "https://assets.coingecko.com/coins/images/28470/large/MTLOGO.png?1696527464",
          "slug": "moon-tropica",
          "price_btc": 0.0005301634743332989,
          "score": 0,
          "data": {
            "price": 36.97171180169754,
            "price_btc": "0.000530163474333299",
            "price_change_percentage_24h": {
              "aed": -4.044674476087556,
              "ars": -4.049900089458546,
              "aud": -4.049900089458019,
              "bch": -2.3756796248748864,
              "bdt": -4.049900089458495,
              "bhd": -4.169270133964371,
              "bmd": -4.049900089458533,
              "bnb": -3.4734695990217044,
              "brl": -4.0499000894584745,
              "btc": -5.9858537505924625,
              "cad": -4.049900089458477,
              "chf": -4.04990008945855,
              "clp": -5.025675567567188,
              "cny": -4.049900089458403,
              "czk": -4.049900089458641,
              "dkk": -4.049900089458638,
              "dot": -5.982387795212445,
              "eos": -5.74405098071799,
              "eth": -5.0568944511997085,
              "eur": -4.096616197526041,
              "gbp": -4.049900089458471,
              "gel": -4.049900089458967,
              "hkd": -4.0499000894585215,
              "huf": -4.053877164508182,
              "idr": -4.049900089458211,
              "ils": -4.4092202121097746,
              "inr": -4.049900089458557,
              "jpy": -4.049900089459048,
              "krw": -4.049900089458465,
              "kwd": -4.120414696850362,
              "lkr": -4.049900089458902,
              "ltc": -5.293413388383373,
              "mmk": -4.049900089458767,
              "mxn": -4.0499000894591966,
              "myr": -4.049900089458715,
              "ngn": -4.049900089458488,
              "nok": -4.0499000894585375,
              "nzd": -4.049900089458602,
              "php": -4.049900089458442,
              "pkr": -4.049900089458451,
              "pln": -4.049900089458555,
              "rub": -4.049900089458471,
              "sar": -4.049900089458411,
              "sek": -4.049900089458544,
              "sgd": -4.049900089458575,
              "thb": -4.041056870708535,
              "try": -4.049900089458374,
              "twd": -4.0499000894584665,
              "uah": -4.17945939929411,
              "usd": -4.049900089458533,
              "vef": -4.049900089458404,
              "vnd": -4.049900089458679,
              "xag": -4.062083010251626,
              "xau": -4.049900089458423,
              "xdr": -4.049900089458524,
              "xlm": -4.124939249003918,
              "xrp": -4.481270699934758,
              "yfi": -4.04427366181248,
              "zar": -4.0499000894588,
              "bits": -5.9858537505924465,
              "link": -5.120058065995313,
              "sats": -5.9858537505924545
            },
            "market_cap": "$99,703,583",
            "market_cap_btc": "1428.83459310001",
            "total_volume": "$282,142",
            "total_volume_btc": "4.04583894742915",
            "sparkline": "https://www.coingecko.com/coins/28470/sparkline.svg",
            "content": null
          }
        }
      },
      {
        "item": {
          "id": "gala",
          "coin_id": 12493,
          "name": "GALA",
          "symbol": "GALA",
          "market_cap_rank": 53,
          "thumb": "https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869",
          "small": "https://assets.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png?1709725869",
          "large": "https://assets.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
          "slug": "gala",
          "price_btc": 8.995385509920279e-7,
          "score": 1,
          "data": {
            "price": 0.06273061361614252,
            "price_btc": "0.000000899538550992028",
            "price_change_percentage_24h": {
              "aed": 9.607800289428866,
              "ars": 9.601831178453207,
              "aud": 9.60183117845384,
              "bch": 11.467421966306494,
              "bdt": 9.601831178453276,
              "bhd": 9.465477224909796,
              "bmd": 9.601831178453173,
              "bnb": 10.223428485128215,
              "brl": 9.601831178453361,
              "btc": 7.387458257241243,
              "cad": 9.601831178453283,
              "chf": 9.601831178453216,
              "clp": 8.487222863095175,
              "cny": 9.601831178453274,
              "czk": 9.601831178453118,
              "dkk": 9.601831178453255,
              "dot": 7.376880264270369,
              "eos": 7.628589329562328,
              "eth": 8.451082207534835,
              "eur": 9.548468326361439,
              "gbp": 9.601831178453317,
              "gel": 9.601831178452892,
              "hkd": 9.601831178453269,
              "huf": 9.597288247194557,
              "idr": 9.601831178452711,
              "ils": 9.191387172052512,
              "inr": 9.601831178453226,
              "jpy": 9.601831178453017,
              "krw": 9.601831178453276,
              "kwd": 9.521283788693184,
              "lkr": 9.601831178453256,
              "ltc": 8.065248250452148,
              "mmk": 9.601831178452926,
              "mxn": 9.601831178453205,
              "myr": 9.601831178453285,
              "ngn": 9.601831178453272,
              "nok": 9.601831178453201,
              "nzd": 9.60183117845338,
              "php": 9.601831178453331,
              "pkr": 9.601831178452992,
              "pln": 9.601831178453399,
              "rub": 9.601831178453267,
              "sar": 9.601831178453297,
              "sek": 9.601831178453194,
              "sgd": 9.601831178453194,
              "thb": 9.61193260585552,
              "try": 9.60183117845312,
              "twd": 9.601831178452995,
              "uah": 9.453838236106627,
              "usd": 9.601831178453173,
              "vef": 9.601831178453372,
              "vnd": 9.60183117845306,
              "xag": 9.587914877904465,
              "xau": 9.601831178453322,
              "xdr": 9.601831178453349,
              "xlm": 9.491125969692098,
              "xrp": 8.997673436109869,
              "yfi": 9.544091113766347,
              "zar": 9.6018311784527,
              "bits": 7.387458257241251,
              "link": 8.376626532676953,
              "sats": 7.38745825724125
            },
            "market_cap": "$2,365,621,969",
            "market_cap_btc": "33901.3141933559",
            "total_volume": "$212,777,204",
            "total_volume_btc": "3051.16253202022",
            "sparkline": "https://www.coingecko.com/coins/12493/sparkline.svg",
            "content": {
              "title": "What is GALA?",
              "description": "Gala is a blockchain gaming ecosystem. Gamers can explore different type of games and have their experiences interact across each other on the Gala platform. The GALA token is the utility token and primary medium of exchange of the ecosystem. Game items are represented as NFTs on the Ethereum blockchain and users can trade them on all marketplaces."
            }
          }
        }
      }, {
        "item": {
          "id": "moon-tropica",
          "coin_id": 28470,
          "name": "Moon Tropica",
          "symbol": "CAH",
          "market_cap_rank": 530,
          "thumb": "https://assets.coingecko.com/coins/images/28470/standard/MTLOGO.png?1696527464",
          "small": "https://assets.coingecko.com/coins/images/28470/small/MTLOGO.png?1696527464",
          "large": "https://assets.coingecko.com/coins/images/28470/large/MTLOGO.png?1696527464",
          "slug": "moon-tropica",
          "price_btc": 0.0005301634743332989,
          "score": 0,
          "data": {
            "price": 36.97171180169754,
            "price_btc": "0.000530163474333299",
            "price_change_percentage_24h": {
              "aed": -4.044674476087556,
              "ars": -4.049900089458546,
              "aud": -4.049900089458019,
              "bch": -2.3756796248748864,
              "bdt": -4.049900089458495,
              "bhd": -4.169270133964371,
              "bmd": -4.049900089458533,
              "bnb": -3.4734695990217044,
              "brl": -4.0499000894584745,
              "btc": -5.9858537505924625,
              "cad": -4.049900089458477,
              "chf": -4.04990008945855,
              "clp": -5.025675567567188,
              "cny": -4.049900089458403,
              "czk": -4.049900089458641,
              "dkk": -4.049900089458638,
              "dot": -5.982387795212445,
              "eos": -5.74405098071799,
              "eth": -5.0568944511997085,
              "eur": -4.096616197526041,
              "gbp": -4.049900089458471,
              "gel": -4.049900089458967,
              "hkd": -4.0499000894585215,
              "huf": -4.053877164508182,
              "idr": -4.049900089458211,
              "ils": -4.4092202121097746,
              "inr": -4.049900089458557,
              "jpy": -4.049900089459048,
              "krw": -4.049900089458465,
              "kwd": -4.120414696850362,
              "lkr": -4.049900089458902,
              "ltc": -5.293413388383373,
              "mmk": -4.049900089458767,
              "mxn": -4.0499000894591966,
              "myr": -4.049900089458715,
              "ngn": -4.049900089458488,
              "nok": -4.0499000894585375,
              "nzd": -4.049900089458602,
              "php": -4.049900089458442,
              "pkr": -4.049900089458451,
              "pln": -4.049900089458555,
              "rub": -4.049900089458471,
              "sar": -4.049900089458411,
              "sek": -4.049900089458544,
              "sgd": -4.049900089458575,
              "thb": -4.041056870708535,
              "try": -4.049900089458374,
              "twd": -4.0499000894584665,
              "uah": -4.17945939929411,
              "usd": -4.049900089458533,
              "vef": -4.049900089458404,
              "vnd": -4.049900089458679,
              "xag": -4.062083010251626,
              "xau": -4.049900089458423,
              "xdr": -4.049900089458524,
              "xlm": -4.124939249003918,
              "xrp": -4.481270699934758,
              "yfi": -4.04427366181248,
              "zar": -4.0499000894588,
              "bits": -5.9858537505924465,
              "link": -5.120058065995313,
              "sats": -5.9858537505924545
            },
            "market_cap": "$99,703,583",
            "market_cap_btc": "1428.83459310001",
            "total_volume": "$282,142",
            "total_volume_btc": "4.04583894742915",
            "sparkline": "https://www.coingecko.com/coins/28470/sparkline.svg",
            "content": null
          }
        }
      },
      {
        "item": {
          "id": "gala",
          "coin_id": 12493,
          "name": "GALA",
          "symbol": "GALA",
          "market_cap_rank": 53,
          "thumb": "https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869",
          "small": "https://assets.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png?1709725869",
          "large": "https://assets.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
          "slug": "gala",
          "price_btc": 8.995385509920279e-7,
          "score": 1,
          "data": {
            "price": 0.06273061361614252,
            "price_btc": "0.000000899538550992028",
            "price_change_percentage_24h": {
              "aed": 9.607800289428866,
              "ars": 9.601831178453207,
              "aud": 9.60183117845384,
              "bch": 11.467421966306494,
              "bdt": 9.601831178453276,
              "bhd": 9.465477224909796,
              "bmd": 9.601831178453173,
              "bnb": 10.223428485128215,
              "brl": 9.601831178453361,
              "btc": 7.387458257241243,
              "cad": 9.601831178453283,
              "chf": 9.601831178453216,
              "clp": 8.487222863095175,
              "cny": 9.601831178453274,
              "czk": 9.601831178453118,
              "dkk": 9.601831178453255,
              "dot": 7.376880264270369,
              "eos": 7.628589329562328,
              "eth": 8.451082207534835,
              "eur": 9.548468326361439,
              "gbp": 9.601831178453317,
              "gel": 9.601831178452892,
              "hkd": 9.601831178453269,
              "huf": 9.597288247194557,
              "idr": 9.601831178452711,
              "ils": 9.191387172052512,
              "inr": 9.601831178453226,
              "jpy": 9.601831178453017,
              "krw": 9.601831178453276,
              "kwd": 9.521283788693184,
              "lkr": 9.601831178453256,
              "ltc": 8.065248250452148,
              "mmk": 9.601831178452926,
              "mxn": 9.601831178453205,
              "myr": 9.601831178453285,
              "ngn": 9.601831178453272,
              "nok": 9.601831178453201,
              "nzd": 9.60183117845338,
              "php": 9.601831178453331,
              "pkr": 9.601831178452992,
              "pln": 9.601831178453399,
              "rub": 9.601831178453267,
              "sar": 9.601831178453297,
              "sek": 9.601831178453194,
              "sgd": 9.601831178453194,
              "thb": 9.61193260585552,
              "try": 9.60183117845312,
              "twd": 9.601831178452995,
              "uah": 9.453838236106627,
              "usd": 9.601831178453173,
              "vef": 9.601831178453372,
              "vnd": 9.60183117845306,
              "xag": 9.587914877904465,
              "xau": 9.601831178453322,
              "xdr": 9.601831178453349,
              "xlm": 9.491125969692098,
              "xrp": 8.997673436109869,
              "yfi": 9.544091113766347,
              "zar": 9.6018311784527,
              "bits": 7.387458257241251,
              "link": 8.376626532676953,
              "sats": 7.38745825724125
            },
            "market_cap": "$2,365,621,969",
            "market_cap_btc": "33901.3141933559",
            "total_volume": "$212,777,204",
            "total_volume_btc": "3051.16253202022",
            "sparkline": "https://www.coingecko.com/coins/12493/sparkline.svg",
            "content": {
              "title": "What is GALA?",
              "description": "Gala is a blockchain gaming ecosystem. Gamers can explore different type of games and have their experiences interact across each other on the Gala platform. The GALA token is the utility token and primary medium of exchange of the ecosystem. Game items are represented as NFTs on the Ethereum blockchain and users can trade them on all marketplaces."
            }
          }
        }
      }, {
        "item": {
          "id": "moon-tropica",
          "coin_id": 28470,
          "name": "Moon Tropica",
          "symbol": "CAH",
          "market_cap_rank": 530,
          "thumb": "https://assets.coingecko.com/coins/images/28470/standard/MTLOGO.png?1696527464",
          "small": "https://assets.coingecko.com/coins/images/28470/small/MTLOGO.png?1696527464",
          "large": "https://assets.coingecko.com/coins/images/28470/large/MTLOGO.png?1696527464",
          "slug": "moon-tropica",
          "price_btc": 0.0005301634743332989,
          "score": 0,
          "data": {
            "price": 36.97171180169754,
            "price_btc": "0.000530163474333299",
            "price_change_percentage_24h": {
              "aed": -4.044674476087556,
              "ars": -4.049900089458546,
              "aud": -4.049900089458019,
              "bch": -2.3756796248748864,
              "bdt": -4.049900089458495,
              "bhd": -4.169270133964371,
              "bmd": -4.049900089458533,
              "bnb": -3.4734695990217044,
              "brl": -4.0499000894584745,
              "btc": -5.9858537505924625,
              "cad": -4.049900089458477,
              "chf": -4.04990008945855,
              "clp": -5.025675567567188,
              "cny": -4.049900089458403,
              "czk": -4.049900089458641,
              "dkk": -4.049900089458638,
              "dot": -5.982387795212445,
              "eos": -5.74405098071799,
              "eth": -5.0568944511997085,
              "eur": -4.096616197526041,
              "gbp": -4.049900089458471,
              "gel": -4.049900089458967,
              "hkd": -4.0499000894585215,
              "huf": -4.053877164508182,
              "idr": -4.049900089458211,
              "ils": -4.4092202121097746,
              "inr": -4.049900089458557,
              "jpy": -4.049900089459048,
              "krw": -4.049900089458465,
              "kwd": -4.120414696850362,
              "lkr": -4.049900089458902,
              "ltc": -5.293413388383373,
              "mmk": -4.049900089458767,
              "mxn": -4.0499000894591966,
              "myr": -4.049900089458715,
              "ngn": -4.049900089458488,
              "nok": -4.0499000894585375,
              "nzd": -4.049900089458602,
              "php": -4.049900089458442,
              "pkr": -4.049900089458451,
              "pln": -4.049900089458555,
              "rub": -4.049900089458471,
              "sar": -4.049900089458411,
              "sek": -4.049900089458544,
              "sgd": -4.049900089458575,
              "thb": -4.041056870708535,
              "try": -4.049900089458374,
              "twd": -4.0499000894584665,
              "uah": -4.17945939929411,
              "usd": -4.049900089458533,
              "vef": -4.049900089458404,
              "vnd": -4.049900089458679,
              "xag": -4.062083010251626,
              "xau": -4.049900089458423,
              "xdr": -4.049900089458524,
              "xlm": -4.124939249003918,
              "xrp": -4.481270699934758,
              "yfi": -4.04427366181248,
              "zar": -4.0499000894588,
              "bits": -5.9858537505924465,
              "link": -5.120058065995313,
              "sats": -5.9858537505924545
            },
            "market_cap": "$99,703,583",
            "market_cap_btc": "1428.83459310001",
            "total_volume": "$282,142",
            "total_volume_btc": "4.04583894742915",
            "sparkline": "https://www.coingecko.com/coins/28470/sparkline.svg",
            "content": null
          }
        }
      },
      {
        "item": {
          "id": "gala",
          "coin_id": 12493,
          "name": "GALA",
          "symbol": "GALA",
          "market_cap_rank": 53,
          "thumb": "https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869",
          "small": "https://assets.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png?1709725869",
          "large": "https://assets.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
          "slug": "gala",
          "price_btc": 8.995385509920279e-7,
          "score": 1,
          "data": {
            "price": 0.06273061361614252,
            "price_btc": "0.000000899538550992028",
            "price_change_percentage_24h": {
              "aed": 9.607800289428866,
              "ars": 9.601831178453207,
              "aud": 9.60183117845384,
              "bch": 11.467421966306494,
              "bdt": 9.601831178453276,
              "bhd": 9.465477224909796,
              "bmd": 9.601831178453173,
              "bnb": 10.223428485128215,
              "brl": 9.601831178453361,
              "btc": 7.387458257241243,
              "cad": 9.601831178453283,
              "chf": 9.601831178453216,
              "clp": 8.487222863095175,
              "cny": 9.601831178453274,
              "czk": 9.601831178453118,
              "dkk": 9.601831178453255,
              "dot": 7.376880264270369,
              "eos": 7.628589329562328,
              "eth": 8.451082207534835,
              "eur": 9.548468326361439,
              "gbp": 9.601831178453317,
              "gel": 9.601831178452892,
              "hkd": 9.601831178453269,
              "huf": 9.597288247194557,
              "idr": 9.601831178452711,
              "ils": 9.191387172052512,
              "inr": 9.601831178453226,
              "jpy": 9.601831178453017,
              "krw": 9.601831178453276,
              "kwd": 9.521283788693184,
              "lkr": 9.601831178453256,
              "ltc": 8.065248250452148,
              "mmk": 9.601831178452926,
              "mxn": 9.601831178453205,
              "myr": 9.601831178453285,
              "ngn": 9.601831178453272,
              "nok": 9.601831178453201,
              "nzd": 9.60183117845338,
              "php": 9.601831178453331,
              "pkr": 9.601831178452992,
              "pln": 9.601831178453399,
              "rub": 9.601831178453267,
              "sar": 9.601831178453297,
              "sek": 9.601831178453194,
              "sgd": 9.601831178453194,
              "thb": 9.61193260585552,
              "try": 9.60183117845312,
              "twd": 9.601831178452995,
              "uah": 9.453838236106627,
              "usd": 9.601831178453173,
              "vef": 9.601831178453372,
              "vnd": 9.60183117845306,
              "xag": 9.587914877904465,
              "xau": 9.601831178453322,
              "xdr": 9.601831178453349,
              "xlm": 9.491125969692098,
              "xrp": 8.997673436109869,
              "yfi": 9.544091113766347,
              "zar": 9.6018311784527,
              "bits": 7.387458257241251,
              "link": 8.376626532676953,
              "sats": 7.38745825724125
            },
            "market_cap": "$2,365,621,969",
            "market_cap_btc": "33901.3141933559",
            "total_volume": "$212,777,204",
            "total_volume_btc": "3051.16253202022",
            "sparkline": "https://www.coingecko.com/coins/12493/sparkline.svg",
            "content": {
              "title": "What is GALA?",
              "description": "Gala is a blockchain gaming ecosystem. Gamers can explore different type of games and have their experiences interact across each other on the Gala platform. The GALA token is the utility token and primary medium of exchange of the ecosystem. Game items are represented as NFTs on the Ethereum blockchain and users can trade them on all marketplaces."
            }
          }
        }
      }, {
        "item": {
          "id": "moon-tropica",
          "coin_id": 28470,
          "name": "Moon Tropica",
          "symbol": "CAH",
          "market_cap_rank": 530,
          "thumb": "https://assets.coingecko.com/coins/images/28470/standard/MTLOGO.png?1696527464",
          "small": "https://assets.coingecko.com/coins/images/28470/small/MTLOGO.png?1696527464",
          "large": "https://assets.coingecko.com/coins/images/28470/large/MTLOGO.png?1696527464",
          "slug": "moon-tropica",
          "price_btc": 0.0005301634743332989,
          "score": 0,
          "data": {
            "price": 36.97171180169754,
            "price_btc": "0.000530163474333299",
            "price_change_percentage_24h": {
              "aed": -4.044674476087556,
              "ars": -4.049900089458546,
              "aud": -4.049900089458019,
              "bch": -2.3756796248748864,
              "bdt": -4.049900089458495,
              "bhd": -4.169270133964371,
              "bmd": -4.049900089458533,
              "bnb": -3.4734695990217044,
              "brl": -4.0499000894584745,
              "btc": -5.9858537505924625,
              "cad": -4.049900089458477,
              "chf": -4.04990008945855,
              "clp": -5.025675567567188,
              "cny": -4.049900089458403,
              "czk": -4.049900089458641,
              "dkk": -4.049900089458638,
              "dot": -5.982387795212445,
              "eos": -5.74405098071799,
              "eth": -5.0568944511997085,
              "eur": -4.096616197526041,
              "gbp": -4.049900089458471,
              "gel": -4.049900089458967,
              "hkd": -4.0499000894585215,
              "huf": -4.053877164508182,
              "idr": -4.049900089458211,
              "ils": -4.4092202121097746,
              "inr": -4.049900089458557,
              "jpy": -4.049900089459048,
              "krw": -4.049900089458465,
              "kwd": -4.120414696850362,
              "lkr": -4.049900089458902,
              "ltc": -5.293413388383373,
              "mmk": -4.049900089458767,
              "mxn": -4.0499000894591966,
              "myr": -4.049900089458715,
              "ngn": -4.049900089458488,
              "nok": -4.0499000894585375,
              "nzd": -4.049900089458602,
              "php": -4.049900089458442,
              "pkr": -4.049900089458451,
              "pln": -4.049900089458555,
              "rub": -4.049900089458471,
              "sar": -4.049900089458411,
              "sek": -4.049900089458544,
              "sgd": -4.049900089458575,
              "thb": -4.041056870708535,
              "try": -4.049900089458374,
              "twd": -4.0499000894584665,
              "uah": -4.17945939929411,
              "usd": -4.049900089458533,
              "vef": -4.049900089458404,
              "vnd": -4.049900089458679,
              "xag": -4.062083010251626,
              "xau": -4.049900089458423,
              "xdr": -4.049900089458524,
              "xlm": -4.124939249003918,
              "xrp": -4.481270699934758,
              "yfi": -4.04427366181248,
              "zar": -4.0499000894588,
              "bits": -5.9858537505924465,
              "link": -5.120058065995313,
              "sats": -5.9858537505924545
            },
            "market_cap": "$99,703,583",
            "market_cap_btc": "1428.83459310001",
            "total_volume": "$282,142",
            "total_volume_btc": "4.04583894742915",
            "sparkline": "https://www.coingecko.com/coins/28470/sparkline.svg",
            "content": null
          }
        }
      },
      {
        "item": {
          "id": "gala",
          "coin_id": 12493,
          "name": "GALA",
          "symbol": "GALA",
          "market_cap_rank": 53,
          "thumb": "https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869",
          "small": "https://assets.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png?1709725869",
          "large": "https://assets.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
          "slug": "gala",
          "price_btc": 8.995385509920279e-7,
          "score": 1,
          "data": {
            "price": 0.06273061361614252,
            "price_btc": "0.000000899538550992028",
            "price_change_percentage_24h": {
              "aed": 9.607800289428866,
              "ars": 9.601831178453207,
              "aud": 9.60183117845384,
              "bch": 11.467421966306494,
              "bdt": 9.601831178453276,
              "bhd": 9.465477224909796,
              "bmd": 9.601831178453173,
              "bnb": 10.223428485128215,
              "brl": 9.601831178453361,
              "btc": 7.387458257241243,
              "cad": 9.601831178453283,
              "chf": 9.601831178453216,
              "clp": 8.487222863095175,
              "cny": 9.601831178453274,
              "czk": 9.601831178453118,
              "dkk": 9.601831178453255,
              "dot": 7.376880264270369,
              "eos": 7.628589329562328,
              "eth": 8.451082207534835,
              "eur": 9.548468326361439,
              "gbp": 9.601831178453317,
              "gel": 9.601831178452892,
              "hkd": 9.601831178453269,
              "huf": 9.597288247194557,
              "idr": 9.601831178452711,
              "ils": 9.191387172052512,
              "inr": 9.601831178453226,
              "jpy": 9.601831178453017,
              "krw": 9.601831178453276,
              "kwd": 9.521283788693184,
              "lkr": 9.601831178453256,
              "ltc": 8.065248250452148,
              "mmk": 9.601831178452926,
              "mxn": 9.601831178453205,
              "myr": 9.601831178453285,
              "ngn": 9.601831178453272,
              "nok": 9.601831178453201,
              "nzd": 9.60183117845338,
              "php": 9.601831178453331,
              "pkr": 9.601831178452992,
              "pln": 9.601831178453399,
              "rub": 9.601831178453267,
              "sar": 9.601831178453297,
              "sek": 9.601831178453194,
              "sgd": 9.601831178453194,
              "thb": 9.61193260585552,
              "try": 9.60183117845312,
              "twd": 9.601831178452995,
              "uah": 9.453838236106627,
              "usd": 9.601831178453173,
              "vef": 9.601831178453372,
              "vnd": 9.60183117845306,
              "xag": 9.587914877904465,
              "xau": 9.601831178453322,
              "xdr": 9.601831178453349,
              "xlm": 9.491125969692098,
              "xrp": 8.997673436109869,
              "yfi": 9.544091113766347,
              "zar": 9.6018311784527,
              "bits": 7.387458257241251,
              "link": 8.376626532676953,
              "sats": 7.38745825724125
            },
            "market_cap": "$2,365,621,969",
            "market_cap_btc": "33901.3141933559",
            "total_volume": "$212,777,204",
            "total_volume_btc": "3051.16253202022",
            "sparkline": "https://www.coingecko.com/coins/12493/sparkline.svg",
            "content": {
              "title": "What is GALA?",
              "description": "Gala is a blockchain gaming ecosystem. Gamers can explore different type of games and have their experiences interact across each other on the Gala platform. The GALA token is the utility token and primary medium of exchange of the ecosystem. Game items are represented as NFTs on the Ethereum blockchain and users can trade them on all marketplaces."
            }
          }
        }
      }, {
        "item": {
          "id": "moon-tropica",
          "coin_id": 28470,
          "name": "Moon Tropica",
          "symbol": "CAH",
          "market_cap_rank": 530,
          "thumb": "https://assets.coingecko.com/coins/images/28470/standard/MTLOGO.png?1696527464",
          "small": "https://assets.coingecko.com/coins/images/28470/small/MTLOGO.png?1696527464",
          "large": "https://assets.coingecko.com/coins/images/28470/large/MTLOGO.png?1696527464",
          "slug": "moon-tropica",
          "price_btc": 0.0005301634743332989,
          "score": 0,
          "data": {
            "price": 36.97171180169754,
            "price_btc": "0.000530163474333299",
            "price_change_percentage_24h": {
              "aed": -4.044674476087556,
              "ars": -4.049900089458546,
              "aud": -4.049900089458019,
              "bch": -2.3756796248748864,
              "bdt": -4.049900089458495,
              "bhd": -4.169270133964371,
              "bmd": -4.049900089458533,
              "bnb": -3.4734695990217044,
              "brl": -4.0499000894584745,
              "btc": -5.9858537505924625,
              "cad": -4.049900089458477,
              "chf": -4.04990008945855,
              "clp": -5.025675567567188,
              "cny": -4.049900089458403,
              "czk": -4.049900089458641,
              "dkk": -4.049900089458638,
              "dot": -5.982387795212445,
              "eos": -5.74405098071799,
              "eth": -5.0568944511997085,
              "eur": -4.096616197526041,
              "gbp": -4.049900089458471,
              "gel": -4.049900089458967,
              "hkd": -4.0499000894585215,
              "huf": -4.053877164508182,
              "idr": -4.049900089458211,
              "ils": -4.4092202121097746,
              "inr": -4.049900089458557,
              "jpy": -4.049900089459048,
              "krw": -4.049900089458465,
              "kwd": -4.120414696850362,
              "lkr": -4.049900089458902,
              "ltc": -5.293413388383373,
              "mmk": -4.049900089458767,
              "mxn": -4.0499000894591966,
              "myr": -4.049900089458715,
              "ngn": -4.049900089458488,
              "nok": -4.0499000894585375,
              "nzd": -4.049900089458602,
              "php": -4.049900089458442,
              "pkr": -4.049900089458451,
              "pln": -4.049900089458555,
              "rub": -4.049900089458471,
              "sar": -4.049900089458411,
              "sek": -4.049900089458544,
              "sgd": -4.049900089458575,
              "thb": -4.041056870708535,
              "try": -4.049900089458374,
              "twd": -4.0499000894584665,
              "uah": -4.17945939929411,
              "usd": -4.049900089458533,
              "vef": -4.049900089458404,
              "vnd": -4.049900089458679,
              "xag": -4.062083010251626,
              "xau": -4.049900089458423,
              "xdr": -4.049900089458524,
              "xlm": -4.124939249003918,
              "xrp": -4.481270699934758,
              "yfi": -4.04427366181248,
              "zar": -4.0499000894588,
              "bits": -5.9858537505924465,
              "link": -5.120058065995313,
              "sats": -5.9858537505924545
            },
            "market_cap": "$99,703,583",
            "market_cap_btc": "1428.83459310001",
            "total_volume": "$282,142",
            "total_volume_btc": "4.04583894742915",
            "sparkline": "https://www.coingecko.com/coins/28470/sparkline.svg",
            "content": null
          }
        }
      },
      {
        "item": {
          "id": "gala",
          "coin_id": 12493,
          "name": "GALA",
          "symbol": "GALA",
          "market_cap_rank": 53,
          "thumb": "https://assets.coingecko.com/coins/images/12493/standard/GALA_token_image_-_200PNG.png?1709725869",
          "small": "https://assets.coingecko.com/coins/images/12493/small/GALA_token_image_-_200PNG.png?1709725869",
          "large": "https://assets.coingecko.com/coins/images/12493/large/GALA_token_image_-_200PNG.png?1709725869",
          "slug": "gala",
          "price_btc": 8.995385509920279e-7,
          "score": 1,
          "data": {
            "price": 0.06273061361614252,
            "price_btc": "0.000000899538550992028",
            "price_change_percentage_24h": {
              "aed": 9.607800289428866,
              "ars": 9.601831178453207,
              "aud": 9.60183117845384,
              "bch": 11.467421966306494,
              "bdt": 9.601831178453276,
              "bhd": 9.465477224909796,
              "bmd": 9.601831178453173,
              "bnb": 10.223428485128215,
              "brl": 9.601831178453361,
              "btc": 7.387458257241243,
              "cad": 9.601831178453283,
              "chf": 9.601831178453216,
              "clp": 8.487222863095175,
              "cny": 9.601831178453274,
              "czk": 9.601831178453118,
              "dkk": 9.601831178453255,
              "dot": 7.376880264270369,
              "eos": 7.628589329562328,
              "eth": 8.451082207534835,
              "eur": 9.548468326361439,
              "gbp": 9.601831178453317,
              "gel": 9.601831178452892,
              "hkd": 9.601831178453269,
              "huf": 9.597288247194557,
              "idr": 9.601831178452711,
              "ils": 9.191387172052512,
              "inr": 9.601831178453226,
              "jpy": 9.601831178453017,
              "krw": 9.601831178453276,
              "kwd": 9.521283788693184,
              "lkr": 9.601831178453256,
              "ltc": 8.065248250452148,
              "mmk": 9.601831178452926,
              "mxn": 9.601831178453205,
              "myr": 9.601831178453285,
              "ngn": 9.601831178453272,
              "nok": 9.601831178453201,
              "nzd": 9.60183117845338,
              "php": 9.601831178453331,
              "pkr": 9.601831178452992,
              "pln": 9.601831178453399,
              "rub": 9.601831178453267,
              "sar": 9.601831178453297,
              "sek": 9.601831178453194,
              "sgd": 9.601831178453194,
              "thb": 9.61193260585552,
              "try": 9.60183117845312,
              "twd": 9.601831178452995,
              "uah": 9.453838236106627,
              "usd": 9.601831178453173,
              "vef": 9.601831178453372,
              "vnd": 9.60183117845306,
              "xag": 9.587914877904465,
              "xau": 9.601831178453322,
              "xdr": 9.601831178453349,
              "xlm": 9.491125969692098,
              "xrp": 8.997673436109869,
              "yfi": 9.544091113766347,
              "zar": 9.6018311784527,
              "bits": 7.387458257241251,
              "link": 8.376626532676953,
              "sats": 7.38745825724125
            },
            "market_cap": "$2,365,621,969",
            "market_cap_btc": "33901.3141933559",
            "total_volume": "$212,777,204",
            "total_volume_btc": "3051.16253202022",
            "sparkline": "https://www.coingecko.com/coins/12493/sparkline.svg",
            "content": {
              "title": "What is GALA?",
              "description": "Gala is a blockchain gaming ecosystem. Gamers can explore different type of games and have their experiences interact across each other on the Gala platform. The GALA token is the utility token and primary medium of exchange of the ecosystem. Game items are represented as NFTs on the Ethereum blockchain and users can trade them on all marketplaces."
            }
          }
        }
      }
    ],
    "nfts": [
      {
        "id": "chameleon-travel-club",
        "name": "ChameleonTravelClub",
        "symbol": "CTC",
        "thumb": "https://assets.coingecko.com/nft_contracts/images/3610/standard/chameleon-travel-club.png?1707290106",
        "nft_contract_id": 3610,
        "native_currency_symbol": "eth",
        "floor_price_in_native_currency": 4.29,
        "floor_price_24h_percentage_change": 57.3120347225931,
        "data": {
          "floor_price": "4.29 ETH",
          "floor_price_in_usd_24h_percentage_change": "57.3120347225931",
          "h24_volume": "11.26 ETH",
          "h24_average_sale_price": "2.82 ETH",
          "sparkline": "https://www.coingecko.com/nft/3610/sparkline.svg",
          "content": null
        }
      },
      {
        "id": "chameleon-travel-club",
        "name": "ChameleonTravelClub",
        "symbol": "CTC",
        "thumb": "https://assets.coingecko.com/nft_contracts/images/3610/standard/chameleon-travel-club.png?1707290106",
        "nft_contract_id": 3610,
        "native_currency_symbol": "eth",
        "floor_price_in_native_currency": 4.29,
        "floor_price_24h_percentage_change": 57.3120347225931,
        "data": {
          "floor_price": "4.29 ETH",
          "floor_price_in_usd_24h_percentage_change": "57.3120347225931",
          "h24_volume": "11.26 ETH",
          "h24_average_sale_price": "2.82 ETH",
          "sparkline": "https://www.coingecko.com/nft/3610/sparkline.svg",
          "content": null
        }
      },
      {
        "id": "chameleon-travel-club",
        "name": "ChameleonTravelClub",
        "symbol": "CTC",
        "thumb": "https://assets.coingecko.com/nft_contracts/images/3610/standard/chameleon-travel-club.png?1707290106",
        "nft_contract_id": 3610,
        "native_currency_symbol": "eth",
        "floor_price_in_native_currency": 4.29,
        "floor_price_24h_percentage_change": 57.3120347225931,
        "data": {
          "floor_price": "4.29 ETH",
          "floor_price_in_usd_24h_percentage_change": "57.3120347225931",
          "h24_volume": "11.26 ETH",
          "h24_average_sale_price": "2.82 ETH",
          "sparkline": "https://www.coingecko.com/nft/3610/sparkline.svg",
          "content": null
        }
      },
      {
        "id": "chameleon-travel-club",
        "name": "ChameleonTravelClub",
        "symbol": "CTC",
        "thumb": "https://assets.coingecko.com/nft_contracts/images/3610/standard/chameleon-travel-club.png?1707290106",
        "nft_contract_id": 3610,
        "native_currency_symbol": "eth",
        "floor_price_in_native_currency": 4.29,
        "floor_price_24h_percentage_change": 57.3120347225931,
        "data": {
          "floor_price": "4.29 ETH",
          "floor_price_in_usd_24h_percentage_change": "57.3120347225931",
          "h24_volume": "11.26 ETH",
          "h24_average_sale_price": "2.82 ETH",
          "sparkline": "https://www.coingecko.com/nft/3610/sparkline.svg",
          "content": null
        }
      },
      {
        "id": "chameleon-travel-club",
        "name": "ChameleonTravelClub",
        "symbol": "CTC",
        "thumb": "https://assets.coingecko.com/nft_contracts/images/3610/standard/chameleon-travel-club.png?1707290106",
        "nft_contract_id": 3610,
        "native_currency_symbol": "eth",
        "floor_price_in_native_currency": 4.29,
        "floor_price_24h_percentage_change": 57.3120347225931,
        "data": {
          "floor_price": "4.29 ETH",
          "floor_price_in_usd_24h_percentage_change": "57.3120347225931",
          "h24_volume": "11.26 ETH",
          "h24_average_sale_price": "2.82 ETH",
          "sparkline": "https://www.coingecko.com/nft/3610/sparkline.svg",
          "content": null
        }
      },
      {
        "id": "chameleon-travel-club",
        "name": "ChameleonTravelClub",
        "symbol": "CTC",
        "thumb": "https://assets.coingecko.com/nft_contracts/images/3610/standard/chameleon-travel-club.png?1707290106",
        "nft_contract_id": 3610,
        "native_currency_symbol": "eth",
        "floor_price_in_native_currency": 4.29,
        "floor_price_24h_percentage_change": 57.3120347225931,
        "data": {
          "floor_price": "4.29 ETH",
          "floor_price_in_usd_24h_percentage_change": "57.3120347225931",
          "h24_volume": "11.26 ETH",
          "h24_average_sale_price": "2.82 ETH",
          "sparkline": "https://www.coingecko.com/nft/3610/sparkline.svg",
          "content": null
        }
      },
      {
        "id": "natcats",
        "name": "Natcats",
        "symbol": "DMTNATCATS",
        "thumb": "https://assets.coingecko.com/nft_contracts/images/4171/standard/natcats.png?1709517703",
        "nft_contract_id": 4171,
        "native_currency_symbol": "btc",
        "floor_price_in_native_currency": 0.05139,
        "floor_price_24h_percentage_change": 52.5917829733019,
        "data": {
          "floor_price": "0.051 BTC",
          "floor_price_in_usd_24h_percentage_change": "52.5917829733019",
          "h24_volume": "3.93 BTC",
          "h24_average_sale_price": "0.049 BTC",
          "sparkline": "https://www.coingecko.com/nft/4171/sparkline.svg",
          "content": null
        }
      }
    ],
    "categories": [
      {
        "id": 251,
        "name": "Solana Meme Coins",
        "market_cap_1h_change": 1.4453764946553134,
        "slug": "solana-meme-coins",
        "coins_count": 79,
        "data": {
          "market_cap": 8237562936.011124,
          "market_cap_btc": 118852.27622489528,
          "total_volume": 1207846273.3244412,
          "total_volume_btc": 17426.911336459012,
          "market_cap_change_percentage_24h": {
            "aed": 14.230396523539737,
            "ars": 14.224569755904016,
            "aud": 14.224175671448258,
            "bch": 10.54444640788801,
            "bdt": 14.22417567144842,
            "bhd": 14.082071130168746,
            "bmd": 14.224175671448535,
            "bnb": 12.624477239332412,
            "brl": 14.221695576046988,
            "btc": 11.84681099262996,
            "cad": 14.232580997300973,
            "chf": 14.224175671448508,
            "clp": 13.062559896881549,
            "cny": 14.217858661401426,
            "czk": 14.224175671448577,
            "dkk": 14.224175671448444,
            "dot": 10.696648493582588,
            "eos": 10.12173144446242,
            "eth": 11.884759639001178,
            "eur": 14.168562295958932,
            "gbp": 14.224175671448489,
            "gel": 14.224175671449085,
            "hkd": 14.224175671448705,
            "huf": 14.21944114673665,
            "idr": 14.224175671448897,
            "ils": 13.796421611262415,
            "inr": 14.224175671448592,
            "jpy": 14.224175671448288,
            "krw": 14.224175671448533,
            "kwd": 14.140231278377183,
            "lkr": 14.2241756714485,
            "ltc": 8.642866877624703,
            "mmk": 14.224175671448963,
            "mxn": 14.224175671448078,
            "myr": 14.224175671448464,
            "ngn": 14.224175671448572,
            "nok": 14.224175671448524,
            "nzd": 14.22417567144808,
            "php": 14.224175671448599,
            "pkr": 14.224175671448386,
            "pln": 14.206825106648202,
            "rub": 14.224175671448602,
            "sar": 14.224175671448705,
            "sek": 14.224175671448574,
            "sgd": 14.224175671448508,
            "thb": 14.234703116161398,
            "try": 14.224175671448606,
            "twd": 14.224175671448991,
            "uah": 14.06994127898445,
            "usd": 14.224175671448535,
            "vef": 14.224175671448553,
            "vnd": 14.224175671448933,
            "xag": 14.209672465238517,
            "xau": 14.224175671448783,
            "xdr": 14.224175671448712,
            "xlm": 11.83204356427227,
            "xrp": 12.417240014724353,
            "yfi": 12.795491855495357,
            "zar": 14.224175671448144,
            "bits": 11.846810992629957,
            "link": 11.65665127230344,
            "sats": 11.846810992629955
          },
          "sparkline": "https://www.coingecko.com/categories/25211443/sparkline.svg"
        }
      },
      {
        "id": 251,
        "name": "Solana Meme Coins",
        "market_cap_1h_change": 1.4453764946553134,
        "slug": "solana-meme-coins",
        "coins_count": 79,
        "data": {
          "market_cap": 8237562936.011124,
          "market_cap_btc": 118852.27622489528,
          "total_volume": 1207846273.3244412,
          "total_volume_btc": 17426.911336459012,
          "market_cap_change_percentage_24h": {
            "aed": 14.230396523539737,
            "ars": 14.224569755904016,
            "aud": 14.224175671448258,
            "bch": 10.54444640788801,
            "bdt": 14.22417567144842,
            "bhd": 14.082071130168746,
            "bmd": 14.224175671448535,
            "bnb": 12.624477239332412,
            "brl": 14.221695576046988,
            "btc": 11.84681099262996,
            "cad": 14.232580997300973,
            "chf": 14.224175671448508,
            "clp": 13.062559896881549,
            "cny": 14.217858661401426,
            "czk": 14.224175671448577,
            "dkk": 14.224175671448444,
            "dot": 10.696648493582588,
            "eos": 10.12173144446242,
            "eth": 11.884759639001178,
            "eur": 14.168562295958932,
            "gbp": 14.224175671448489,
            "gel": 14.224175671449085,
            "hkd": 14.224175671448705,
            "huf": 14.21944114673665,
            "idr": 14.224175671448897,
            "ils": 13.796421611262415,
            "inr": 14.224175671448592,
            "jpy": 14.224175671448288,
            "krw": 14.224175671448533,
            "kwd": 14.140231278377183,
            "lkr": 14.2241756714485,
            "ltc": 8.642866877624703,
            "mmk": 14.224175671448963,
            "mxn": 14.224175671448078,
            "myr": 14.224175671448464,
            "ngn": 14.224175671448572,
            "nok": 14.224175671448524,
            "nzd": 14.22417567144808,
            "php": 14.224175671448599,
            "pkr": 14.224175671448386,
            "pln": 14.206825106648202,
            "rub": 14.224175671448602,
            "sar": 14.224175671448705,
            "sek": 14.224175671448574,
            "sgd": 14.224175671448508,
            "thb": 14.234703116161398,
            "try": 14.224175671448606,
            "twd": 14.224175671448991,
            "uah": 14.06994127898445,
            "usd": 14.224175671448535,
            "vef": 14.224175671448553,
            "vnd": 14.224175671448933,
            "xag": 14.209672465238517,
            "xau": 14.224175671448783,
            "xdr": 14.224175671448712,
            "xlm": 11.83204356427227,
            "xrp": 12.417240014724353,
            "yfi": 12.795491855495357,
            "zar": 14.224175671448144,
            "bits": 11.846810992629957,
            "link": 11.65665127230344,
            "sats": 11.846810992629955
          },
          "sparkline": "https://www.coingecko.com/categories/25211443/sparkline.svg"
        }
      },
      {
        "id": 251,
        "name": "Solana Meme Coins",
        "market_cap_1h_change": 1.4453764946553134,
        "slug": "solana-meme-coins",
        "coins_count": 79,
        "data": {
          "market_cap": 8237562936.011124,
          "market_cap_btc": 118852.27622489528,
          "total_volume": 1207846273.3244412,
          "total_volume_btc": 17426.911336459012,
          "market_cap_change_percentage_24h": {
            "aed": 14.230396523539737,
            "ars": 14.224569755904016,
            "aud": 14.224175671448258,
            "bch": 10.54444640788801,
            "bdt": 14.22417567144842,
            "bhd": 14.082071130168746,
            "bmd": 14.224175671448535,
            "bnb": 12.624477239332412,
            "brl": 14.221695576046988,
            "btc": 11.84681099262996,
            "cad": 14.232580997300973,
            "chf": 14.224175671448508,
            "clp": 13.062559896881549,
            "cny": 14.217858661401426,
            "czk": 14.224175671448577,
            "dkk": 14.224175671448444,
            "dot": 10.696648493582588,
            "eos": 10.12173144446242,
            "eth": 11.884759639001178,
            "eur": 14.168562295958932,
            "gbp": 14.224175671448489,
            "gel": 14.224175671449085,
            "hkd": 14.224175671448705,
            "huf": 14.21944114673665,
            "idr": 14.224175671448897,
            "ils": 13.796421611262415,
            "inr": 14.224175671448592,
            "jpy": 14.224175671448288,
            "krw": 14.224175671448533,
            "kwd": 14.140231278377183,
            "lkr": 14.2241756714485,
            "ltc": 8.642866877624703,
            "mmk": 14.224175671448963,
            "mxn": 14.224175671448078,
            "myr": 14.224175671448464,
            "ngn": 14.224175671448572,
            "nok": 14.224175671448524,
            "nzd": 14.22417567144808,
            "php": 14.224175671448599,
            "pkr": 14.224175671448386,
            "pln": 14.206825106648202,
            "rub": 14.224175671448602,
            "sar": 14.224175671448705,
            "sek": 14.224175671448574,
            "sgd": 14.224175671448508,
            "thb": 14.234703116161398,
            "try": 14.224175671448606,
            "twd": 14.224175671448991,
            "uah": 14.06994127898445,
            "usd": 14.224175671448535,
            "vef": 14.224175671448553,
            "vnd": 14.224175671448933,
            "xag": 14.209672465238517,
            "xau": 14.224175671448783,
            "xdr": 14.224175671448712,
            "xlm": 11.83204356427227,
            "xrp": 12.417240014724353,
            "yfi": 12.795491855495357,
            "zar": 14.224175671448144,
            "bits": 11.846810992629957,
            "link": 11.65665127230344,
            "sats": 11.846810992629955
          },
          "sparkline": "https://www.coingecko.com/categories/25211443/sparkline.svg"
        }
      },
      {
        "id": 251,
        "name": "Solana Meme Coins",
        "market_cap_1h_change": 1.4453764946553134,
        "slug": "solana-meme-coins",
        "coins_count": 79,
        "data": {
          "market_cap": 8237562936.011124,
          "market_cap_btc": 118852.27622489528,
          "total_volume": 1207846273.3244412,
          "total_volume_btc": 17426.911336459012,
          "market_cap_change_percentage_24h": {
            "aed": 14.230396523539737,
            "ars": 14.224569755904016,
            "aud": 14.224175671448258,
            "bch": 10.54444640788801,
            "bdt": 14.22417567144842,
            "bhd": 14.082071130168746,
            "bmd": 14.224175671448535,
            "bnb": 12.624477239332412,
            "brl": 14.221695576046988,
            "btc": 11.84681099262996,
            "cad": 14.232580997300973,
            "chf": 14.224175671448508,
            "clp": 13.062559896881549,
            "cny": 14.217858661401426,
            "czk": 14.224175671448577,
            "dkk": 14.224175671448444,
            "dot": 10.696648493582588,
            "eos": 10.12173144446242,
            "eth": 11.884759639001178,
            "eur": 14.168562295958932,
            "gbp": 14.224175671448489,
            "gel": 14.224175671449085,
            "hkd": 14.224175671448705,
            "huf": 14.21944114673665,
            "idr": 14.224175671448897,
            "ils": 13.796421611262415,
            "inr": 14.224175671448592,
            "jpy": 14.224175671448288,
            "krw": 14.224175671448533,
            "kwd": 14.140231278377183,
            "lkr": 14.2241756714485,
            "ltc": 8.642866877624703,
            "mmk": 14.224175671448963,
            "mxn": 14.224175671448078,
            "myr": 14.224175671448464,
            "ngn": 14.224175671448572,
            "nok": 14.224175671448524,
            "nzd": 14.22417567144808,
            "php": 14.224175671448599,
            "pkr": 14.224175671448386,
            "pln": 14.206825106648202,
            "rub": 14.224175671448602,
            "sar": 14.224175671448705,
            "sek": 14.224175671448574,
            "sgd": 14.224175671448508,
            "thb": 14.234703116161398,
            "try": 14.224175671448606,
            "twd": 14.224175671448991,
            "uah": 14.06994127898445,
            "usd": 14.224175671448535,
            "vef": 14.224175671448553,
            "vnd": 14.224175671448933,
            "xag": 14.209672465238517,
            "xau": 14.224175671448783,
            "xdr": 14.224175671448712,
            "xlm": 11.83204356427227,
            "xrp": 12.417240014724353,
            "yfi": 12.795491855495357,
            "zar": 14.224175671448144,
            "bits": 11.846810992629957,
            "link": 11.65665127230344,
            "sats": 11.846810992629955
          },
          "sparkline": "https://www.coingecko.com/categories/25211443/sparkline.svg"
        }
      },
      {
        "id": 251,
        "name": "Solana Meme Coins",
        "market_cap_1h_change": 1.4453764946553134,
        "slug": "solana-meme-coins",
        "coins_count": 79,
        "data": {
          "market_cap": 8237562936.011124,
          "market_cap_btc": 118852.27622489528,
          "total_volume": 1207846273.3244412,
          "total_volume_btc": 17426.911336459012,
          "market_cap_change_percentage_24h": {
            "aed": 14.230396523539737,
            "ars": 14.224569755904016,
            "aud": 14.224175671448258,
            "bch": 10.54444640788801,
            "bdt": 14.22417567144842,
            "bhd": 14.082071130168746,
            "bmd": 14.224175671448535,
            "bnb": 12.624477239332412,
            "brl": 14.221695576046988,
            "btc": 11.84681099262996,
            "cad": 14.232580997300973,
            "chf": 14.224175671448508,
            "clp": 13.062559896881549,
            "cny": 14.217858661401426,
            "czk": 14.224175671448577,
            "dkk": 14.224175671448444,
            "dot": 10.696648493582588,
            "eos": 10.12173144446242,
            "eth": 11.884759639001178,
            "eur": 14.168562295958932,
            "gbp": 14.224175671448489,
            "gel": 14.224175671449085,
            "hkd": 14.224175671448705,
            "huf": 14.21944114673665,
            "idr": 14.224175671448897,
            "ils": 13.796421611262415,
            "inr": 14.224175671448592,
            "jpy": 14.224175671448288,
            "krw": 14.224175671448533,
            "kwd": 14.140231278377183,
            "lkr": 14.2241756714485,
            "ltc": 8.642866877624703,
            "mmk": 14.224175671448963,
            "mxn": 14.224175671448078,
            "myr": 14.224175671448464,
            "ngn": 14.224175671448572,
            "nok": 14.224175671448524,
            "nzd": 14.22417567144808,
            "php": 14.224175671448599,
            "pkr": 14.224175671448386,
            "pln": 14.206825106648202,
            "rub": 14.224175671448602,
            "sar": 14.224175671448705,
            "sek": 14.224175671448574,
            "sgd": 14.224175671448508,
            "thb": 14.234703116161398,
            "try": 14.224175671448606,
            "twd": 14.224175671448991,
            "uah": 14.06994127898445,
            "usd": 14.224175671448535,
            "vef": 14.224175671448553,
            "vnd": 14.224175671448933,
            "xag": 14.209672465238517,
            "xau": 14.224175671448783,
            "xdr": 14.224175671448712,
            "xlm": 11.83204356427227,
            "xrp": 12.417240014724353,
            "yfi": 12.795491855495357,
            "zar": 14.224175671448144,
            "bits": 11.846810992629957,
            "link": 11.65665127230344,
            "sats": 11.846810992629955
          },
          "sparkline": "https://www.coingecko.com/categories/25211443/sparkline.svg"
        }
      },
      {
        "id": 327,
        "name": "Gaming Platform",
        "market_cap_1h_change": 1.1050692959116248,
        "slug": "gaming-platform",
        "coins_count": 20,
        "data": {
          "market_cap": 3665275001.853747,
          "market_cap_btc": 52882.90728027729,
          "total_volume": 218189404.503211,
          "total_volume_btc": 3148.0557508090187,
          "market_cap_change_percentage_24h": {
            "aed": 5.953195292443641,
            "ars": 5.947790735793044,
            "aud": 5.947425206927055,
            "bch": 2.53433127439418,
            "bdt": 5.947425206927214,
            "bhd": 5.815617643683333,
            "bmd": 5.9474252069273215,
            "bnb": 4.4636418572644425,
            "brl": 5.945124820686694,
            "btc": 3.742325760876501,
            "cad": 5.955221477960618,
            "chf": 5.947425206927288,
            "clp": 4.869980789651604,
            "cny": 5.941565931116702,
            "czk": 5.947425206927346,
            "dkk": 5.947425206927227,
            "dot": 2.675504708088687,
            "eos": 2.1422464840411943,
            "eth": 3.7775246261734994,
            "eur": 5.895841609098276,
            "gbp": 5.94742520692727,
            "gel": 5.947425206927817,
            "hkd": 5.947425206927471,
            "huf": 5.943033748640541,
            "idr": 5.9474252069276545,
            "ils": 5.550666455707389,
            "inr": 5.94742520692736,
            "jpy": 5.94742520692707,
            "krw": 5.947425206927302,
            "kwd": 5.86956347359295,
            "lkr": 5.94742520692729,
            "ltc": 0.7705413072238989,
            "mmk": 5.947425206927696,
            "mxn": 5.947425206926885,
            "myr": 5.947425206927239,
            "ngn": 5.947425206927365,
            "nok": 5.9474252069272895,
            "nzd": 5.947425206926885,
            "php": 5.947425206927361,
            "pkr": 5.947425206927167,
            "pln": 5.931331874183391,
            "rub": 5.94742520692736,
            "sar": 5.947425206927473,
            "sek": 5.9474252069273605,
            "sgd": 5.947425206927288,
            "thb": 5.957189826849315,
            "try": 5.947425206927379,
            "twd": 5.947425206927743,
            "uah": 5.804366728598461,
            "usd": 5.9474252069273215,
            "vef": 5.94742520692733,
            "vnd": 5.94742520692767,
            "xag": 5.933972911507694,
            "xau": 5.947425206927534,
            "xdr": 5.947425206927486,
            "xlm": 3.7286283890002943,
            "xrp": 4.2714211629570755,
            "yfi": 4.622264654484985,
            "zar": 5.9474252069269395,
            "bits": 3.742325760876498,
            "link": 3.5659451249189047,
            "sats": 3.742325760876507
          },
          "sparkline": "https://www.coingecko.com/categories/25211410/sparkline.svg"
        }
      }
    ]
  }
  dispatch(setTrendingData(data));

}
// fetchTop5Data()
// fetchTop50Data()
fetchCompanyHoldings()
fetchTrendingData()

},[])

return {available}

}


export default useDataLoader;