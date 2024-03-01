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
  () => import("./Account"),
  {
    ssr: false,
  }
);
const WalletOptions = dynamic<WalletComponentProps>(
  () => import("./WalletOptions"),
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
    <div className="w-full pr-8 pl-8 pt-6 pb-6 fixed top-0 z-10 bg-gray-100 dark:bg-gray-900 shadow-md">
      <nav className="container relative flex items-center justify-between  mx-auto lg:justify-between xl:px-0">
        <>
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
            <Link href="/">
              <div className="flex items-center gap-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                <Image
                  src="/logo.png"
                  alt="N"
                  width="52"
                  height="52"
                  className="w-8"
                />
                <span>Ethereum</span>
              </div>
            </Link>
          </div>
        </>

        <div className=" flex gap-2 lg:flex nav__item">
          <ThemeChanger />
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
