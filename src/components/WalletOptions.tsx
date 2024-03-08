import { Connector } from "wagmi";
export interface WalletComponentProps {
  connect: any;
  connectors: any;
}

const WalletOptions: React.FC<WalletComponentProps> = ({
  connect,
  connectors,
}) => {
  return connectors.map((connector: Connector, index : number) => (
    //while mapping use of index as key, not a good practice, basic rule of react
    <div key={index}> 
      <button
        className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5 flex justify-evenly items-center gap-2"
        key={connector.uid}
        onClick={() => connect({ connector })}
      >
        <img src={connector.icon}></img>
        <span>Connect Wallet</span>
      </button>
    </div>
  ));
};
export default WalletOptions;
