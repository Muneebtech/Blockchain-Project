import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const sectionBackgroundColor =
    theme === "dark" ? "bg-[#3C8AF4]" : "bg-[#A4A5FF]";
  const sectionTextColor = theme === "dark" ? "text-white" : "text-gray-800"; // Next Js render first on server and these checks can cause Hydration errors
  return (
    <footer className={`${sectionBackgroundColor} ${sectionTextColor} py-12`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-2 md:flex-row justify-between items-start">
          <div className="mb-6 md:mb-0 md:w-1/3">
            <div>
              <h2 className="text-xl font-semibold mb-4">About Ethereum</h2>
              <p className="text-sm">
                Ethereum is a decentralized, open-source blockchain system that
                features smart contract functionality. It is the second-largest
                cryptocurrency platform by market capitalization, after Bitcoin.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="text-sm">
              <li>
                <a href="https://ethereum.org/">Official Website</a>
              </li>
              <li>
                <a href="https://etherscan.io/">Etherscan</a>
              </li>
              <li>
                <a href="https://ethereumprice.org/">Ethereum Price</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="text-sm">
              <li>
                <a href="https://reddit.com/r/ethereum">Reddit</a>
              </li>
              <li>
                <a href="https://twitter.com/ethereum">Twitter</a>
              </li>
              <li>
                <a href="https://www.ethereum.org/dev">Developers</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="text-sm">
              <li>
                {" "}
                <p>Email: support@ethereum.org</p>
              </li>
              <li>
                <p>Address: 123 Ethereum Street, Blockchain City</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
