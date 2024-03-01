import { fetchApi } from "@/utils/api";
import logger from "@/utils/logger";
const headers = {
  "x-api-key": `${process.env.NEXT_PUBLIC_MORALIS_API_KEY}`,
  "Content-Type": "application/json",
};

export const fetchEthereumPrice = async () => {
  const url = `https://deep-index.moralis.io/api/v2.2/erc20/${process.env.NEXT_PUBLIC_COIN_ADDRESS}/price?chain=bsc`;
  try {
    const response = await fetchApi(url, { headers });

    if (response) {
      const data = await response;

      if (data && typeof data.usdPrice === "number") {
        return data;
      } else {
        logger.error("Invalid data format in API response");
      }
    } else {
      logger.error(`HTTP error ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    logger.error("Error fetching Ethereum price:", error);
  }
};
