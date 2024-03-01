import { setEthereumPrice } from "@/redux/EthereumSlice";
import { RootState } from "@/redux/rootReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Price = ({ data }: any) => {
  const { price }: any = useSelector((state: RootState) => state.ethereum);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEthereumPrice(data.usdPrice));
  }, [data]);

  return (
    <>
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 py-16 px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
              Welcome to Ethereum Space
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Ethereum is the community-run technology powering the
              cryptocurrency ether (ETH) and thousands of decentralized
              applications.
            </p>
            {price && (
              <div className=" bg-white rounded-lg shadow-lg p-4">
                <p className="text-xl text-gray-800 font-semibold">
                  Current Ethereum Price:
                </p>
                <p className="text-2xl text-yellow-500 font-bold">${price}</p>
              </div>
            )}
          </div>

          {/* Right Column: Image */}
          <div className="text-center md:text-right">
            <img
              src="/ethereum.png"
              alt="Ethereum Logo"
              className="w-full md:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Price;
