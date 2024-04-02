import React from "react";
import { useAppContext } from "../_context/AppContext";
import Stepper from "./Stepper";

function Hero() {
  //get api data
  const { shipmentData } = useAppContext();
  //current status
  const status = shipmentData?.CurrentStatus.state || "";
  //color of current status
  const getStatusColor = () => {
    if (status === "CANCELLED") {
      return "text-red-500";
    } else if (status === "DELIVERED") {
      return "text-green-500";
    } else if (status === "DELIVERED_TO_SENDER") {
      return "text-yellow-500";
    } else {
      return "text-gray-500";
    }
  };

  //title of current status
  const getStatusText = () => {
    if (status === "CANCELLED") {
      return "تم إلغاء الشحنة";
    } else if (status === "DELIVERED") {
      return "تم تسليم الشحنة";
    } else if (status === "DELIVERED_TO_SENDER") {
      return "تم تسليم الشحنة إلى المرسل";
    } else {
      return "";
    }
  };

  //day name
  const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-EG", { weekday: "long" });
  };

  return (
    <div dir="rtl">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-20 mt-16 border max-w-[950px] mx-auto p-4 text-sm">
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-center">
            رقم الشحنة {shipmentData?.TrackingNumber}
          </span>

          <span className="text-center justify-center items-center">
            <span className={getStatusColor()}>{getStatusText()}</span>
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-center">آخر تحديث</span>
          <span className="text-center">
            {shipmentData &&
              `${getDayName(shipmentData.CurrentStatus.timestamp)} ${new Date(
                shipmentData.CurrentStatus.timestamp
              ).toLocaleDateString()} at ${new Date(
                shipmentData.CurrentStatus.timestamp
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}`}
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-center">اسم التاجر</span>
          <span>{shipmentData?.provider}</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <span className="text-center">موعد التسليم</span>
          <span>
            {shipmentData &&
              new Date(shipmentData.PromisedDate).toLocaleDateString("ar-EG")}
          </span>
        </div>
      </div>

      <div
        dir="rtl"
        className="stepper flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-20 border max-w-[950px] mx-auto p-4 text-sm"
      >
        <Stepper status={status} />
      </div>
    </div>
  );
}

export default Hero;
