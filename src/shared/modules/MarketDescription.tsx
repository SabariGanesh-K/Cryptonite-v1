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
  selectcoinHistoricData,
  selectCoinInformation,
} from "@/store/slices/readDataSlice";
import { useSelector } from "react-redux";
import useCoinDataLoader from "../hooks/useCoinLoader";
import numberFormatter from "@/utils/numberFormatter";
import CoinSocialButton from "../components/coinSocialButton";
import { InfoIcon, TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";

export default function MarketDescription(coinId: any) {
  const coinInformationData = useSelector(selectCoinInformation);
  const { coinHistoricDataAvailable, available } = useCoinDataLoader(coinId);
  const [coinsData, setcoinsData] = useState<any>({});
  useEffect(() => {
    console.log(
      coinId,
      coinInformationData[coinId.coinId]?.market_data
        ?.price_change_24h_in_currency?.usd
    );
    if (coinInformationData[coinId.coinId]) {
      setcoinsData(coinInformationData[coinId.coinId]);
    }
  }, [coinInformationData]);
  return available ? (
    <>
      <Box
        mb={"4rem"}
        width={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
      >
        <VStack
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={"3px"}
        >
          <Text color="#6e7681" fontSize="xl" alignItems="center">
            Current Price
          </Text>
          {coinInformationData[coinId.coinId] == null ? (
            <Skeleton
              width="6rem"
              height="1.9rem"
              startColor="#101216"
              endColor="#2B2F35"
              borderRadius="6px"
            />
          ) : (
            <HStack>
              <Text color="#e6edf3" fontSize="25px">
                {"$ "}{" "}
                {numberFormatter(
                  coinInformationData[coinId.coinId]?.market_data?.current_price
                    ?.usd
                )}
              </Text>
              <HStack>
                {coinInformationData[coinId.coinId]?.market_data
                  ?.price_change_24h_in_currency?.usd >= 0 ? 
                  <TriangleUpIcon color={"green"} />:   <TriangleDownIcon color={"red"} />}
          {
                  <>
                    {" "}
                 
                    <Text
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="400"
                      fontSize="14px"
                      // color="#E6EDF3"
                      color={
                        coinInformationData[coinId.coinId]?.market_data
                          ?.price_change_24h_in_currency?.usd >= 0
                          ? "green"
                          : "red"
                      }
                    >
                      {
                        coinInformationData[coinId.coinId]?.market_data
                          ?.price_change_24h_in_currency?.usd
                      }{" "}
                      %{" "}
                    </Text>
                  </>}
               
              </HStack>
            </HStack>
          )}
        </VStack>
     
        <VStack
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={"3px"}
        >
          <Text color="#6e7681" fontSize="xl" alignItems="center">
            All Time High
          </Text>
          {coinInformationData[coinId.coinId] == null ? (
            <Skeleton
              width="6rem"
              height="1.9rem"
              startColor="#101216"
              endColor="#2B2F35"
              borderRadius="6px"
            />
          ) : (
            <HStack>
              <Text color="#e6edf3" fontSize="25px">
                {"$ "}{" "}
                {numberFormatter(
                  coinInformationData[coinId.coinId]?.market_data?.ath
                    ?.usd
                )}
              </Text>
              <HStack>
                {coinInformationData[coinId.coinId]?.market_data
                  ?.ath_change_percentage?.usd >= 0 ? 
                  <TriangleUpIcon color={"green"} />:   <TriangleDownIcon color={"red"} />}
          {
                  <>
                    {" "}
                 
                    <Text
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="400"
                      fontSize="14px"
                      // color="#E6EDF3"
                      color={
                        coinInformationData[coinId.coinId]?.market_data
                          ?.ath_change_percentage?.usd >= 0
                          ? "green"
                          : "red"
                      }
                    >
                      {
                        coinInformationData[coinId.coinId]?.market_data
                          ?.ath_change_percentage?.usd
                      }{" "}
                      %{" "}
                    </Text>
                  </>}
               
              </HStack>
            </HStack>
          )}
        </VStack>

        <VStack
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={"3px"}
        >
          <Text color="#6e7681" fontSize="xl" alignItems="center">
            All Time Low
          </Text>
          {coinInformationData[coinId.coinId] == null ? (
            <Skeleton
              width="6rem"
              height="1.9rem"
              startColor="#101216"
              endColor="#2B2F35"
              borderRadius="6px"
            />
          ) : (
            <HStack>
              <Text color="#e6edf3" fontSize="25px">
                {"$ "}{" "}
                {numberFormatter(
                  coinInformationData[coinId.coinId]?.market_data?.atl
                    ?.usd
                )}
              </Text>
             
            </HStack>
          )}
        </VStack>

        <VStack
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={"3px"}
        >
          <Text color="#6e7681" fontSize="xl" alignItems="center">
            Total Volume
          </Text>
          {coinInformationData[coinId.coinId] == null ? (
            <Skeleton
              width="6rem"
              height="1.9rem"
              startColor="#101216"
              endColor="#2B2F35"
              borderRadius="6px"
            />
          ) : (
            <HStack>
              <Text color="#e6edf3" fontSize="25px">
                {"$ "}{" "}
                {numberFormatter(
                  coinInformationData[coinId.coinId]?.market_data?.total_volume
                    ?.usd
                )}
              </Text>
             
            </HStack>
          )}
        </VStack>
      </Box>
      <Box
        display={"flex"}
        alignContent={"center"}
        alignItems={"center"}
        flexDirection={"row"}
        justifyContent={"center"}
        width={"90%"}
      >
        <Card
          width={"40%"}
          background=" var(--surface-of-10, rgba(103, 109, 154, 0.10))"
          mt="1rem"
          p="1rem"
          border=" 1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
        >
          <Text
            display="flex"
            justifyContent="space-between"
            fontSize="16px"
            mb="0.4rem"
          >
            <Text display="flex" alignItems="center">
              <Text
                mr="0.2rem"
                font-style="normal"
                font-weight="400"
                font-size="16px"
                lineHeight="16px"
                color="#676D9A"
              >
                Name:
              </Text>
              <Tooltip
                hasArrow
                placement="right"
                boxShadow="dark-lg"
                label="."
                bg="#02010F"
                fontSize={"13px"}
                fontWeight={"400"}
                borderRadius={"lg"}
                padding={"2"}
                color="#F0F0F5"
                border="1px solid"
                borderColor="#23233D"
                arrowShadowColor="#2B2F35"
                maxW="222px"
              >
                <Box>{/* <InfoIcon /> */}</Box>
              </Tooltip>
            </Text>
            <Text
              font-style="normal"
              font-weight="400"
              font-size="16px"
              color="#676D9A"
            >
              {coinsData.name}
            </Text>
          </Text>

          <Text
            color="#8B949E"
            display="flex"
            justifyContent="space-between"
            fontSize="16px"
          >
            <Text display="flex" alignItems="center">
              <Text
                mr="0.2rem"
                font-style="normal"
                font-weight="400"
                font-size="16px"
                color="#676D9A"
              >
                Symbol:
              </Text>
      
            </Text>
            <Text
              font-style="normal"
              font-weight="400"
              font-size="16px"
              color="#676D9A"
            >
              {coinsData?.symbol}
            </Text>
          </Text>

          <Text
            color="#8B949E"
            display="flex"
            justifyContent="space-between"
            fontSize="16px"
          >
            <Text display="flex" alignItems="center">
              <Text
                mr="0.2rem"
                font-style="normal"
                font-weight="400"
                font-size="16px"
                color="#676D9A"
              >
                Genesis on :
              </Text>
          
            </Text>
            <Text
              font-style="normal"
              font-weight="400"
              font-size="16px"
              color="#676D9A"
            >
              {coinsData?.genesis_date}
            </Text>
          </Text>

          <Text
            color="#8B949E"
            display="flex"
            justifyContent="space-between"
            fontSize="16px"
          >
            <Text display="flex" alignItems="center">
              <Text
                mr="0.2rem"
                font-style="normal"
                font-weight="400"
                font-size="16px"
                color="#676D9A"
              >
                Market Cap Rank:
              </Text>
              <Tooltip
                hasArrow
                placement="right-end"
                boxShadow="dark-lg"
                label="Annual interest rate earned on supplied tokens."
                bg="#02010F"
                fontSize={"13px"}
                fontWeight={"400"}
                borderRadius={"lg"}
                padding={"2"}
                color="#F0F0F5"
                border="1px solid"
                borderColor="#23233D"
                arrowShadowColor="#2B2F35"
                // arrowPadding={2}
                maxW="222px"
                // marginTop={20}
              >
                <Box>{/* <InfoIcon /> */}</Box>
              </Tooltip>
            </Text>
            <Text
              font-style="normal"
              font-weight="400"
              font-size="16px"
              color="#676D9A"
            >
              {coinsData?.market_cap_rank}
            </Text>
          </Text>
          {/* market_cap_fdv_ratio */}
          <Text
            color="#8B949E"
            display="flex"
            justifyContent="space-between"
            fontSize="16px"
          >
            <Text display="flex" alignItems="center">
              <Text
                mr="0.2rem"
                font-style="normal"
                font-weight="400"
                font-size="16px"
                color="#676D9A"
              >
                Market Cap FDV Ratio :
              </Text>
              <Tooltip
                hasArrow
                placement="right-end"
                boxShadow="dark-lg"
                label="Market capitalization (market cap) to Fully Diluted Valuation (FDV) ratio is a metric that compares a company's market value to its fully diluted valuation, indicating how much the market values the company's future growth potential. "
                bg="#02010F"
                fontSize={"13px"}
                fontWeight={"400"}
                borderRadius={"lg"}
                padding={"2"}
                color="#F0F0F5"
                border="1px solid"
                borderColor="#23233D"
                arrowShadowColor="#2B2F35"
                // arrowPadding={2}
                maxW="222px"
                // marginTop={20}
              >
                <Box>
                  {" "}
                  <InfoIcon />{" "}
                </Box>
              </Tooltip>
            </Text>
            <Text
              font-style="normal"
              font-weight="400"
              font-size="16px"
              color="#676D9A"
            >
              {coinsData?.market_data?.market_cap_fdv_ratio}
            </Text>
          </Text>
          <Text
            display="flex"
            justifyContent="space-between"
            fontSize="16px"
            mt="0.5rem"
            // mb="0.4rem"
          >
            <Text display="flex" alignItems="center">
              <Text
                mr="0.2rem"
                font-style="normal"
                font-weight="400"
                font-size="16px"
                lineHeight="16px"
                color="#676D9A"
              >
                Note: Staked assets cannot be used as collateral
              </Text>
            </Text>
          </Text>
        </Card>
        {/* <Box> */}
        <Box
          alignContent={"flex-end"}
          alignItems={"flex-end"}
          width={"20%"}
          ml={"1rem"}
        >
          {coinsData?.links?.homepage[0] && (
            <CoinSocialButton
              data={{ name: "Homepage", href: coinsData?.links?.homepage[0] }}
            />
          )}

          {coinsData?.links?.whitepaper && (
            <CoinSocialButton
              data={{
                name: "Github",
                href: coinsData?.links?.whitepaper,
              }}
            />
          )}
          {coinsData?.links?.blockchain_site[0] && (
            <CoinSocialButton
              data={{
                name: "Whitepaper",
                href: coinsData?.links?.blockchain_site[0],
              }}
            />
          )}
          {coinsData?.links?.repos_url.github[0] && (
            <CoinSocialButton
              data={{
                name: "Github",
                href: coinsData?.links?.repos_url.github[0],
              }}
            />
          )}
          {coinsData?.links?.official_forum_url && (
            <CoinSocialButton
              data={{
                name: "Forum",
                href: coinsData?.links?.official_forum_url,
              }}
            />
          )}
        </Box>
        {/* </Box> */}
      </Box>

      <Box width={'80%'}>
      <Text color="#e6edf3" fontSize="md">
       What is  { coinInformationData[coinId.coinId]?.name} ?
      </Text>
      <Text  color="gray" fontSize="md" dangerouslySetInnerHTML={{ __html: coinInformationData[coinId.coinId]?.description?.en }} />

      </Box>
    </>
  ) : (
    <Spinner />
  );
}
