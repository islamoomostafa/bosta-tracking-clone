import React from "react";
import { useAppContext } from "../_context/AppContext";
import Image from "next/image";
function ShipmentTracker() {
  //access hook - api data
  const {
    trackingNumber,
    shipmentData,
    error,
    handleInputChange,
    handleSubmit,
  } = useAppContext();

  return (
    <div
      dir="rtl"
      className="px-4 border w-full sm:w-fit py-6 rounded absolute left-0 sm:left-72 bg-white"
    >
      <label htmlFor="trackingNumber">تتبع الشحنة</label>
      <form className="flex mt-2" onSubmit={handleSubmit}>
        <input
          className="border px-2"
          id="trackingNumber"
          type="text"
          value={trackingNumber}
          onChange={handleInputChange}
          placeholder="رقم التتبع"
        />
        <button type="submit">
          <Image
            src="/search.svg"
            href="search"
            width={40}
            height={40}
            className="bg-primary p-2 rounded-lg"
            s
          />
        </button>
      </form>
      {error && <p style={{ color: "red", paddingTop: "5px" }}>{error}</p>}
    </div>
  );
}

export default ShipmentTracker;
