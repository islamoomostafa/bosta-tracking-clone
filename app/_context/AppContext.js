import React, { createContext, useState, useContext } from "react";

//Create a context
const AppContext = createContext();

//Custom hook
export const useAppContext = () => {
  return useContext(AppContext);
};

//wrap with the context provider
export const AppProvider = ({ children }) => {
  //State variables to manage tracking number, shipment data, and error
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipmentData, setShipmentData] = useState(null);
  const [error, setError] = useState(null);

  //handle input change for tracking number
  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  //handle submission and fetch data
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://tracking.bosta.co/shipments/track/${trackingNumber}`
      );
      if (!response.ok) {
        // handle the error
        setShipmentData(null);
        throw new Error("Shipment not found");
      }
      // parsing the response
      const data = await response.json();
      // update the shipment data and resetting error
      setShipmentData(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching shipment data:", error);
      setError("خطأ في رقم الشحنة ، برجاء إدخال رقم شحنة صحيح.");
    }
  };

  return (
    <AppContext.Provider
      value={{
        trackingNumber,
        shipmentData,
        error,
        handleInputChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
