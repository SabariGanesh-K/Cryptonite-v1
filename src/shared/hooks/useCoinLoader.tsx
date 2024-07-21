import { selectcoinHistoricData, selectCoinInformation, selectTop50Data,setCoinHistoricData,setCoinInformation,setTop50Data } from "@/store/slices/readDataSlice";
import { useToast } from "@chakra-ui/react";
import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";

const useCoinDataLoader = (coinId:string) => {
    const [available, setAvailable] = useState(false)
    const [coinHistoricDataAvailable,setCoinHistoricDataAvailable]=useState({})

    const coinMarketData = useSelector(selectcoinHistoricData);
    const coinInformationData = useSelector(selectCoinInformation)
    const apiKey2 = process.env.NEXT_PUBLIC_COINGECKO_API_KEY_2;
const     headers2 :any= {
  "accept": "application/json",
 "x-cg-demo-api-key": apiKey2
}
    console.log("hehehe")
    const dispatch = useDispatch()
    const toast = useToast();
    useEffect(()=>{
      const fetchData= async() =>{

        console.log('fetcihing for ',(coinId as any)?.coinId );
      if(coinMarketData[(coinId as any)?.coinId]==null){

            const data={"day":{
                "prices": [
                  [
                    1711843200000,
                    69702.3087473573
                  ],
                  [
                    1711929600000,
                    71246.95144060145
                  ],
                  [
                    1711983682000,
                    68887.74951585678
                  ]
                ],
                "market_caps": [
                  [
                    1711843200000,
                    1370247487960.0945
                  ],
                  [
                    1711929600000,
                    1401370211582.3662
                  ],
                  [
                    1711983682000,
                    1355701979725.1584
                  ]
                ],
                "total_volumes": [
                  [
                    1711843200000,
                    16408802301.837431
                  ],
                  [
                    1711929600000,
                    19723005998.21497
                  ],
                  [
                    1711983682000,
                    30137418199.643093
                  ]
                ]
              },"month":{
                "prices": [
                  [
                    1711843200000,
                    69702.3087473573
                  ],
                  [
                    1711929600000,
                    71246.95144060145
                  ],
                  [
                    1711983682000,
                    68887.74951585678
                  ]
                ],
                "market_caps": [
                  [
                    1711843200000,
                    1370247487960.0945
                  ],
                  [
                    1711929600000,
                    1401370211582.3662
                  ],
                  [
                    1711983682000,
                    1355701979725.1584
                  ]
                ],
                "total_volumes": [
                  [
                    1711843200000,
                    16408802301.837431
                  ],
                  [
                    1711929600000,
                    19723005998.21497
                  ],
                  [
                    1711983682000,
                    30137418199.643093
                  ]
                ]
              },"max":{
                "prices": [
                  [
                    1711843200000,
                    69702.3087473573
                  ],
                  [
                    1711929600000,
                    71246.95144060145
                  ],
                  [
                    1711983682000,
                    68887.74951585678
                  ]
                ],
                "market_caps": [
                  [
                    1711843200000,
                    1370247487960.0945
                  ],
                  [
                    1711929600000,
                    1401370211582.3662
                  ],
                  [
                    1711983682000,
                    1355701979725.1584
                  ]
                ],
                "total_volumes": [
                  [
                    1711843200000,
                    16408802301.837431
                  ],
                  [
                    1711929600000,
                    19723005998.21497
                  ],
                  [
                    1711983682000,
                    30137418199.643093
                  ]
                ]
              }}
              if (
                localStorage.getItem(`coinMarketData[${(coinId as any)?.coinId}]`) == null || 
                JSON.parse(localStorage.getItem(`coinMarketData[${(coinId as any)?.coinId}]`) as any).expire < new Date().getTime()
              ) {
              // setCoinHistoricData({coin:data});
              console.log("fetching for ",(coinId as any)?.coinId)
              fetch(
                `https://api.coingecko.com/api/v3/coins/${(coinId as any)?.coinId}/market_chart?vs_currency=usd&days=360`,headers2
              )
                .then((res) => res.json())
                .then((json) => {
                  console.log(json);
    
                 
                  const now = new Date();
                  if(json && json?.status==null){
                        
                    console.log("adding to dispatch",{[(coinId as any)?.coinId]:json})
                    dispatch(setCoinHistoricData({[(coinId as any)?.coinId]:json}))
          localStorage.setItem(
                   `coinMarketData[${(coinId as any)?.coinId}]`,
                    JSON.stringify({
                      data: json,
                      expire: new Date(now.getTime() + 30 * 60 * 1000),
                    })
                  );
                  console.log("adding to cache")
                  // console.log("dispatched", json);
    
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
    

              }else{
                console.log('fetch lopcal for',(coinId as any)?.coinId)
          dispatch(setCoinHistoricData({[(coinId as any)?.coinId]:JSON.parse(localStorage.getItem(`coinMarketData[${(coinId as any)?.coinId}]`) as any).data}))
                
              }
        }
        if(coinInformationData[(coinId as any)?.coinId]==null){
         
       
          if (
            localStorage.getItem(`coinInformatiomData[${(coinId as any)?.coinId}]`) == null || 
            JSON.parse(localStorage.getItem(`coinInformatiomData[${(coinId as any)?.coinId}]`) as any).expire < new Date().getTime()
          ) {
            console.log("fetching for ",(coinId as any)?.coinId);
            fetch(
              `https://api.coingecko.com/api/v3/coins/${(coinId as any)?.coinId} `,headers2
            )
              .then((res) => res.json())
              .then((json) => {
                console.log(json);
  
               
                const now = new Date();
                if(json && json?.status==null){
                      
                  console.log("adding to dispatch",{[(coinId as any)?.coinId]:json})
                  dispatch(setCoinInformation({[(coinId as any)?.coinId]:json}));

        localStorage.setItem(
                 `coinInformatiomData[${(coinId as any)?.coinId}]`,
                  JSON.stringify({
                    data: json,
                    expire: new Date(now.getTime() + 30 * 60 * 1000),
                  })
                );
                console.log("adding to cache")
                // console.log("dispatched", json);
  
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
  
          }
          else{
            console.log('fetch lopcal for',(coinId as any)?.coinId)
            dispatch(setCoinInformation({[(coinId as any)?.coinId]:JSON.parse(localStorage.getItem(`coinInformatiomData[${(coinId as any)?.coinId}]`) as any).data}))
          }
          setAvailable(true)
        }
      }
      fetchData()
    },[])
      return {setCoinHistoricData,available,coinHistoricDataAvailable}
      }
      
      
      export default useCoinDataLoader;