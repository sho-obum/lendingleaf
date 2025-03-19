"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HomeSection from "@/components/HomeSection";
import Image from "next/image";
import bgImage from "../assets/images/bgImage.png";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleGetStarted = () => {
    setShowForm(true);
  };

  const handleGoHome = () => {
    setShowForm(false);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image (persistent) */}
      <Image
        src={bgImage}
        alt="Background Image"
        fill
        className="object-cover fixed inset-0 -z-10"
        priority
      />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10">
        {showForm ? (
          <HomeSection onGoHome={handleGoHome} />
        ) : (
          <HeroSection onGetStarted={handleGetStarted} />
        )}
      </div>
    </div>
  );
}
