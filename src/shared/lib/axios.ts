import axios from "axios";
// import { Url } from "../constants/Url";

const Axios = axios.create({
  baseURL:"https://api.coingecko.com/api/v3",
  headers: {
    "Content-Type": "application/json",
  },
});

  // export const AxiosGet = async (url:string) => {
  //     const apiKey = process.env.NEXT_PUBLIC_COINGECKO_API_KEY; // replace with your actual API key
  //     const headers = {
  //       "Content-Type": "application/json",
  //       "x-cg-pro-api-key": apiKey
  //     };
  //     const  data  = await Axios.get(url, { headers :headers});
  //     return data;
  //   };
  
  

export const AxiosPost = async (url:string, objects:any) => {
  console.log("entering")
  const response = await Axios.post(url, objects);
  console.log("Recieved",response);
  return response;
};
