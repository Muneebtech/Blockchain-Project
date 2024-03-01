import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "@/components/Navbar";
import Price from "../components/Price";
import { fetchEthereumPrice } from "./api/ethereumPrice";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Home: React.FC<{ data: any }> = ({ data }) => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "bottom center",
            scrub: 0.5,
          },
        }
      );
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-between gap-10">
      <Navbar />
      <div className="pt-20">
        <Price data={data} />

        <Section
          ref={(el: any) => el && (sectionsRef.current[0] = el)}
          title="Get Started"
          description="Ethereum.org is your portal into the world of Ethereum. The tech is new and ever-evolving – it helps to have a guide. Here's what we recommend you do if you want to dive in."
          imageSrc="/computer.png"
          imageAlt="Image"
          reverse={false}
        />

        <Section
          ref={(el: any) => el && (sectionsRef.current[1] = el)}
          title="What is Ethereum?"
          description="Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world – all you need is the internet."
          imageSrc="/cta2.png"
          imageAlt="Image"
          reverse={true}
        />
        <Footer />
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  let data = await fetchEthereumPrice();
  return {
    props: {
      data: data ?? null,
    },
  };
};

export default Home;
