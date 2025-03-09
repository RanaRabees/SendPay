"use client"
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [showProducts, setShowProducts] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  return (
    <footer className="bg-gray-100 p-6 md:p-10 mt-10 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="hidden md:flex items-center">
            <Image
              src="/logo.png"
              alt="Sendpay Logo"
              width={40}
              height={40}
              className="mr-4"
            />
            <span className="text-[25px] text-[#6C63FF] font-semibold">Sendpay</span>
          </div>
          <p className="text-[#B7B3B3] text-[16px] md:text-[18px] mt-6 md:mt-10 w-full md:w-[250px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-18 mb-6 md:mb-0">
          <div>
            <h3
              className="text-[#8B8B8B] mb-4 text-[18px] md:text-[20px] font-semibold flex items-center justify-between cursor-pointer"
              onClick={() => setShowProducts(!showProducts)}
            >
              Products
              <span className="md:hidden">{showProducts ? '-' : '+'}</span>
            </h3>
            <ul
              className={`text-gray-600 text-sm mt-2 space-y-1 ${
                showProducts ? 'block' : 'hidden md:block'
              }`}
            >
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">Products</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">Products</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">Products</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">Products</li>
            </ul>
          </div>

          <div>
            <h3
              className="text-[#8B8B8B] mb-4 text-[18px] md:text-[20px] font-semibold flex items-center justify-between cursor-pointer"
              onClick={() => setShowAbout(!showAbout)}
            >
              About
              <span className="md:hidden">{showAbout ? '-' : '+'}</span>
            </h3>
            <ul
              className={`text-gray-600 text-sm mt-2 space-y-1 ${
                showAbout ? 'block' : 'hidden md:block'
              }`}
            >
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">About</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">About</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">About</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">About</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">About</li>
            </ul>
          </div>

          <div>
            <h3
              className="text-[#8B8B8B] mb-4 text-[18px] md:text-[20px] font-semibold flex items-center justify-between cursor-pointer"
              onClick={() => setShowCatalog(!showCatalog)}
            >
              Catalog
              <span className="md:hidden">{showCatalog ? '-' : '+'}</span>
            </h3>
            <ul
              className={`text-gray-600 text-sm mt-2 space-y-1 ${
                showCatalog ? 'block' : 'hidden md:block'
              }`}
            >
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">Catalog</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">Catalog</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">Catalog</li>
              <li className="hover:text-gray-800 text-[#000000] text-[16px] md:text-[18px] font-semibold mb-4 md:mb-6 cursor-pointer">Catalog</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-500 text-white p-4 rounded-lg shadow-lg mt-6 md:mt-0 w-full md:w-auto">
          <h3
            className="text-[18px] md:text-[20px] font-extrabold mb-2 flex items-center justify-between cursor-pointer"
            onClick={() => setShowSocial(!showSocial)}
          >
            Social Contacts
            <span className="md:hidden">{showSocial ? '-' : '+'}</span>
          </h3>
          <ul
            className={`space-y-2 ${showSocial ? 'block' : 'hidden md:block'}`}
          >
            <li className="flex items-center space-x-2">
              <img src="/facebook.png" alt="Facebook" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full" />
              <span className="text-[16px] md:text-[18px] font-medium">Facebook</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/github.png" alt="Github" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full" />
              <span className="text-[16px] md:text-[18px] font-medium">Github</span>
            </li>
            <li className="flex items-center space-x-2">
              <img src="/twitter.png" alt="Twitter" className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full" />
              <span className="text-[16px] md:text-[18px] font-medium">Twitter</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}