import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// import CoinData from "../../app/config/types";

const initialState = {
  hourlyBTCData: {},
  hourlyETHData: null,
  hourlyUSDTData: null,
  hourlyUSDCData: null,
  hourlyDAIData: null,
  dailyBTCData: null,
  dailyETHData: null,
  dailyUSDTData: null,
  dailyUSDCData: null,
  dailyDAIData: null,
  monthlyBTCData: null,
  monthlyETHData: null,
  monthlyUSDTData: null,
  monthlyUSDCData: null,
  monthlyDAIData: null,
  allBTCData: null,
  allETHData: null,
  allUSDTData: null,
  allUSDCData: null,
  allDAIData: null,
  top50Data: null,
  coinHistoricData: {},
  coinInformation :{},
  BTCcompanyHoldingsData:{},
  ETHCompanyHoldingsData:{}
};

export const readDataSlice = createSlice({
  name: "read_data",
  initialState,
  reducers: {
    setHourlyBTCData(state, action) {
      state.hourlyBTCData = action.payload;
    },
    setHourlyETHData(state, action) {
      state.hourlyETHData = action.payload;
    },
    setHourlyUSDTData(state, action) {
      state.hourlyUSDTData = action.payload;
    },
    setHourlyUSDCData(state, action) {
      state.hourlyUSDCData = action.payload;
    },
    setHourlyDAIData(state, action) {
      state.hourlyDAIData = action.payload;
    },
    setDailyBTCData(state, action) {
      state.dailyBTCData = action.payload;
    },
    setDailyETHData(state, action) {
      state.dailyETHData = action.payload;
    },
    setDailyUSDTData(state, action) {
      state.dailyUSDTData = action.payload;
    },
    setDailyUSDCData(state, action) {
      state.dailyUSDCData = action.payload;
    },
    setDailyDAIData(state, action) {
      state.dailyDAIData = action.payload;
    },
    setMonthlyBTCData(state, action) {
      state.monthlyBTCData = action.payload;
    },
    setMonthlyETHData(state, action) {
      state.monthlyETHData = action.payload;
    },
    setMonthlyUSDTData(state, action) {
      state.monthlyUSDTData = action.payload;
    },
    setMonthlyUSDCData(state, action) {
      state.monthlyUSDCData = action.payload;
    },
    setMonthlyDAIData(state, action) {
      state.monthlyDAIData = action.payload;
    },
    setAllBTCData(state, action) {
      state.allBTCData = action.payload;
    },
    setAllETHData(state, action) {
      state.allETHData = action.payload;
    },
    setAllUSDTData(state, action) {
      state.allUSDTData = action.payload;
    },
    setAllUSDCData(state, action) {
      state.allUSDCData = action.payload;
    },
    setAllDAIData(state, action) {
      state.allDAIData = action.payload;
    },
    setTop50Data(state, action) {
      state.top50Data = action.payload;
    },
    setCoinHistoricData(state, action) {
      state.coinHistoricData = { ...state.coinHistoricData, ...action.payload };
    },
    setCoinInformation(state, action) {
      state.coinInformation = { ...state.coinInformation, ...action.payload };
    },
    setBTCcompanyHoldingsData(state, action) {
      state.BTCcompanyHoldingsData = action.payload;
    },
    setETHCompanyHoldingsData(state, action) {
      state.ETHCompanyHoldingsData = action.payload;
    },


    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.read_data,
        };
      },
    },
  },
});

export const {
  setHourlyBTCData,
  setHourlyDAIData,
  setHourlyETHData,
  setHourlyUSDCData,
  setHourlyUSDTData,
  resetState,
  setEffectiveAPR,
  setHealthFactor,
  setDailyBTCData,
  setDailyETHData,
  setDailyUSDCData,
  setDailyUSDTData,
  setDailyDAIData,
  setMonthlyBTCData,
  setMonthlyETHData,
  setMonthlyUSDCData,
  setMonthlyUSDTData,
  setMonthlyDAIData,
  setAllBTCData,
  setAllETHData,
  setAllUSDCData,
  setAllUSDTData,
  setAllDAIData,
  setTop50Data,
  setCoinHistoricData,
  setCoinInformation,
  setBTCcompanyHoldingsData,
  setETHCompanyHoldingsData
} = readDataSlice.actions;

export const selectEffectiveApr = (state) => state.read_data.effectiveAPR;
export const selectHealthFactor = (state) => state.read_data.healthFactor;
export const selectHourlyBTCData = (state) => state.read_data.hourlyBTCData;
export const selectHourlyETHData = (state) => state.read_data.hourlyETHData;
export const selectHourlyUSDTData = (state) => state.read_data.hourlyUSDTData;
export const selectHourlyUSDCData = (state) => state.read_data.hourlyUSDCData;
export const selectHourlyDAIData = (state) => state.read_data.hourlyDAIData;
export const selectDailyBTCData = (state) => state.read_data.dailyBTCData;
export const selectDailyETHData = (state) => state.read_data.dailyETHData;
export const selectDailyUSDTData = (state) => state.read_data.dailyUSDTData;
export const selectDailyUSDCData = (state) => state.read_data.dailyUSDCData;
export const selectDailyDAIData = (state) => state.read_data.dailyDAIData;
export const selectMonthlyBTCData = (state) => state.read_data.monthlyBTCData;
export const selectMonthlyETHData = (state) => state.read_data.monthlyETHData;
export const selectMonthlyUSDTData = (state) => state.read_data.monthlyUSDTData;
export const selectMonthlyUSDCData = (state) => state.read_data.monthlyUSDCData;
export const selectMonthlyDAIData = (state) => state.read_data.monthlyDAIData;
export const selectAllBTCData = (state) => state.read_data.allBTCData;
export const selectAllETHData = (state) => state.read_data.allETHData;
export const selectAllUSDTData = (state) => state.read_data.allUSDTData;
export const selectAllUSDCData = (state) => state.read_data.allUSDCData;
export const selectAllDAIData = (state) => state.read_data.allDAIData;
export const selectTop50Data = (state) => state.read_data.top50Data;
export const selectcoinHistoricData = (state) => state.read_data.coinHistoricData;
export const selectCoinInformation = (state) => state.read_data.coinInformation;
export const selectBTCcompanyHoldingsData = (state) => state.read_data.BTCcompanyHoldingsData;
export const selectETHcompanyHoldingsData = (state) => state.read_data.ETHCompanyHoldingsData;




export default readDataSlice.reducer;
