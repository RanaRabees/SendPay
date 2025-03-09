"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative">
        <div className="flex justify-between items-center p-4">
          <div className="md:hidden flex items-center">
            <Image
              src="/logo.png"
              alt="Sendpay Logo"
              width={40}
              height={40}
              className="mr-4"
            />
            <span className="text-xl font-bold">Sendpay</span>
          </div>

          <div className="md:hidden">
            <button aria-label="Toggle Menu" onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg
                className="h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <nav
            className={`flex items-center transition-all duration-300 ${isMenuOpen
              ? 'flex-col mt-4 p-4 rounded-md shadow-md bg-white absolute top-16 left-0 w-full z-10'
              : 'hidden md:flex md:justify-between md:items-center md:p-0 md:shadow-none md:bg-transparent md:static md:w-full'
              }`}
          >
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
            <div className="md:flex md:items-center">
              <div className="md:flex md:items-center md:space-x-12">
                <a
                  href="#"
                  className={`text-gray-700 hover:text-blue-500 font-bold ${isMenuOpen ? 'block mb-2' : ''}`}
                >
                  send money
                </a>
                <a
                  href="#"
                  className={`text-gray-700 hover:text-blue-500 font-bold ${isMenuOpen ? 'block mb-2' : ''}`}
                >
                  receive money
                </a>
                <a
                  href="#"
                  className={`text-gray-700 hover:text-blue-500 font-bold ${isMenuOpen ? 'block mb-2' : ''}`}
                >
                  language
                </a>
                <a
                  href="#"
                  className={`text-gray-700 hover:text-blue-500 font-bold ${isMenuOpen ? 'block mb-2' : ''}`}
                >
                  How it works
                </a>
              </div>
            </div>

            <div className={`md:flex md:items-center md:space-x-4 ${isMenuOpen ? 'hidden' : ''}`}>
              <a
                href="#"
                className="border border-[#B7B3B3] rounded px-4 py-2 text-[#000000] hover:bg-gray-200 transition-colors"
              >
                Sign in
              </a>
              <a
                href="#"
                className="border border-[#B7B3B3] bg-[#6C63FF] text-white rounded px-4 py-2 hover:bg-[#8d87ff] transition-colors"
              >
                Register
              </a>
            </div>

            <div className="flex flex-col md:hidden space-y-2">
              <a
                href="#"
                className={`border border-[#B7B3B3] rounded px-4 py-2 text-[#000000] hover:bg-gray-200 transition-colors ${isMenuOpen ? 'block' : ''}`}
              >
                Sign in
              </a>
              <a
                href="#"
                className={`border border-[#B7B3B3] bg-[#6C63FF] text-white rounded px-4 py-2 hover:bg-[#8d87ff] transition-colors ${isMenuOpen ? 'block' : ''}`}
              >
                Register
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-2/4 mb-8 md:mb-0 md:p-5">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#000000] leading-relaxed md:leading-snug">
              Sending Money is Easier than before
            </h1>
            <div className="w-12 h-1 bg-[#B7B3B3] mb-4"></div>
            <p className="text-gray-600 mb-8 text-[18px] md:w-[350px] md:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed consectetur libero. Curabitur.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="border border-[#353434] bg-[#6C63FF] text-white rounded px-6 py-3 hover:bg-[#8d87ff] transition-colors">
                Register
              </button>
              <button className="border border-[#B7B3B3] text-[#000000] hover:text-[#312f2f] rounded px-6 py-3 hover:bg-gray-200 transition-colors">
                learn more
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/4 flex justify-center md:justify-end">
            <Image
              src="/undraw_Mobile_application.png"
              alt="Phone Illustration"
              width={500}
              height={500}
              className="max-w-full md:max-w-md"
            />
          </div>
        </div>
      </main>
    </>
  );
}