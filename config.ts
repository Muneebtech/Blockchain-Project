import { http, createConfig } from "wagmi";
import { base, mainnet, optimism } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet, base],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});
