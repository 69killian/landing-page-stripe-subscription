'use client'; 

import Image from "next/image";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import LogoMarquee from "./LogoMarquee";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
   
    window.addEventListener("scroll", handleScroll);

    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 
  const tilt = Math.min(scrollY / 10, 30); // Limite l'inclinaison à 30 degrés

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="hero-section">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <section className="mb-10 mt-[-40px] container grid place-items-center text-center py-20 md:py-32 gap-10 font-sans">
        {/* Texte principal */}
        <div className="space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <button className="mb-10 relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-blue-900 transition-all duration-300 hover:bg-transparent px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                NextJS technology for better integrations &gt;
              </span>
            </button>

            <h1 className="font-sans">
              Your{" "}
              <span className="bg-gradient-to-r from-[#2B65E2] via-[#537DE5] to-[#2B65E280] text-transparent bg-clip-text">
                Stripe
              </span>{" "}
              Integration in
            </h1>
            <h2>
              <span className="text-[80px] text-white bg-blue-900 rounded-[10px] px-5 inline-block transform rotate-6 transition-transform duration-300 hover:rotate-0">
                Minutes
              </span>
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto font-sans">
            Stripe integrations are intimidating, but they don't have to be. Let's prove it.
          </p>

          {/* Boutons */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-auto bg-blue-700 hover:bg-blue-800">
              Get Started
            </Button>

            <a
              rel="noreferrer noopener"
              href="https://github.com/69killian"
              target="_blank"
              className={`w-full md:w-auto ${buttonVariants({ variant: "outline" })}`}
            >
              Github Repository
              <GitHubLogoIcon className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>


        <LogoMarquee/>

        {/* Image */}
        <div style={{transform: `perspective(1500px) rotateX(${tilt}deg)`, WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",}} className={` shadow relative z-10 mt-0 p-5 bg-gray-100 rounded-xl border-2 border-blue-300/20 backdrop-blur-sm bg-blue-100/10 dark:border-blue-900/20 dark:bg-blue-900/20 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`} >
          <div className="absolute inset-0 rounded-md pointer-events-none"></div>
          <Image
            src="/dashboardstripeeng.png"
            width={1320}
            height={512}
            alt="Stripe Course Illustration"
            className={` rounded-md select-none pointer-events-none transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)",
              transform: `perspective(1500px) rotateX(${tilt}deg)`, // Incline l'image à plat avec rotation 3D
            }}
            onLoadingComplete={handleImageLoad}
          />
        </div>
      </section>
    </div>
  );
};
