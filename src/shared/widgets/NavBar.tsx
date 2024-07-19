import React, { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";




import {
  Box,
  HStack,
  Skeleton,
  Text,
  useOutsideClick,
} from "@chakra-ui/react";


4
const Navbar = ({ validRTokens }: any) => {
//   const dispatch = useDispatch();


//   const [dashboardHover, setDashboardHover] = useState(false);
//   const [campaignHover, setCampaignHover] = useState(false);
//   const [contibutionHover, setContibutionHover] = useState(false);
//   const [transferDepositHover, setTransferDepositHover] = useState(false);
//   const [stakeHover, setStakeHover] = useState(false);

  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const toggleMode = () => {
    setJustifyContent(
      justifyContent === "flex-start" ? "flex-end" : "flex-start"
    );
  };

  



  
  // useEffect(() => {
  //   if(address && address!=accountAddress)
  //   {

  //   }
  // }, [address]);




const [Render, setRender] = useState(true);

  
  return (
    <HStack
      zIndex="100"
      pt={"4px"}
      background="var(--surface-of-10, rgba(103, 109, 154, 0.10))"
      width="100vw"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="#FFF"
      height="3.8125rem"
      className="navbar"
    >
      <HStack
        display="flex"
        // bgColor={"red"}
        justifyContent={"flex-start"}
        alignItems="center"
        width="60%"
        gap={"4px"}
        marginLeft="2rem"
      >
        <Link
        href="/v2"
          
        >
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            minWidth={"140px"}
            marginRight="1.4em"
          >
            {/* <Image
              src="/hashstackLogo.svg"
              alt="Navbar Logo"
              height="32"
              width="140"
            /> */}
            Heloo
          </Box>
        </Link>

        <Box
          padding="16px 12px"
          fontSize="14px"
          borderRadius="5px"
          cursor="pointer"
          marginBottom="0px"
          className="button"
        //   color={pathname !== "/v1/airdrop_leaderboard" && pathname !== "/v1/referral" ? "#00D395" : "#676D9A"}
        color={ "#676D9A"}

          // _hover={{
          //   color: `${router.pathname != "/waitlist" ? "#6e7681" : ""}`,
          // }}
          onClick={() => {
            if (router.pathname != "/waitlist") {
              router.push("/v1/market");
            }
          }}
        //   onMouseEnter={() => setDashboardHover(true)}
        //   onMouseLeave={() => setDashboardHover(false)}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={"8px"}
          >
         
           
              <Image
              src={"/dashboardIcon.svg"}
              alt="Picture of the author"
              width="16"
              height="16"
              style={{ cursor: "pointer" }}
            />
            

            <Text fontSize="14px">Dashboard</Text>
          </Box>
        </Box>
  

      </HStack>
      </HStack>
      
  );
};

export default memo(Navbar);