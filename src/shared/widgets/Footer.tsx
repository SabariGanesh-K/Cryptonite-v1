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
import checkNetworkStability from "@/utils/network";
import { FaCross } from "react-icons/fa6";
import { ImCross } from "react-icons/im";


export default function Footer()  {
    const [networkStability, setNetworkStability] = useState<any>(null);

    useEffect(() => {
        const handleNetworkChange = () => {
          const stability = checkNetworkStability();
          setNetworkStability(stability);
        };
      
        window.addEventListener('online', handleNetworkChange);
        window.addEventListener('offline', handleNetworkChange);
      
        return () => {
          window.removeEventListener('online', handleNetworkChange);
          window.removeEventListener('offline', handleNetworkChange);
        };
      },[]);
      console.log(networkStability)
      
    return (
        <HStack
          zIndex="14"
          position="fixed"
          bottom="0"
          // backgroundColor="#161B22"
          bgColor="#02010F"
          width="100vw"
          boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          color="#FFF"
          height="2rem"
          // bgColor="red"
          borderY="1px solid #2B2F35"
        > <HStack height="100%">
               <HStack borderRight="1px solid #2B2F35" h="100%" p="8px 3.9rem">
           {(navigator as any).onLine  ?<> <Box>
              <Image
                src="/stableConnectionIcon.svg"
                alt="Picture of the author"
                width={10}
                height={10}
              />
            </Box>
            <Text color="#00D395" fontSize="12px">
              Stable Connection
            </Text></>:<><ImCross color="red"/> <Text color="red" fontSize="12px">
              Connection Offline
            </Text></>}
          </HStack>
          </HStack>
            </HStack>)
}