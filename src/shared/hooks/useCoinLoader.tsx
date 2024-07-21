import {
  selectcoinHistoricData,
  selectCoinInformation,
  selectTop50Data,
  setCoinHistoricData,
  setCoinInformation,
  setTop50Data,
} from "@/store/slices/readDataSlice";
import { useToast } from "@chakra-ui/react";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const useCoinDataLoader = (coinId: string) => {
  const [available, setAvailable] = useState(false);
  const [coinHistoricDataAvailable, setCoinHistoricDataAvailable] = useState(
    {}
  );

  const coinMarketData = useSelector(selectcoinHistoricData);
  const coinInformationData = useSelector(selectCoinInformation);
  const apiKey2 = process.env.NEXT_PUBLIC_COINGECKO_API_KEY_2;
  const headers2: any = {
    accept: "application/json",
    "x-cg-demo-api-key": apiKey2,
  };
  const dispatch = useDispatch();
  const toast = useToast();
  useEffect(() => {
    const fetchData = async () => {
      console.log("fetcihing for ", (coinId as any)?.coinId);
      if (coinMarketData[(coinId as any)?.coinId] == null) {
      
        if (
          localStorage.getItem(`coinMarketData[${(coinId as any)?.coinId}]`) ==
            null ||
          JSON.parse(
            localStorage.getItem(
              `coinMarketData[${(coinId as any)?.coinId}]`
            ) as any
          ).expire < new Date().getTime()
        ) {
          console.log("fetching for ", (coinId as any)?.coinId);
          fetch(
            `https://api.coingecko.com/api/v3/coins/${
              (coinId as any)?.coinId
            }/market_chart?vs_currency=usd&days=360`,
            headers2
          )
            .then((res) => res.json())
            .then((json) => {
              console.log(json);

              const now = new Date();
              if (json && json?.status == null) {
                console.log("adding to dispatch", {
                  [(coinId as any)?.coinId]: json,
                });
                dispatch(
                  setCoinHistoricData({ [(coinId as any)?.coinId]: json })
                );
                localStorage.setItem(
                  `coinMarketData[${(coinId as any)?.coinId}]`,
                  JSON.stringify({
                    data: json,
                    expire: new Date(now.getTime() + 30 * 60 * 1000),
                  })
                );
              } else {
                toast({
                  title: "Error",
                  description: "Rate limit reached. Try after sometime!",
                  status: "error",
                  duration: 6000, // 6 seconds
                  isClosable: true,
                });
              }
            })
            .catch((err) => console.error("error:" + err));
        } else {
          dispatch(
            setCoinHistoricData({
              [(coinId as any)?.coinId]: JSON.parse(
                localStorage.getItem(
                  `coinMarketData[${(coinId as any)?.coinId}]`
                ) as any
              ).data,
            })
          );
        }
      }
      if (coinInformationData[(coinId as any)?.coinId] == null) {
        if (
          localStorage.getItem(
            `coinInformatiomData[${(coinId as any)?.coinId}]`
          ) == null ||
          JSON.parse(
            localStorage.getItem(
              `coinInformatiomData[${(coinId as any)?.coinId}]`
            ) as any
          ).expire < new Date().getTime()
        ) {
          fetch(
            `https://api.coingecko.com/api/v3/coins/${
              (coinId as any)?.coinId
            } `,
            headers2
          )
            .then((res) => res.json())
            .then((json) => {

              const now = new Date();
              if (json && json?.status == null) {
              
                dispatch(
                  setCoinInformation({ [(coinId as any)?.coinId]: json })
                );

                localStorage.setItem(
                  `coinInformatiomData[${(coinId as any)?.coinId}]`,
                  JSON.stringify({
                    data: json,
                    expire: new Date(now.getTime() + 30 * 60 * 1000),
                  })
                );
              } else {
                toast({
                  title: "Error",
                  description: "Rate limit reached. Try after sometime!",
                  status: "error",
                  duration: 6000, // 6 seconds
                  isClosable: true,
                });
              }
            })
            .catch((err) => console.error("error:" + err));
        } else {
          dispatch(
            setCoinInformation({
              [(coinId as any)?.coinId]: JSON.parse(
                localStorage.getItem(
                  `coinInformatiomData[${(coinId as any)?.coinId}]`
                ) as any
              ).data,
            })
          );
        }
        setAvailable(true);
      }
    };
    fetchData();
  }, []);
  return { setCoinHistoricData, available, coinHistoricDataAvailable };
};

export default useCoinDataLoader;
