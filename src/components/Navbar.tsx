"use client";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "../assets/images/LogoLL.png"

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-10">
      {/* Logo */}
      <div className="text-2xl font-bold text-white flex flex-row gap-3">

        <Image src={Logo} alt="Logo" width={200}/>
        {/* <span className="text-green-400">Lendingleaf.in</span> */}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
      <Button className="bg-transparent text-white px-6 py-3  text-base font-thin font-montserrat hover:underline hover:underline-offset-2 transition ">
          Button 1
        </Button>
      <Button className="bg-transparent text-white px-6 py-3  text-base font-thin font-montserrat hover:bg-white/0 transition ">
          Button 2
        </Button>
      <Button className="bg-transparent text-white px-6 py-3  text-base font-thin font-montserrat hover:bg-white/10 transition ">
          Button 3
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
