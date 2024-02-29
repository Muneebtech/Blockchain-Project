import Navbar from "@/components/Navbar";
import { Price } from "@/components/Price";

const Home = () => {
  return (
    <div className="w-full p-8 flex flex-col items-center justify-between gap-10">
      <Navbar />
      <Price/>
    </div>
  );
};
export default Home;
