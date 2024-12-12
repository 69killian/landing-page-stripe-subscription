"use client";
import React from "react";
import { motion } from "framer-motion"; 
import { FeaturesSectionDemo } from "./FeaturesSectionDemo";
import './FeaturesDescription.css';

const FeaturesDescription = () => {
  return (
    <>
      <main className="py-[100px] relative mb-[200px]">
        <div
          className="absolute top-0 left-1/2 w-[1500px] h-[1500px] transform -translate-x-1/2 rounded-full 
                      bg-gradient-to-b from-blue-700 via-transparent to-transparent 
                      opacity-30 blur-[300px]"
        ></div>
        
        
        <motion.section
          className="text-5xl md:text-6xl font-bold flex text-center justify-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }} 
          viewport={{ once: true, amount: 0.5 }} 
        >
          <h1 className="font-sans floating-text">
            Why Everybody{" "}
            <span className="bg-gradient-to-r from-[#2B65E2] via-[#537DE5] to-[#2B65E280] text-transparent bg-clip-text">
              Trusted
            </span>{" "}
            Us
          </h1>
        </motion.section>
        
        
        <FeaturesSectionDemo />
      </main>
    </>
  );
};

export default FeaturesDescription;
