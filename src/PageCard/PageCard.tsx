"use client";
import {
  Box,
  Spinner,
  Stack,
  StackProps,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";

import Footer from "@/shared/widgets/Footer";
import NavBar from "@/shared/widgets/NavBar";
interface Props extends StackProps {
  children: ReactNode;
}
const PageCard: React.FC<Props> = ({ children, className, ...rest }) => {
  const [render, setRender] = useState(true);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1248px)");
  const classes = [];
  const [loading, setLoading] = useState(false);
  if (className) classes.push(className);

  useEffect(() => {
    setRender(true);
  }, []);

  return loading ? (
    <>
      <Box
        background={`
           
            black
          `}
        position={"fixed"}
        zIndex={3}
      >
        <NavBar />
      </Box>
      <Stack
        alignItems="center"
        justifyContent="center"
        minHeight={"100vh"}
        pt="8rem"
        backgroundColor="#010409"
        pb={isLargerThan1280 ? "7rem" : "0rem"}
        className={classes.join(" ")}
        {...rest}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#010409"
          size="xl"
        />
      </Stack>
    </>
  ) : (
    <>
      {render ? (
        <>
          <Box
            background={`
           
            black
          `}
            position={"fixed"}
            zIndex={3}
          >
            <NavBar />
            <title>Coin Analysis | CryptoNite</title>
          </Box>
          <Box position={"fixed"} zIndex={0.5}>
            {/* <FeedbackModal /> */}
          </Box>
          <Stack
            zIndex={1}
            alignItems="center"
            minHeight={"100vh"}
            pt="8rem"
            background={`

            black
          `}
            pb={isLargerThan1280 ? "7rem" : "0rem"}
            className={classes.join(" ")}
            {...rest}
          >
            {children}
          </Stack>

          <Footer />
        </>
      ) : (
        <>
          <Box
            background={`
            radial-gradient(circle 1800px at top left, rgba(115, 49, 234, 0.10), transparent) top left,
            radial-gradient(circle 1200px at bottom right, rgba(115, 49, 234, 0.10), transparent) bottom right,
            black
          `}
            position={"fixed"}
            zIndex={3}
          >
            <NavBar />
          </Box>
          <Stack
            alignItems="center"
            minHeight={"100vh"}
            pt="8rem"
            backgroundColor="#010409"
            pb={isLargerThan1280 ? "7rem" : "0rem"}
            className={classes.join(" ")}
            {...rest}
          >
            <Box>
              <Text color="white" fontSize="25px">
                Error Loading Screen
              </Text>
            </Box>
          </Stack>
        </>
      )}
    </>
  );
};

export default PageCard;
