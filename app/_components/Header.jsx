import React, { useState } from "react";
import Image from "next/image";
import ShipmentTracker from "./ShipmentTracker";

function Header() {
  //show the shipment tracker component
  const [showTracker, setShowTracker] = useState(false);

  //toggle tracker component
  const toggleTracker = () => {
    setShowTracker(!showTracker);
  };

  return (
    <header dir="rtl" className="bg-white border-b-[1px] px-6">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <Image src="./logo.svg" href="ok" width={120} height={120} />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg font-semibold">
                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    الرئيسية{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    الأسعار{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    كلم المبيعات{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className=" px-5 py-2.5 text-lg font-semibold text-gray-700 hover:border-t-2 hover:border-r-2 hover:border-l-2 hover:text-primary rounded"
                href="#"
                onClick={toggleTracker}
              >
                تتبع شحنتك &gt;
              </a>

              <div className="hidden sm:flex">
                <a
                  className=" px-5 py-2.5 text-lg font-semibold text-gray-700"
                  href="#"
                >
                  تسجيل الدخول
                </a>
                <a
                  className=" px-5 py-2.5 text-xl font-semibold text-primary"
                  href="#"
                >
                  ENG
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {showTracker && <ShipmentTracker />}
    </header>
  );
}

export default Header;
