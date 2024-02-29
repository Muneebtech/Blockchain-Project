import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
} from "wagmi";
import dynamic from "next/dynamic";
import { AccountComponentProps } from "@/components/Account";
import { WalletComponentProps } from "@/components/WalletOptions";
const AccountComponent = dynamic<AccountComponentProps>(
  () => import("./Account" as any),
  {
    ssr: false,
  }
);
const WalletOptions = dynamic<WalletComponentProps>(
  () => import("./WalletOptions" as any),
  {
    ssr: false,
  }
);
const Navbar = () => {
  const { isConnected } = useAccount();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect, connectors } = useConnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-0">
        <>
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <span>
                  <Image
                    src="/logo.png"
                    alt="N"
                    width="52"
                    height="52"
                    className="w-8"
                  />
                </span>
                <span>BlockChain</span>
              </span>
            </Link>
          </div>
        </>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {isConnected ? (
            <AccountComponent
              disconnect={disconnect}
              address={address}
              ensName={ensName}
              ensAvatar={ensAvatar}
            />
          ) : (
            <WalletOptions connect={connect} connectors={connectors} />
          )}
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
