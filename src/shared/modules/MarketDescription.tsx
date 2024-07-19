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
} from "@chakra-ui/react";
import {
  selectcoinHistoricData,
  selectCoinInformation,
} from "@/store/slices/readDataSlice";
import { useSelector } from "react-redux";
import useCoinDataLoader from "../hooks/useCoinLoader";
import numberFormatter from "@/utils/numberFormatter";
import CoinSocialButton from "../components/coinSocialButton";
import { InfoIcon } from "@chakra-ui/icons";

export default function MarketDescription(coinId: any) {
  const coinInformationData = useSelector(selectCoinInformation);
  const { coinHistoricDataAvailable, available } = useCoinDataLoader(coinId);
  const [coinsData, setcoinsData] = useState<any>({});
  useEffect(() => {
    console.log(coinInformationData);
    if (coinInformationData?.coin?.id) {
      setcoinsData(coinInformationData?.coin);
    }
  }, [coinInformationData]);
  return available ? (
    <>
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
                label="Fees charged by Hashstack protocol. Additional third-party DApp fees may apply as appropriate."
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
    </>
  ) : (
    <Spinner />
  );
}
