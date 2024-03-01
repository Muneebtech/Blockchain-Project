import Navbar from "@/components/Navbar";
import Price from "../components/Price";
import { fetchEthereumPrice } from "./api/ethereumPrice";
import Section from "@/components/Section";

const Home = ({ data }: any) => {
  return (
    <div className="w-full h-screen  p-8 flex flex-col items-center justify-between gap-10">
      <Navbar />
      <Price data={data} />

      <Section
        title="Get Started"
        description="Ethereum.org is your portal into the world of Ethereum. The tech is new and ever-evolving – it helps to have a guide. Here's what we recommend you do if you want to dive in."
        imageSrc="/computer.png"
        imageAlt="Image"
        reverse={false}
      />
      <Section
        title="What is Ethereum?"
        description="Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet."
        imageSrc="/cta2.png"
        imageAlt="Image"
        reverse={true}
      />
    </div>
  );
};

export const getServerSideProps = async () => {
  let data = await fetchEthereumPrice();
  return {
    props: {
      data,
    },
  };
};

export default Home;
