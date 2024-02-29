import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";

const Navbar = () => {
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
          <button className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">
            Connect Wallet
          </button>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
