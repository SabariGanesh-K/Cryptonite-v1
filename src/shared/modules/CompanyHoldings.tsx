"use client";
import React, { useEffect, useState } from "react";
// import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  ModalBody,
  ModalCloseButton,
  Card,
  Text,
  Checkbox,
  Tooltip,
  Box,
  NumberInput,
  NumberInputField,
  Portal,
  SliderThumb,
  Spinner,
  Skeleton,
  HStack,
  VStack,
} from "@chakra-ui/react";
import {
    selectBTCcompanyHoldingsData,
  selectcoinHistoricData,
  selectCoinInformation,
  selectETHcompanyHoldingsData,
} from "@/store/slices/readDataSlice";
import { useSelector } from "react-redux";
import useCoinDataLoader from "../hooks/useCoinLoader";
import numberFormatter from "@/utils/numberFormatter";
import CoinSocialButton from "../components/coinSocialButton";
import { InfoIcon } from "@chakra-ui/icons";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Progress,
  } from "@chakra-ui/react";
import useDataLoader from "../hooks/useDataLoader";
import Pagination from "../widgets/Pagination";
import CompanyHoldingTable from "./CompanyHoldingtable";
export default function CompanyHoldingsData(coinId: any) {
const btcHolding = useSelector(selectBTCcompanyHoldingsData);
const ethHolding = useSelector(selectETHcompanyHoldingsData)
const {available} = useDataLoader()
const columnItems = [
  "#",
  "Name",
  "Symbol",
  "Country",
  "Total Holdings",
  "Total Entry Value",
  "Total Current Value",
  "% of Total Supply"


];
const [currentBTCPagination, setcurrentBTCPagination] = useState<number>(1);
const [tabBTCValue, setTabBTCValue] = useState(1);
const [currentETHPagination, setcurrentETHPagination] = useState<number>(1);
const [tabETHValue, setTabETHValue] = useState(1);
console.log(btcHolding.total_value_usd)
    return(
        <>
        <>
        <Text fontSize='4xl' fontFamily={'Inter'} color={'white'} fontWeight={'600'}>Explore Companies Holding BITCOIN :</Text>
        <Text fontSize='xl' fontFamily={'Inter'} color={'gray'} fontWeight={'200'}>Track publicly traded companies around the world that are buying Bitcoin as part of corporate treasury</Text> 
        <HStack
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        width="95%"
        // bgColor="green"
        // mt="3rem"
        pr="3rem"
        mb="1rem"
      >    <VStack
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={"3px"}
    >
      <Text color="#6e7681" fontSize="14px" alignItems="center">
        Total Holdings
      </Text>
      {!btcHolding || !btcHolding?.total_holdings==null? (
        <Skeleton
          width="6rem"
          height="1.9rem"
          startColor="#101216"
          endColor="#2B2F35"
          borderRadius="6px"
        />
      ) : (
        <Text color="#e6edf3" fontSize="20px">
         {numberFormatter(btcHolding.total_holdings)}
        </Text>
      )}
    </VStack>
    <VStack gap={"3px"}>
      <Text color="#6e7681" fontSize="14px" alignItems="center">
        Total Value
      </Text>
      {!btcHolding || !btcHolding?.total_value_usd ? (
        <Skeleton
          width="6rem"
          height="1.9rem"
          startColor="#101216"
          endColor="#2B2F35"
          borderRadius="6px"
        />
      ) : (
        // <Text color={Number(netAPR)<0 ?"rgb(255 94 94)": Number(netAPR)==0 ?"white":"#00D395"} fontSize="20px">
        //   {netAPR && !Number.isNaN(netAPR) ? `${netAPR}%` : "NA"}
        // </Text>
        <Text color={"white"} fontSize="20px">
         {numberFormatter(btcHolding?.total_value_usd)}
         
        </Text>
      )}
    </VStack>

    <VStack gap={"3px"}>
      <Text color="#6e7681" fontSize="14px" alignItems="center">
        Market Cap Dominance
      </Text>
      {!btcHolding || !btcHolding?.market_cap_dominance ? (
        <Skeleton
          width="6rem"
          height="1.9rem"
          startColor="#101216"
          endColor="#2B2F35"
          borderRadius="6px"
        />
      ) : (
        // <Text color={Number(netAPR)<0 ?"rgb(255 94 94)": Number(netAPR)==0 ?"white":"#00D395"} fontSize="20px">
        //   {netAPR && !Number.isNaN(netAPR) ? `${netAPR}%` : "NA"}
        // </Text>
        <Text color={"white"} fontSize="20px">
         {numberFormatter(btcHolding.market_cap_dominance)}
         
        </Text>
      )}
    </VStack>
    
    <VStack gap={"3px"}>
      <Text color="#6e7681" fontSize="14px" alignItems="center">
        Number of Leading Companies Holding 
      </Text>
      {!btcHolding || !btcHolding?.companies ? (
        <Skeleton
          width="6rem"
          height="1.9rem"
          startColor="#101216"
          endColor="#2B2F35"
          borderRadius="6px"
        />
      ) : (
        // <Text color={Number(netAPR)<0 ?"rgb(255 94 94)": Number(netAPR)==0 ?"white":"#00D395"} fontSize="20px">
        //   {netAPR && !Number.isNaN(netAPR) ? `${netAPR}%` : "NA"}
        // </Text>
        <Text color={"white"} fontSize="20px">
         {btcHolding?.companies.length}
         
        </Text>
      )}
    </VStack>
  </HStack>

{btcHolding && btcHolding?.companies?  <HStack
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        flexDirection="column"
        width="95%"
        pr="2rem"
        mb="1rem"
        zIndex="1"
      >
  
      
           <CompanyHoldingTable width={"95%"}
            currentPagination={currentBTCPagination}
            setCurrentPagination={setcurrentBTCPagination}
            companyHoldingsData={btcHolding?.companies}
            currency={tabBTCValue}
            columnItems={columnItems} /> 
          {/* <SupplyModal /> */}
        {/* </Box> */}
        <Box mt="1rem" display={'flex'} justifyContent={'center'} flexDirection={'row'}>
          <Pagination
            currentPagination={currentBTCPagination}
            setCurrentPagination={(x: any) => setcurrentBTCPagination(x)}
            max={btcHolding?.companies.length}
            rows={6}
          />
        </Box>
      </HStack>:<Spinner/>}
        </>
        <>
        <Text fontSize='4xl' fontFamily={'Inter'} color={'white'} fontWeight={'600'}>Explore Companies Holding ETHEREUM :</Text>
        <Text fontSize='xl' fontFamily={'Inter'} color={'gray'} fontWeight={'200'}>Track publicly traded companies around the world that are buying Ethereum as part of corporate treasury</Text> 
        <HStack
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        width="95%"
        // bgColor="green"
        // mt="3rem"
        pr="3rem"
        mb="1rem"
      >    <VStack
      display="flex"
      justifyContent="center"
      alignItems="center"
      gap={"3px"}
    >
      <Text color="#6e7681" fontSize="14px" alignItems="center">
        Total Holdings
      </Text>
      {!ethHolding || !ethHolding?.total_holdings==null? (
        <Skeleton
          width="6rem"
          height="1.9rem"
          startColor="#101216"
          endColor="#2B2F35"
          borderRadius="6px"
        />
      ) : (
        <Text color="#e6edf3" fontSize="20px">
         {numberFormatter(ethHolding.total_holdings)}
        </Text>
      )}
    </VStack>
    <VStack gap={"3px"}>
      <Text color="#6e7681" fontSize="14px" alignItems="center">
        Total Value
      </Text>
      {!ethHolding || !ethHolding?.total_value_usd ? (
        <Skeleton
          width="6rem"
          height="1.9rem"
          startColor="#101216"
          endColor="#2B2F35"
          borderRadius="6px"
        />
      ) : (
        // <Text color={Number(netAPR)<0 ?"rgb(255 94 94)": Number(netAPR)==0 ?"white":"#00D395"} fontSize="20px">
        //   {netAPR && !Number.isNaN(netAPR) ? `${netAPR}%` : "NA"}
        // </Text>
        <Text color={"white"} fontSize="20px">
         {numberFormatter(ethHolding?.total_value_usd)}
         
        </Text>
      )}
    </VStack>

    <VStack gap={"3px"}>
      <Text color="#6e7681" fontSize="14px" alignItems="center">
        Market Cap Dominance
      </Text>
      {!ethHolding || !ethHolding?.market_cap_dominance ? (
        <Skeleton
          width="6rem"
          height="1.9rem"
          startColor="#101216"
          endColor="#2B2F35"
          borderRadius="6px"
        />
      ) : (
        // <Text color={Number(netAPR)<0 ?"rgb(255 94 94)": Number(netAPR)==0 ?"white":"#00D395"} fontSize="20px">
        //   {netAPR && !Number.isNaN(netAPR) ? `${netAPR}%` : "NA"}
        // </Text>
        <Text color={"white"} fontSize="20px">
         {numberFormatter(ethHolding.market_cap_dominance)}
         
        </Text>
      )}
    </VStack>
    
    <VStack gap={"3px"}>
      <Text color="#6e7681" fontSize="14px" alignItems="center">
        Number of Leading Companies Holding 
      </Text>
      {!ethHolding || !ethHolding?.companies ? (
        <Skeleton
          width="6rem"
          height="1.9rem"
          startColor="#101216"
          endColor="#2B2F35"
          borderRadius="6px"
        />
      ) : (
        // <Text color={Number(netAPR)<0 ?"rgb(255 94 94)": Number(netAPR)==0 ?"white":"#00D395"} fontSize="20px">
        //   {netAPR && !Number.isNaN(netAPR) ? `${netAPR}%` : "NA"}
        // </Text>
        <Text color={"white"} fontSize="20px">
         {ethHolding?.companies.length}
         
        </Text>
      )}
    </VStack>
  </HStack>

{ethHolding && ethHolding?.companies?  <HStack
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        flexDirection="column"
        width="95%"
        pr="2rem"
        mb="1rem"
        zIndex="1"
      >
  
      
           <CompanyHoldingTable width={"95%"}
            currentPagination={currentETHPagination}
            setCurrentPagination={setcurrentETHPagination}
            companyHoldingsData={ethHolding?.companies}
            currency={tabETHValue}
            columnItems={columnItems} /> 
          {/* <SupplyModal /> */}
        {/* </Box> */}
        <Box mt="1rem" display={'flex'} justifyContent={'center'} flexDirection={'row'}>
          <Pagination
            currentPagination={currentETHPagination}
            setCurrentPagination={(x: any) => setcurrentETHPagination(x)}
            max={ethHolding?.companies.length}
            rows={6}
          />
        </Box>
      </HStack>:<Spinner/>}
        </>
        </>
    )
}