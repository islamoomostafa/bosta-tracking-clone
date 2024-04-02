"use client";
import React from "react";
import ShipmentTracker from "./_components/ShipmentTracker";
import ShipmentDetails from "./_components/ShimpmentDetails";
import Hero from "./_components/Hero";
import { AppProvider } from "./_context/AppContext";

import Header from "./_components/Header";

function page() {
  return (
    <AppProvider>
      <Header />
      {/* <ShipmentTracker /> */}
      <Hero />
      <ShipmentDetails />
    </AppProvider>
  );
}

export default page;
