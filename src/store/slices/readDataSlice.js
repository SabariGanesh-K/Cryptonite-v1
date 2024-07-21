import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
// import CoinData from "../../app/config/types";

const initialState = {
   BTCData: null,
  ETHData: null,
  USDTData: null,
  SolanaData: null,
  BNBData: null,
  top50Data: null,
  coinHistoricData: {},
  coinInformation :{},
  BTCcompanyHoldingsData:null,
  ETHCompanyHoldingsData:null,
  TrendingData:null,
  RateLimitError:false
};

export const readDataSlice = createSlice({
  name: "read_data",
  initialState,
  reducers: {
    setBTCData(state, action) {
      state. BTCData = action.payload;
    },
    setETHData(state, action) {
      state.ETHData = action.payload;
    },
    setUSDTData(state, action) {
      state.USDTData = action.payload;
    },
    setSolanaData(state, action) {
      state.SolanaData = action.payload;
    },
    setBNBData(state, action) {
      state.BNBData = action.payload;
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
    setTrendingData(state,action){
      state.TrendingData = action.payload;
    },
    setRateLimitError(state,action){
      state.RateLimitError = action.payload;
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
  setBTCData,
  setBNBData,
  setETHData,
  setSolanaData,
  setUSDTData,
  setTop50Data,
  setCoinHistoricData,
  setCoinInformation,
  setBTCcompanyHoldingsData,
  setETHCompanyHoldingsData,
  setTrendingData,
  setRateLimitError
} = readDataSlice.actions;

export const selectBTCData = (state) => state.read_data. BTCData;
export const selectETHData = (state) => state.read_data.ETHData;
export const selectUSDTData = (state) => state.read_data.USDTData;
export const selectSolanaData = (state) => state.read_data.SolanaData;
export const selectBNBData = (state) => state.read_data.BNBData;
export const selectTop50Data = (state) => state.read_data.top50Data;
export const selectcoinHistoricData = (state) => state.read_data.coinHistoricData;
export const selectCoinInformation = (state) => state.read_data.coinInformation;
export const selectBTCcompanyHoldingsData = (state) => state.read_data.BTCcompanyHoldingsData;
export const selectETHcompanyHoldingsData = (state) => state.read_data.ETHCompanyHoldingsData;
export const selectTrendingData = (state) => state.read_data.TrendingData;
export const selectRateLimitError=(state)=>state.read_data.RateLimitError;



export default readDataSlice.reducer;
