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
import useDataLoader from "../hooks/useDataLoader";
import { useSelector } from "react-redux";
import { selectTrendingData } from "@/store/slices/readDataSlice";

export default function TrendingData(){
    const {available} = useDataLoader();
    const trendingData=useSelector(selectTrendingData);
    console.log(trendingData);
    return(
<></>
    )
}