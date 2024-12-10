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
import { TbCoinBitcoin } from "react-icons/tb";
import { GiSpadeSkull } from "react-icons/gi";


4
const Navbar = ({ validRTokens }: any) => {


  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [toggleDarkMode, setToggleDarkMode] = useState(true);
  const toggleMode = () => {
    setJustifyContent(
      justifyContent === "flex-start" ? "flex-end" : "flex-start"
    );
  };



  
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
            <GiSpadeSkull color="#433CC8" size={'50px'} />
          {/* <Text size={'xl'} fontWeight={600}>CryptoNite</Text>   */}
          </Box>
        </Link>

     
  

      </HStack>
      </HStack>
      
  );
};

export default memo(Navbar);
