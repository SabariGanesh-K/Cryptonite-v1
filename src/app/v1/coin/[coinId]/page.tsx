"use client";
import PageCard from "@/PageCard/PageCard";
import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MarketExpandGraph from "@/shared/modules/MarketExpandGraph";
import MarketDescription from "@/shared/modules/MarketDescription";
export default function CoinPage({ params }: { params: { coinId: string } }) {
  const router = useRouter();
  const handleButtonClick = (val: string) => {
    localStorage.setItem("currentPage", val);
    router.push("/" + val);
  };
  const [backHover, setBackHover] = useState(false);

  return (
    <PageCard title={params.coinId}>
      <Box
        width={"90%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
      >
        <Box onClick={() => handleButtonClick("v1")}>
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
            onMouseEnter={() => {
              setBackHover(true);
            }}
            onMouseLeave={() => {
              setBackHover(false);
            }}
          >
            <Box marginRight={1.5}>
              <Image
                src={
                  !backHover ? "/arrowNavLeft.svg" : "/arrowNavLeftActive.svg"
                }
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

      <MarketExpandGraph coinId={params.coinId} />
      <MarketDescription coinId={params.coinId} />
    </PageCard>
  );
}
