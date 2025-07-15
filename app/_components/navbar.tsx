"use client";
import React from "react";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function Navbar() {
  const pathnaame = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/houses", label: "Properties" },
    { href: "/blog", label: "Blog" },
  ];
  // console.log(Links);s
  console.log(pathnaame);
  return (
    <div className="py-2  shadow-smpy-2 bg-white ">
      <div className="navbar  container mx-auto xl:max-w-[1500px] ">
        <div className="Desktop flex items-center justify-between">
          <Image src={Logo} alt="logo" width={100} height={100} className="" />
          <div className="flex items-center space-x-6 mr-3 ">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-700 hover:text-gray-500 ${
                  pathnaame === link.href ? "text-gray-500 font-semibold " : ""
                }transition-all duration-300`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
