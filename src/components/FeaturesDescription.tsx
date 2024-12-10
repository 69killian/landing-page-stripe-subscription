"use client";
import React from "react";
import { FeaturesSectionDemo } from "./FeaturesSectionDemo"; // Assurez-vous que ce fichier existe

const FeaturesDescription = () => {
  return (
    <>
    <main className="py-[250px]">
      <section className="text-5xl md:text-6xl font-bold flex text-center justify-center mb-20">
        <h1 className="font-sans">
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
