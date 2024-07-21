'use client'
import PageCard from "@/PageCard/PageCard";
import { Skeleton, Spinner, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Box, Button, ButtonGroup, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectcoinHistoricData, selectCoinInformation } from "@/store/slices/readDataSlice";
import MarketExpandGraph from "@/shared/modules/MarketExpandGraph";
import MarketDescription from "@/shared/modules/MarketDescription";
let coinName = "";
export default function CoinPage({ params }: { params: { coinId: string } }) {
  // const navigate = useNavigate()]
  const router=useRouter()
  coinName=params.coinId;
  const handleButtonClick = (val: string) => {
    localStorage.setItem("currentPage", val);
    console.log("yess")
    router.push("/" + val);

  };
  // const coinMarketData=useSelector(selectcoinHistoricData);
  const [backHover, setBackHover] = useState(false);
  const coininformation = useSelector(selectCoinInformation);
  const coinMarketData = useSelector(selectcoinHistoricData);
// console.log("hehe",JSON.stringify(coinMarketData?.coin?.day?.prices?.map((pair:any) => pair[1])));
  return (
    
    <PageCard title={params.coinId}>
          
          <Box width={'90%'} display={'flex'} flexDirection={'row'} justifyContent={'flex-start'}>
  <Box onClick={() => handleButtonClick("v1")} >
    <Button 
      bg="transparent" 
      fontStyle="normal" 
      fontWeight={"400"} 
      fontSize="18px" 
      lineHeight="20px" 
      padding="1.125rem 0.4rem" 
      margin="2px" 
      color={"#676D9A"} 
      borderRadius="0px" 
      _hover={{ bg: "transparent", color: "#E6EDF3" }} 
      onMouseEnter={() => { setBackHover(true); }} 
      onMouseLeave={() => { setBackHover(false); }} 
    >
      <Box marginRight={1.5}>
        <Image 
          src={ !backHover ? "/arrowNavLeft.svg" : "/arrowNavLeftActive.svg" } 
          alt="Arrow Navigation Left" 
          width="6" 
          height="6" 
          style={{ cursor: "pointer" }} 
        />
      </Box>
      Back
    </Button>
  </Box>
</Box>

      <MarketExpandGraph coinId={params.coinId}/>
      {/* <MarketExpandGraph data={}/> */}
      <MarketDescription coinId={params.coinId} />
    </PageCard> 
  );
}
