
import numberFormatter from "@/utils/numberFormatter";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Text,
  Box,
  Spinner,
  Tooltip,
  Progress,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { redirect } from "next/navigation";

const MarketLogsDashboard = ({
  width,
  currentPagination,
  setCurrentPagination,
  marketLogsData,
  currency,
  columnItems,
  
}: // userLoans,
{
  width: string;
  currentPagination: any;
  setCurrentPagination: any;
  marketLogsData: any;
  currency: any;
  columnItems: any;

  // columnItems: Array<Array<string>>;
  // gap: string;
  // rowItems: any;
}) => {
  let lower_bound = 6 * (currentPagination - 1);
  let upper_bound = lower_bound + 5;
  const [loading, setLoading] = useState<boolean>(false);
  const [currentSelectedTenure, setcurrentSelectedTenure] = useState("Day");
  const tooltips = [
    "",
    "",
    "CURRENT_PRICE",

    "PRICE CHANGE [24H]",
    "MARKETCAP",
  ];

const routerr = useRouter();

//   const handleRowClick = (row) => {
//   const url = `/v1/coin/${(row)}`; // dynamic URL based on row data
//   router.push(url);
// };

  return loading ? (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="95%"
        height={"37rem"}
        // height="552px"
        bgColor="#101216"
        borderRadius="8px"
      >
        {/* <Text color="#FFFFFF" fontSize="20px">
                    Loading...
                  </Text> */}
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#010409"
          size="xl"
        />
        {/* <YourBorrowModal
                    buttonText="Borrow assets"
                    variant="link"
                    fontSize="16px"
                    fontWeight="400"
                    display="inline"
                    color="#0969DA"
                    cursor="pointer"
                    ml="0.4rem"
                    lineHeight="24px"
                  /> */}
      </Box>
    </>
  ) : (
    <>
      <TableContainer
        background="var(--surface-of-10, rgba(103, 109, 154, 0.10))"
        border="1px solid var(--stroke-of-30, rgba(103, 109, 154, 0.30))"
        color="white"
        borderRadius="md"
        w={width}
        display="flex"
        justifyContent="flex-center"
        alignItems="flex-center"
        // bgColor={"yellow"}
        height={"100%"}
        paddingX={"2rem"}
        pt={"1.7rem"}
        // pb={"0.5rem"}
        overflowX="hidden"
      >
        {marketLogsData.length != 0 ? (
          <Table
            variant="unstyled"
            width="100%"
            // bgColor={"blue"}
            // p={0}
          >
            <Thead width={"100%"} height={"5rem"}>
              <Tr width={"100%"} height="2rem">
                {columnItems.map((val: any, idx1: any) => (
                  <Td
                    key={idx1}
                    width={"16.6%"}
              
                    // maxWidth={`${gap[idx1][idx2]}%`}
                    fontSize={"12px"}
                    fontWeight={400}
                    // textAlign={"left"}
                    p={0}
                    // bgColor={"pink"}
                    // border="1px solid red"
                  >
                    <Text
                      fontFamily={"Inter"}
                      whiteSpace="pre-wrap"
                      overflowWrap="break-word"
                      width={"100%"}
                      height={"2rem"}
                      fontSize="12px"
                      textAlign={
                        idx1 <= 1
                          ? "left"
                          : idx1 == columnItems?.length - 1
                          ? "right"
                          : "center"
                      }
                      pl={idx1 == 0 ? 2 : 0}
                      pr={idx1 == columnItems.length - 1 ? 14 : 0}
                      color={"#BDBFC1"}
                      cursor="context-menu"
                    >
                      <Tooltip
                        hasArrow
                        label={tooltips[idx1]}
                        // arrowPadding={-5420}
                        placement={
                          (idx1 === 0 && "bottom-start") ||
                          (idx1 === columnItems.length - 1 && "bottom-end") ||
                          "bottom"
                        }
                        rounded="md"
                        boxShadow="dark-lg"
                        bg="#02010F"
                        fontSize={"13px"}
                        fontWeight={"400"}
                        borderRadius={"lg"}
                        padding={"2"}
                        color="#F0F0F5"
                        border="1px solid"
                        borderColor="#23233D"
                        arrowShadowColor="#2B2F35"
                        // cursor="context-menu"
                        // marginRight={idx1 === 1 ? "52px" : ""}
                        // maxW="222px"
                        // mt="28px"
                      >
                        {val}
                      </Tooltip>
                    </Text>
                  </Td>
                ))}
              </Tr>
            </Thead>
            <Tbody
              position="relative"
              overflowX="hidden"
              //   alignContent={"center"}
              //   display="flex"
              //   flexDirection="column"
              //   gap={"1rem"}
            >
              {marketLogsData
                ?.slice(lower_bound, upper_bound + 1)
                .map((market: any, idx: any) => {
                  ////console.log("faisal coin check", coin);
                  // borrowIDCoinMap.push([coin.id, coin?.name]);
                  return (
          <>


                      <Tr
                    cursor={"pointer"}
                    _hover={{   bg:"var(--surface-of-10, rgba(103, 109, 154, 0.10))"
                    }}
                            onClick={()=>window.location.replace(`/v1/coin/${market.id}`)}
                            
                    //    onClick={() => {

                    //   }}
                    
                        key={lower_bound + idx}
                        width={"100%"}
                        height="5rem"
                        // height={"5rem"}
                        // bgColor="green"
                        // borderBottom="1px solid #2b2f35"
                        position="relative"
                        p={0}
                      >
                        <Td
                          width={"18%"}
                          maxWidth={"3rem"}
                          fontSize={"14px"}
                          fontWeight={400}
                          overflow={"hidden"}
                          textAlign={"center"}
                        >
                          <Box
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            fontWeight="400"
                            // bgColor={"blue"}
                          >
                            {/* {checkGap(idx1, idx2)} */}
                            <Text
                              fontSize="14px"
                              fontWeight="500"
                              fontStyle="normal"
                              fontFamily="Inter"
                            >
                              {market.name}
                            </Text>
                          </Box>
                        </Td>

                        <Td
                          width={"16.6%"}
                          // maxWidth={`${gap[idx1][idx2]}%`}
                          fontSize={"14px"}
                          fontWeight={400}
                          padding={2}
                          textAlign="center"
                        >
                          <HStack
                            gap="10px"
                            display="flex"
                            justifyContent="flex-center"
                            alignItems="center"
                            // bgColor="red"
                          >
                            <Box height="2rem" width="2rem">
                              <Image
                                src={market.image}
                                alt={`Picture of the coin that I want to access ${market.name}`}
                                width="32"
                                height="32"
                              />
                            </Box>
                            <Box
                              display="flex"
                              flexDirection="column"
                              justifyContent="space-between"
                              alignItems="flex-start"
                              gap="1px"
                              //   bgColor="blue"
                              pt="3px"
                            >
                              <Text
                                fontSize="14px"
                                fontWeight="500"
                                fontStyle="normal"
                                fontFamily="Inter"
                              >
                                {market.symbol.toUpperCase()}
                              </Text>
                            </Box>
                          </HStack>
                        </Td>

                        <Td
                          width={"16.6%"}
                          // maxWidth={`${gap[idx1][idx2]}%`}
                          fontSize={"14px"}
                          fontWeight={400}
                          padding={2}
                          textAlign="center"
                        >
                          <Text
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="400"
                            fontSize="14px"
                            color="#E6EDF3"
                            // bgColor={"blue"}
                          >
                            $ {market.current_price}
                          </Text>
                        </Td>
                        <Td
                          width={"16.6%"}
                          // maxWidth={`${gap[idx1][idx2]}%`}
                          fontSize={"14px"}
                          fontWeight={400}
                          padding={2}
                          textAlign="center"
                        >
                          <Text
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="400"
                            fontSize="14px"
                            color="#E6EDF3"
                            // bgColor={"blue"}
                          >
                            {numberFormatter(market.market_cap)}
                          </Text>
                        </Td>
                        <Td
                          width={"16.6%"}
                          // maxWidth={`${gap[idx1][idx2]}%`}
                          fontSize={"14px"}
                          fontWeight={400}
                          padding={2}
                          textAlign="center"
                        >
                          <Text
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="400"
                            fontSize="14px"
                            color="#E6EDF3"
                            // bgColor={"blue"}
                          >
                            {numberFormatter(market.current_price)}
                          </Text>
                        </Td>
                        <Td
                          width={"16.6%"}
                          // maxWidth={`${gap[idx1][idx2]}%`}
                          fontSize={"14px"}
                          fontWeight={400}
                          padding={2}
                          textAlign="center"
                        >
                          <Text
                            width="100%"
                            height="100%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontWeight="400"
                            fontSize="14px"
                            color="#E6EDF3"
                            // bgColor={"blue"}
                          >
                            {numberFormatter(market.price_change_24h)}
                          </Text>
                        </Td>
                      </Tr>
                      <Tr
                        style={{
                          position: "absolute",
                          height: "1px",
                          borderWidth: "0",
                          backgroundColor: "#2b2f35",
                          width: "100%",
                          // left: "0%",
                          display: `${
                            idx == marketLogsData.length - 1 ? "none" : "block"
                          }`,
                        }}
                      />

                    </>

                  );
                })}
            </Tbody>
          </Table>
        ) : (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Text
              fontSize="14px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="20px"
            >
              There are no pending withdrawal requests to display at the moment.
            </Text>
          </Box>
        )}
      </TableContainer>
    </>
  );
};

export default MarketLogsDashboard;