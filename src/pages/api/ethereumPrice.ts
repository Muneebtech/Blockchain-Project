import { fetchApi } from "@/utils/api";
const headers = {
  "x-api-key": `${process.env.NEXT_PUBLIC_MORALIS_API_KEY}`,
  "Content-Type": "application/json",
};
export const fetchEthereumPrice = () => {
  const url = `https://deep-index.moralis.io/api/v2.2/erc20/${process.env.NEXT_PUBLIC_COIN_ADDRESS}/price?chain=bsc`;
  return fetchApi(url, { headers });
};
