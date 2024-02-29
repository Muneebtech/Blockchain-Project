`use client`
import { fetchEthereumPrice } from "@/pages/api/ethereumPrice";
import React, { useState } from "react";

export const Price = () => {
  const [Price, setPrice] = useState() as any;
  const getPrice = async () => {
    const data = await fetchEthereumPrice();
    setPrice(data);
  };
  return (
    <>
      <button onClick={() => getPrice()}>Get Price</button>
      <h1>Ethereum Price: {Price?.usdPrice ?? 350}</h1>
    </>
  );
};
