"use client";
import React from "react";
import { FeaturesSectionDemo } from "./FeaturesSectionDemo";
import './FeaturesDescription.css';


const FeaturesDescription = () => {
  return (
    <>
      <main className="py-[250px] relative">
        <div
          className="absolute top-0 left-1/2 w-[1500px] h-[1200px] transform -translate-x-1/2 rounded-full 
                      bg-gradient-to-b from-blue-700 via-transparent to-transparent 
                      opacity-30 blur-[300px]"
        ></div>
        <section className="text-5xl md:text-6xl font-bold flex text-center justify-center mb-20">
          <h1 className="font-sans floating-text">
            Why everybody{" "}
            <span className="bg-gradient-to-r from-[#2B65E2] via-[#537DE5] to-[#2B65E280] text-transparent bg-clip-text">
              Trusted
            </span>{" "}
            Us
          </h1>
        </section>
        {/* Appel du composant FeaturesSectionDemo pour afficher les cartes de fonctionnalités */}
        <FeaturesSectionDemo />
      </main>
    </>
  );
};

export default FeaturesDescription;
