import { setEthereumPrice } from "@/redux/EthereumSlice";
import { motion } from "framer-motion";
import { RootState } from "@/redux/rootReducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Price = ({ data }: any) => {
  const { price }: any = useSelector((state: RootState) => state.ethereum);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setEthereumPrice(data.usdPrice));
  }, [data]); //unnecessary dependency, he is using serveside rendering for the data so useEffect doesn't matter instead useRedux on server level

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-br from-blue-500 to-purple-600 py-16 px-6 md:px-12 lg:px-24 xl:px-32"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            Welcome to Ethereum Space
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg text-gray-200 mb-6"
          >
            Ethereum is the community-run technology powering the cryptocurrency
            ether (ETH) and thousands of decentralized applications.
          </motion.p>
          {price && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="bg-white rounded-lg shadow-lg p-4"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-2 md:mb-0">
                  Current Ethereum Price:
                </p>
                <p className="text-xl md:text-2xl text-yellow-500 font-bold">
                  ${price}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center md:text-right"
        >
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src="/ethereum.png"
            alt="Ethereum Logo"
            className="w-full md:w-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Price;
