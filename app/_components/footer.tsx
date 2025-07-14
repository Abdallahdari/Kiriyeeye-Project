"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4 text-sm text-gray-700">
        {/* Logo & contact */}
        <div className="space-y-3">
          <Image src={Logo} alt="Flex Living" width={100} height={50} />
          <p>Contact number: 02033074477</p>
          <div className="flex space-x-3 text-teal-900">
            <Link href="#">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-facebook"></i>
            </Link>
            <Link href="#">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
          <p className="text-xs">&copy; 2021 Flex Living</p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Our team</Link>
            </li>
          </ul>
        </div>

        {/* Guests */}
        <div>
          <h3 className="font-semibold mb-2">Guests</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Career</Link>
            </li>
          </ul>
        </div>

        {/* Privacy */}
        <div>
          <h3 className="font-semibold mb-2">Privacy</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Stay up to date</h3>
          <p className="mb-2">
            Be the first to know about our newest apartments
          </p>
          <div className="flex items-center  rounded-md overflow-hidden mb-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-3 py-2 outline-none bg-gray-200"
            />
          </div>
          <button className="bg-teal-900 cursor-pointer hover:bg-teal-600 transition-all duration-300 text-white px-4 py-2 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
